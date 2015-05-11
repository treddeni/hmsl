/// <reference path="../../typings/jquery/jquery.d.ts"/>
var markup;
var uid = 1;
//var projects = { nextProjectID: 4, projects: [ {id:1, name:'Project One'}, {id:2, name:'Project Two'}, {id:3, name:'Project Three'} ]};
var projects = null;
var fields = [ 'Weight', 'Cost', 'Notes', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
var tree;

var ENTER_KEY = 13;

/*var tree = { "projectID": 1, "projectName": "Test", "version": 1, "nextNodeID": 5, "nodes": [{
  "id": 1,
  "name": "node1",
  "values":
  {
    "Weight": 1.2,
    "Cost": "0.50",
    "Notes": "some bs"
  },
  "nodes": [
    {
      "id": 2,
      "name": "node1.1",
      "values":
      {
        "Weight": 1.3,
        "Notes": "some bs2"
      },
      "nodes": [
        {
          "id": 3,
          "name": "node1.1.1",
          "nodes": []
        }
      ]
    },
    {
      "id": 4,
      "name": "node1.2",
      "nodes": []
    }
  ]
}]};*/

var MIN_COLUMN_WIDTH = 70;
var GRIPS_WIDTH = 16;

var resizeColumnLeft = 0;
var resizeField = '0';

var selectProject = function()
{
  var projectSelector = document.getElementById('projectSelector');
  var selectedOption = projectSelector.options[projectSelector.selectedIndex];
  
  if(selectedOption.id == "newProjectOption")
  {
    $('#editNewProjectNameInput').val("Type New Project Name and Press Enter to Create");
    $('#editNewProjectNameInput').show().focus().select();
  }
  else
  {
    if(projectSelector.value > 0 && document.getElementById('selectProjectOption'))                               //remove the select project option, once the user selects a project
    {
      $('#selectProjectOption').remove(); 
    }

    $.ajax({ type: 'GET', url: 'api/tree?projectID=' + projectSelector.value }).done(function(data)               //read tree for the selected project from the database
    {
      tree = data;
      $("#redips-drag").html(generateMarkup(tree, fields));                                                       //append the markup to the DOM
      redips.init();                                                                                              //initialize tree drag/drop library
      initProjectActions();
      refreshDataModelDisplay();                                                                                  //TODO: temp for displaying the model on the page for debugging purposes
    });  
  }                                                                                                 
};

var saveToDatabase = function()
{
  $.ajax({ type: 'POST', url: '/api/tree', dataType: 'json', data: {json:JSON.stringify(tree)} });
};

var refreshDataModelDisplay = function()
{
  var dataModelTextArea = document.getElementById('data-model');
  dataModelTextArea.value = JSON.stringify(tree, null, '\t');
};

var getDepth = function(row)
{
  var classes = row.className.split(' ');

  for(var i = 0; i < classes.length; i++)
  {
    var c = classes[i];

    if(c.indexOf('depth') > -1)
    {
      return parseInt(c.replace('depth', ''));
    }
  }
};

var getParentID = function(row)
{
  var classes = row.className.split(' ');

  for(var i = 0; i < classes.length; i++)
  {
    var c = classes[i];

    if(c.indexOf('parent') > -1)
    {
      return parseInt(c.replace('parent', ''));
    }
  }
};

var removeParent = function(row)
{
  var classes = row.className.split(' ');

  for(var i = 0; i < classes.length; i++)
  {
    var c = classes[i];

    if(c.indexOf('parent') > -1)
    {
      row.classList.remove(c);
    }
  }
};

var getAncestors = function(row)
{
  var ancestors = [];
  var classes = row.className.split(' ');

  for(var i = 0; i < classes.length; i++)
  {
    var c = classes[i];

    if(c.indexOf('ancestor') > -1)
    {
      ancestors.push(c);
    }
  }

  return ancestors;
};

var removeAncestors = function(row)
{
  var classes = row.className.split(' ');

  for(var i = 0; i < classes.length; i++)
  {
    var c = classes[i];

    if(c.indexOf('ancestor') > -1)
    {
      row.classList.remove(c);
    }
  }
};

var addAncestors = function(row, ancestors)
{
  for(var i = 0; i < ancestors.length; i++)
  {
    row.classList.add(ancestors[i]);
  }
};

var setNewAncestors = function(row, ancestors, parentID)
{
  removeParent(row);
  row.classList.add('parent' + parentID);
  removeAncestors(row);
  addAncestors(row, ancestors);
};

var moveAssembly = function(movedID, newParentID, oldParentID, newParentRow)                  //move the node/assembly in the view and the model, including all descendant nodes
{
  var oldParentNode = findNodeInTree(oldParentID);
  var newParentNode = findNodeInTree(newParentID);
  var movedNode     = findNodeInTree(movedID);

  if(oldParentNode)
  {
    if(oldParentNode.nodes && oldParentNode.nodes.length > 0)                                 //remove the moved node from it's old parent in the model
    {
      for (var i = 0; i < oldParentNode.nodes.length; i++)
      {
        if (oldParentNode.nodes[i].id === movedID)
        {
          oldParentNode.nodes.splice(i, 1);
          break;
        }
      }
    }
  }
  else
  {
    for (var i = 0; i < tree.nodes.length; i++)
    {
      if (tree.nodes[i].id === movedID)
      {
        tree.nodes.splice(i, 1);
        break;
      }
    }    
  }
  
  //TODO: if the old parent is childless now, then hide the old parent's expand/collapse icon

  newParentNode.nodes.push(movedNode);                                                        //add moved node to it's new parent in the model

  //fix up the ancestors classes for the moved row
  var movedRow = document.getElementById('rowid' + movedID);
  var ancestors = getAncestors(newParentRow);
  ancestors.push('ancestor' + newParentID);
  setNewAncestors(movedRow, ancestors, newParentID);

  //fix the depth for the moved row
  var oldDepth = getDepth(movedRow);
  var newDepth = getDepth(newParentRow)+1;
  movedRow.classList.remove('depth' + oldDepth);                                              //remove old depth class
  movedRow.classList.add('depth' + newDepth);                                                 //add new depth class
  document.getElementById('expandID' + movedID).style.marginLeft = (10 * newDepth) + 'px';    //change the indent of the moved node

  //move the table rows in the view
  if(movedNode.nodes && movedNode.nodes.length > 0)
  {
    for(var i = movedNode.nodes.length-1; i >= 0; i--)                                        // iterate backwards to perserve the order of the child nodes
    {
      moveNode(movedNode.nodes[i], movedNode.nodes[i].id, movedID, newDepth+1, ancestors);
    }
  }
};

var moveNode = function(node, nodeID, parentID, newDepth, ancestors)
{
  var nodeRow = document.getElementById('rowid' + nodeID);
  var parentRow = document.getElementById('rowid' + parentID);
  var oldDepth = getDepth(nodeRow);

  var newAncestors = ancestors.slice(0);
  newAncestors.push('ancestor' + parentID);
  setNewAncestors(nodeRow, newAncestors, parentID);

  nodeRow.classList.remove('depth' + oldDepth);                                             //remove old depth class
  nodeRow.classList.add('depth' + newDepth);                                                //add new depth class
  document.getElementById('expandID' + nodeID).style.marginLeft = (10 * newDepth) + 'px';   //change the indent of the moved node

  $(nodeRow).remove();
  $(nodeRow).insertAfter(parentRow);

  if(node.nodes && node.nodes.length > 0)
  {
    for(var i = node.nodes.length-1; i >= 0; i--)                                           // iterate backwards to perserve the order of the child nodes
    {
      moveNode(node.nodes[i], node.nodes[i].id, nodeID, newDepth+1, newAncestors);
    }
  }
};

var findNodeInTree = function(nodeID)
{
  if(tree.nodes && tree.nodes.length > 0)
  {
    for(var i = 0; i < tree.nodes.length; i++)
    {
        var foundNode = findNode(nodeID, tree.nodes[i]);

        if(foundNode) { return foundNode; }
    }
  }
};

var findNode = function(nodeID, node)
{
  if(node.id === nodeID)
  {
    return node;
  }
  else
  {
    if(node.nodes && node.nodes.length > 0)
    {
      for(var i = 0; i < node.nodes.length; i++)
      {
        var foundNode = findNode(nodeID, node.nodes[i]);

        if(foundNode) { return foundNode; }
      }
    }
  }
};

var findParentInTree = function(nodeID)
{
  if(tree.nodes && tree.nodes.length > 0)
  {
    for(var i = 0; i < tree.nodes.length; i++)
    {
        var foundParent = findParent(nodeID, tree.nodes[i], null);

        if(foundParent) { return foundParent; }
    }
  }
};

var findParent = function(nodeID, node, parent)
{
  if(node.id === nodeID)
  {
    return parent;
  }
  else
  {
    if(node.nodes && node.nodes.length > 0)
    {
      for(var i = 0; i < node.nodes.length; i++)
      {
        var foundParent = findParent(nodeID, node.nodes[i], node);

        if(foundParent) { return foundParent; }
      }
    }
  }
};

var deleteNode = function(el)
{
  var row = getAncestorTag(el, 'tr');
  var nodeID = parseInt(row.id.replace('rowid', ''));
  var node = findNodeInTree(nodeID);
  var parentNode = findParentInTree(nodeID);
  
  //remove the node from the view
  removeNodeRow(node);
  
  //TODO: if parent is childless now, then hide the parent's expand/collapse icon 
  
  //remove the node from the model
  for(var i = 0; i < parentNode.nodes.length; i++)
  {
    if(parentNode.nodes[i].id == nodeID)
    {
      parentNode.nodes.splice(i, 1);
      break;
    }
  }
  
  refreshDataModelDisplay();                                                        //TODO: temp for displaying the model on the page for debugging purposes
};

var removeNodeRow = function(node)
{
  var row = document.getElementById('rowid' + node.id);
  $(row).remove();
  
  if(node.nodes && node.nodes.length > 0)
  {
    for(var i = 0; i < node.nodes.length; i++)
    {
      removeNodeRow(node.nodes[i]);
    }
  }
};

var copyNode = function(source)
{
  var nodeIndex;
  var newRowMarkup;
  var sourceRow = getAncestorTag(source, 'tr');
  var nodeID = parseInt(sourceRow.id.replace('rowid', ''));
  
  var sourceNode = findNodeInTree(nodeID);
  var sourceParentNode = findParentInTree(nodeID);
  
  var newNode = jQuery.extend(true, {}, sourceNode);                                //clone the source node
  assignNewNodeIDs(newNode);                                                        //assign unique ids to each node in the clone
  
  if(sourceParentNode === undefined)                                                //handle case where the user tries to copy a top level node
  {
    nodeIndex = getNodeIndex(tree.nodes, sourceNode.id);                            
    tree.nodes.splice(nodeIndex, 0, newNode);
    newRowMarkup = addRow(newNode, 0, '', 0);    
  }
  else
  {
    nodeIndex = getNodeIndex(sourceParentNode.nodes, sourceNode.id);
    sourceParentNode.nodes.splice(nodeIndex, 0, newNode);
    newRowMarkup = getAssemblyMarkup(newNode.id, sourceNode.id, getDepth(sourceRow));
  }
  
  $(newRowMarkup).insertBefore(sourceRow);
  var newRow = document.getElementById('rowid' + newNode.id);
  REDIPS.drag.enableDivs('init', newRow.getElementsByTagName('div'));
  
  refreshDataModelDisplay();                                                        //TODO: temp for displaying the model on the page for debugging purposes
};

var assignNewNodeIDs = function(node)
{
  node.id = tree.nextNodeID++;
  
  if(node.nodes && node.nodes.length > 0)
  {
    for(var i = 0; i < node.nodes.length; i++)
    {
      assignNewNodeIDs(node.nodes[i]);
    }
  }
};

var getNodeIndex = function(nodes, id)
{
  var indexes = $.map(nodes, function(obj, index) 
  {
    if(obj.id == id) 
    {
        return index;
    }
  });

  return indexes[0];
};

var getAncestorTag = function upTo(el, tagName) 
{
  tagName = tagName.toLowerCase();

  while (el && el.parentNode) 
  {
    el = el.parentNode;
    if (el.tagName && el.tagName.toLowerCase() == tagName) 
    {
      return el;
    }
  }
};

function toggle(el)
{
  var row = getAncestorTag(el, 'tr');
  var id = parseInt(row.id.replace('rowid', ''));
  var icon = document.getElementById('icon' + id);

  if(row.classList.contains('collapsed'))
  {
    var children = document.querySelectorAll('.parent' + id);
    var childrenIcons = document.querySelectorAll('.iconp' + id);

    for(var i = 0; i < children.length; i++)
    {
      children[i].style.display = '';
      children[i].classList.add('collapsed');
    }

    for(var i = 0; i < childrenIcons.length; i++)
    {
      if(childrenIcons[i].classList.contains('glyphicon-chevron-down'))
      {
        childrenIcons[i].classList.remove('glyphicon-chevron-down');
        childrenIcons[i].classList.add('glyphicon-chevron-right');
      }
    }

    icon.classList.remove('glyphicon-chevron-right');
    icon.classList.add('glyphicon-chevron-down');
    row.classList.remove('collapsed');
    row.classList.add('expanded');
  }
  else
  {
    var descendants = document.querySelectorAll('.ancestor' + id);

    for (var i = 0; i < descendants.length; i++)
    {
      descendants[i].style.display = 'none';
    }

    icon.classList.remove('glyphicon-chevron-down');
    icon.classList.add('glyphicon-chevron-right');
    row.classList.remove('expanded');
    row.classList.add('collapsed');
  }
}

var updateNodeName = function(el)
{
  var row = getAncestorTag(el, 'tr');
  var nodeID = parseInt(row.id.replace('rowid',''));
  var node = findNodeInTree(nodeID);
  
  node.name = el.value;
  $('#nodeInput' + nodeID).attr('value', node.name);              //update the input value in the DOM, so that when we drag/move the row, the value is correct
  refreshDataModelDisplay();                                      //TODO: temp for displaying the model on the page for debugging purposes
};

function updateFieldValue(field, id)
{
  updateNodeValueInTree(id, field, document.getElementById(field + id).value);

  for(var i = 0; i < tree.nodes.length; i++)
  {
    aggregate_any(tree.nodes[i], field);
  }
}

function updateNodeValueInTree(id, field, value)
{
  var node = null;

  for(var i = 0; i < tree.nodes.length; i++)
  {
    node = updateNodeValue(id, tree.nodes[i], field, value);

    if(node)
    {
      return node;
    }
  }

  return node;
}

function updateNodeValue(id, node, field, value)
{
  var found = null;

  if(node && node.id == id)
  {
    return node;
  }

  if(node && node.nodes && node.nodes.length > 0)
  {
    for(var i = 0; i < node.nodes.length; i++)
    {
      found = updateNodeValue(id, node.nodes[i], field, value);

      if(found)
      {
        if(!found.values) { found.values = []; }
        found.values[field] = value;
        return found;
      }
    }
  }

  return null;
}