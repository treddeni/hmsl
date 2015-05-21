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
  if($('#projectSelector').find(":selected").attr('id') === "newProjectOption")
  {
    $('#editNewProjectNameInput').val("Type New Project Name and Press Enter to Create");
    $('#editNewProjectNameInput').show().focus().select();
  }
  else
  {
    //remove the select project option, once the user selects a project
    if($('#projectSelector').val() > 0)                               
    {
      $('#selectProjectOption').remove(); 
    }

    $.ajax({ type: 'GET', url: 'api/tree?projectID=' + $('#projectSelector').val() }).done(function(data)               //read tree for the selected project from the database
    {
      tree = data;
      displaySpreadSheet();
      $('#tree-container').hide();
      //displayTreeView(tree);
      //$('#spreadSheetView').hide();
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
    $('#' + fieldName + nodeID).val(node.values[field.name]);
  }  
  else
  {
    $('#' + fieldName + nodeID).val('');
  }
}

//move the node/assembly in the view and the model, including all descendant nodes
var moveAssembly = function(movedID, newParentID, oldParentID)                  
{
  var oldParentNode = findNodeInTree(oldParentID);
  var newParentNode = findNodeInTree(newParentID);
  var movedNode     = findNodeInTree(movedID);

  //remove the moved node from it's old parent in the model
  if(oldParentNode)
  {
    oldParentNode.children.splice(oldParentNode.children.indexOf(movedNode), 1);
  }
  else
  {
    tree.children.splice(tree.children.indexOf(movedNode), 1);  
  }
  
  //expand the new parent node, if it's collapsed
  if(isNodeCollapsed(newParentNode))                                 
  {
    expandNode(newParentNode);
  }
  $('#icon' + newParentNode.id).attr('class', 'glyphicon glyphicon-chevron-down');                  //set the expand/collapse icon to expand for the parent, just in case it was previously childless
  
  //if the old parent is childless now, then hide the old parent's expand/collapse icon
  if(isNodeChildless(oldParentNode))
  {
    $('#icon' + oldParentNode.id).attr('class', ''); 
  }  

  newParentNode.children.push(movedNode);                                                            //add the moved node to it's new parent in the model
  setDepths(newParentNode);                                                                          //set the new depth values for the moved nodes

  //remove the node and its descendants from the view 
  visit(movedNode, getChildren, function(node) 
  { 
    $('#rowid' + node.id).remove();
    $('#datarowid' + node.id).remove(); 
  });

  //add the moved node and its descendants to the new parent in the view
  $(addRow(movedNode)).insertAfter($('#rowid' + newParentID)); 
  $(addDataRow(movedNode)).insertAfter($('#datarowid' + newParentID));
  
  //enable dragging for all of the moved nodes
  visit(movedNode, getChildren, function(node)
  {
    REDIPS.drag.enableDivs('init', $('#rowid' + node.id).find('div'));    
  });    
};

function setDepths(node)
{
  for(var i in node.children)
  {
    node.children[i].depth = node.depth + 1;
    setDepths(node.children[i]);
  }
}

function isNodeChildless(node)
{
  return (!node.children || node.children.length === 0) && (!node._children || node._children.length === 0);
}

function isNodeCollapsed(node)
{
  return node._children && node._children.length > 0;
}

function isNodeExpanded(node)
{
  return node.children && node.children.length > 0;  
}

var findNodeInTree = function(nodeID)
{
  for(var i in tree.children)
  {
    var foundNode = findNode(nodeID, tree.children[i]);

    if(foundNode) { return foundNode; }
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
    for(var i in node.children)
    {
      var foundNode = findNode(nodeID, node.children[i]);

      if(foundNode) { return foundNode; }
    }
  }
};

var findParentInTree = function(nodeID)
{
  for(var i in tree.children)
  {
      var foundParent = findParent(nodeID, tree.children[i], null);

      if(foundParent) { return foundParent; }
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
    for(var i in node.children)
    {
      var foundParent = findParent(nodeID, node.children[i], node);

      if(foundParent) { return foundParent; }
    }
  }
};

var deleteNode = function(nodeID)
{
  var node = findNodeInTree(nodeID);
  var parentNode = findParentInTree(nodeID);
  
  //remove the node and its descendants from the view 
  visit(node, getChildren, function(node) 
  { 
    $('#rowid' + node.id).remove();
    $('#datarowid' + node.id).remove(); 
  });
  
  //remove the node from the model
  for(var i in parentNode.children)
  {
    if(parentNode.children[i].id == nodeID)
    {
      parentNode.children.splice(i, 1);
      break;
    }
  }
  
  if(isNodeChildless(parentNode))                                                   //if the parent node has no children
  {
    $('#icon' + parentNode.id).attr('class', '');                                   //hide the parent's expand/collapse icon  
  }  
};

var copyNode = function(nodeID)
{
  var sourceNode = findNodeInTree(nodeID);
  var sourceParentNode = findParentInTree(nodeID);
  
  var newNode = jQuery.extend(true, {}, sourceNode);                                //clone the source node
  assignNewNodeIDs(newNode);                                                        //assign unique ids to each node in the clone
  
  if(sourceParentNode === undefined)                                                //handle case where the user tries to copy a top level node
  {                           
    tree.children.splice(tree.children.indexOf(sourceNode), 0, newNode);  
  }
  else
  {
    sourceParentNode.children.splice(sourceParentNode.children.indexOf(sourceNode), 0, newNode);
  }
  
  $(addRow(newNode)).insertBefore($('#rowid' + nodeID));                               //insert the new rows before the source row
  $(addDataRow(newNode)).insertBefore($('#datarowid' + nodeID));                       //insert the new rows before the source row
  
  //enable dragging for all of the node copies
  visit(newNode, getChildren, function(node)
  {
    REDIPS.drag.enableDivs('init', $('#rowid' + node.id).find('div'));    
  });
};

var assignNewNodeIDs = function(node)
{
  node.id = tree.nextNodeID++;
  
  for(var i in node.children)
  {
    assignNewNodeIDs(node.children[i]);
  }
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

// A recursive function for traversing the tree 
function visit(parent, childrenFn, visitFn, data) 
{
  if (!parent) { return; }

  visitFn(parent, data);
  
  var children = childrenFn(parent);
  for (var i in children) 
  {
    visit(children[i], childrenFn, visitFn);
  }
}

function visitDescendants(parent, childrenFn, visitFn)
{
  if(!parent) { return; }
  
  for(var i in parent.children)
  {
    visit(parent.children[i], childrenFn, visitFn);
  }
}

var getChildren = function(node)
{
  return node.children && node.children.length > 0 ? node.children : null;
};

function toggleExpandIcon(nodeID)
{
  var node = findNodeInTree(nodeID);
  
  if(isNodeExpanded(node))
  {
    collapseNode(node);     
  }
  else if(isNodeCollapsed(node))
  {
    expandNode(node);
  }
}

function collapseNode(node)
{
  visitDescendants(node, getChildren, function(n)                           //remove descendant node rows from the DOM
  {
    $('#datarowid' + n.id).remove();
    $('#rowid' + n.id).remove();
  });
  
  node._children = node.children;                                           //hide the descendants in the model
  node.children = [];
  
  $('#icon' + node.id).attr('class', 'glyphicon glyphicon-chevron-right');  //update the expand/collpase icon for this row    
}

function expandNode(node)
{
  node.children = node._children;                                           //unhide the descendants in the model
  node._children = [];
  
  var child;                                                                //add descendant node rows to the DOM
  for(var i = node.children.length-1; i >= 0; i--)                          //iterate in reverse order to preserve the node ordering
  {
    child = node.children[i];
    $(addDataRow(child)).insertAfter($('#datarowid' + node.id));
    $(addRow(child, '', '')).insertAfter($('#rowid' + node.id)); 
  }

  $('#icon' + node.id).attr('class', 'glyphicon glyphicon-chevron-down');   //update the expand/collpase icon for this row     
}

var updateNodeName = function(el)
{
  var row = getAncestorTag(el, 'tr');
  var nodeID = parseInt(row.id.replace('rowid',''));
  var node = findNodeInTree(nodeID);
  
  node.name = el.value;
  $('#nodeInput' + nodeID).attr('value', node.name);                          //update the input value in the DOM, so that when we drag/move the row, the value is correct
};

function updateFieldValue(field, id)
{
  updateNodeValueInTree(id, field, $('#' + field + id).val());

  for(var i in tree.children)
  {
    aggregate_any(tree.children[i], field);
  } 
}

function updateNodeValueInTree(id, field, value)
{
  var node = null;

  for(var i in tree.children)
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

  if(node)
  {
    for(var i in node.children)
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