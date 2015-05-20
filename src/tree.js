var projects = null;
var tree;

var ENTER_KEY = 13;
var MIN_COLUMN_WIDTH = 70;
var GRIPS_WIDTH = 16;

function handleDataScroll()
{
  $('#redips-drag').scrollTop($('#data-container').scrollTop());
  $('#fields-header-row').scrollLeft($('#data-container').scrollLeft());
}

var selectProject = function()
{
  var projectSelector = document.getElementById('projectSelector');
  var selectedOption = projectSelector.options[projectSelector.selectedIndex];

  if(selectedOption.id === "newProjectOption")
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
      //displaySpreadSheet();
      //$('#tree-container').hide();
      displayTreeView(tree);
      $('#spreadSheetView').hide();
    });  
  }                                                                                                 
};

function printProject()
{
  console.log(JSON.stringify(tree, null, '\t'));
}

function displayRawValue(fieldName, nodeID)
{
  var field = Project.getField(fieldName);
  var node = findNodeInTree(parseInt(nodeID));
  
  if(node.values && node.values[field.name])
  {
    console.log(node.values[field.name]);
    $('#' + fieldName + nodeID).val(node.values[field.name]);
  }  
  else
  {
    $('#' + fieldName + nodeID).val('');
  }
}

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
    if(oldParentNode.children && oldParentNode.children.length > 0)                                 //remove the moved node from it's old parent in the model
    {
      for (var i = 0; i < oldParentNode.children.length; i++)
      {
        if (oldParentNode.children[i].id === movedID)
        {
          oldParentNode.children.splice(i, 1);
          break;
        }
      }
    }
  }
  else
  {
    for (var i = 0; i < tree.children.length; i++)
    {
      if (tree.children[i].id === movedID)
      {
        tree.children.splice(i, 1);
        break;
      }
    }    
  }
  
  //TODO: if the old parent is childless now, then hide the old parent's expand/collapse icon

  newParentNode.children.push(movedNode);                                                                            //add moved node to it's new parent in the model

  //fix up the ancestors classes for the moved row
  var movedRow = document.getElementById('rowid' + movedID);
  var movedDataRow = document.getElementById('datarowid' + movedID);
  var parentDataRow = document.getElementById('datarowid' + newParentID);
  
  var ancestors = getAncestors(newParentRow);
  ancestors.push('ancestor' + newParentID);
  setNewAncestors(movedRow, ancestors, newParentID);

  //fix the depth for the moved row
  var oldDepth = getDepth(movedRow);
  var newDepth = getDepth(newParentRow)+1;
  movedRow.classList.remove('depth' + oldDepth);                                                                  //remove old depth class
  movedRow.classList.add('depth' + newDepth);                                                                     //add new depth class
  document.getElementById('expandID' + movedID).style.marginLeft = (10 * newDepth) + 'px';                        //change the indent of the moved node
  document.getElementById('nodeInput' + movedID).style.width = (DEFAULT_NODE_INPUT_WIDTH-newDepth*10) + 'px';     //change the indent of the moved node

  //move the table rows in the view
  $(movedDataRow).remove();
  $(movedDataRow).insertAfter(parentDataRow);   
  
  if(movedNode.children && movedNode.children.length > 0)
  {
    for(var i = movedNode.children.length-1; i >= 0; i--)                                                            // iterate backwards to perserve the order of the child nodes
    {
      moveNode(movedNode.children[i], movedNode.children[i].id, movedID, newDepth+1, ancestors);
    }
  }
};

var moveNode = function(node, nodeID, parentID, newDepth, ancestors)
{
  var nodeRow = document.getElementById('rowid' + nodeID);
  var nodeDataRow = document.getElementById('datarowid' + nodeID);
  
  var parentRow = document.getElementById('rowid' + parentID);
  var parentDataRow = document.getElementById('datarowid' + parentID);
  
  var oldDepth = getDepth(nodeRow);

  var newAncestors = ancestors.slice(0);
  newAncestors.push('ancestor' + parentID);
  setNewAncestors(nodeRow, newAncestors, parentID);

  nodeRow.classList.remove('depth' + oldDepth);                                             //remove old depth class
  nodeRow.classList.add('depth' + newDepth);                                                //add new depth class
  document.getElementById('expandID' + nodeID).style.marginLeft = (10 * newDepth) + 'px';   //change the indent of the moved node

  $(nodeRow).remove();
  $(nodeRow).insertAfter(parentRow);
  
  $(nodeDataRow).remove();
  $(nodeDataRow).insertAfter(parentDataRow);  

  if(node.children && node.children.length > 0)
  {
    for(var i = node.children.length-1; i >= 0; i--)                                           // iterate backwards to perserve the order of the child nodes
    {
      moveNode(node.children[i], node.children[i].id, nodeID, newDepth+1, newAncestors);
    }
  }
};

var findNodeInTree = function(nodeID)
{
  if(tree.children && tree.children.length > 0)
  {
    for(var i = 0; i < tree.children.length; i++)
    {
      var foundNode = findNode(nodeID, tree.children[i]);

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
    if(node.children && node.children.length > 0)
    {
      for(var i = 0; i < node.children.length; i++)
      {
        var foundNode = findNode(nodeID, node.children[i]);

        if(foundNode) { return foundNode; }
      }
    }
  }
};

var findParentInTree = function(nodeID)
{
  if(tree.children && tree.children.length > 0)
  {
    for(var i = 0; i < tree.children.length; i++)
    {
        var foundParent = findParent(nodeID, tree.children[i], null);

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
    if(node.children && node.children.length > 0)
    {
      for(var i = 0; i < node.children.length; i++)
      {
        var foundParent = findParent(nodeID, node.children[i], node);

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
  for(var i = 0; i < parentNode.children.length; i++)
  {
    if(parentNode.children[i].id == nodeID)
    {
      parentNode.children.splice(i, 1);
      break;
    }
  }
};

var removeNodeRow = function(node)
{
  var row = document.getElementById('rowid' + node.id);
  $(row).remove();
  
  if(node.children && node.children.length > 0)
  {
    for(var i = 0; i < node.children.length; i++)
    {
      removeNodeRow(node.children[i]);
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
    nodeIndex = getNodeIndex(tree.children, sourceNode.id);                            
    tree.children.splice(nodeIndex, 0, newNode);
    newRowMarkup = addRow(newNode, 0, '', 0);    
  }
  else
  {
    nodeIndex = getNodeIndex(sourceParentNode.children, sourceNode.id);
    sourceParentNode.children.splice(nodeIndex, 0, newNode);
    newRowMarkup = getAssemblyMarkup(newNode.id, sourceNode.id, getDepth(sourceRow));
  }
  
  $(newRowMarkup).insertBefore(sourceRow);
  var newRow = document.getElementById('rowid' + newNode.id);
  REDIPS.drag.enableDivs('init', newRow.getElementsByTagName('div'));
};

var assignNewNodeIDs = function(node)
{
  node.id = tree.nextNodeID++;
  
  if(node.children && node.children.length > 0)
  {
    for(var i = 0; i < node.children.length; i++)
    {
      assignNewNodeIDs(node.children[i]);
    }
  }
};

var getNodeIndex = function(children, id)
{
  var indexes = $.map(children, function(obj, index) 
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
};

function updateFieldValue(field, id)
{
  updateNodeValueInTree(id, field, document.getElementById(field + id).value);

  for(var i = 0; i < tree.children.length; i++)
  {
    aggregate_any(tree.children[i], field);
  } 
}

function updateNodeValueInTree(id, field, value)
{
  var node = null;

  for(var i = 0; i < tree.children.length; i++)
  {
    node = tree.children[i];
    
    if(node.id == id)
    {
      if(!node.values) { node.values = {}; }
      node.values[field] = value;    
    }
    else
    {    
      updateNodeValue(id, node, field, value);
    }
  }
}

function updateNodeValue(id, node, field, value)
{
  var found = null;

  if(node && node.id == id)
  {
    return node;
  }

  if(node && node.children && node.children.length > 0)
  {
    for(var i = 0; i < node.children.length; i++)
    {
      found = updateNodeValue(id, node.children[i], field, value);

      if(found)
      {
        if(!found.values) { found.values = {}; }
        found.values[field] = value;
        return found;
      }
    }
  }

  return null;
}