var markup;
var uid = 1;
var fields = [ 'Weight', 'Cost', 'Notes', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
var tree;

var MIN_COLUMN_WIDTH = 70;
var GRIPS_WIDTH = 16;

var resizeColumnLeft = 0;
var resizeField = '0';

$(document).ready(function()
{
  tree = JSON.parse(httpGet('http://localhost:3000/api/posts/tree'));     //get the tree model from the server

  setUniqueIDs(tree.nodes);                                               //TODO: temp hack to make sure the node ids are unique

  $("#redips-drag").html(generateMarkup(tree, fields));                   //append the markup to the DOM

  redips.init();


  refreshDataModelDisplay();
});

function setUniqueIDs(nodes)
{
  if(nodes)
  {
    for(var i = 0; i < nodes.length; i++)
    {
      nodes[i].id = uid++;
      setUniqueIDs(nodes[i].nodes);
    }
  }
}

var refreshDataModelDisplay = function()
{
  var dataModelTextArea = document.getElementById('data-model');
  dataModelTextArea.value = JSON.stringify(tree, null, '\t');
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
}

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
}

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

  if(oldParentNode.nodes && oldParentNode.nodes.length > 0)                                   //remove the moved node from it's old parent in the model
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

  newParentNode.nodes.push(movedNode);                                                        //add moved node to it's new parent in the model

  //move the assembly in the view
  var movedRow = document.getElementById('rowid' + movedID);
  var oldDepth = getDepth(movedRow);
  var newDepth = getDepth(newParentRow)+1;

  //fix up the ancestors for the moved row
  var newParentRow = document.getElementById('rowid' + newParentID);
  var ancestors = getAncestors(newParentRow);
  ancestors.push('ancestor' + newParentID);
  setNewAncestors(movedRow, ancestors, newParentID);

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
}

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
    for(var i = node.nodes.length-1; i >= 0; i--)                     // iterate backwards to perserve the order of the child nodes
    {
      moveNode(node.nodes[i], node.nodes[i].id, nodeID, newDepth+1, newAncestors);
    }
  }
}

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
}

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
}

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

function toggle(id)
{
  var row = document.getElementById('rowid' + id);
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

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );

    return xmlHttp.responseText;
}