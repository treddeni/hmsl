function generateMarkup(tree)
{
  var markup = '<table id="treeTable"><tr><th></th>';

  for(var i = 0; i < fields.length; i++)              //add table headers with the field names
  {
    markup += '<th id="colHeader' + fields[i] + '" class="header"><div class="moveColGrip"></div><input id="colHeaderInput' + fields[i] + '" class="fieldNameInput" type="text" value="' + fields[i] + '"/><div id="grip' + i + '" class="resizeColGrip" onmousedown="startResize(event, this)"></div></th>';
  }

  markup += '</tr>';

  for(var j = 0; j < 1; j++)
  {
    for(var i = 0; i < tree.nodes.length; i++)        //add row for each node
    {
      markup += addRow(tree.nodes[i], 0, '', 0);
    }
  }

  markup += '</table>';
  return markup;
}

function addRow(node, depth, ancestors, parent)     //add node and data input for each field
{
  var markup = '';
  var id;
  var classes = 'depth' + depth + ' expanded parent' + parent + ' ' + ancestors;

  var dragHandle = '<div class="redips-drag"><span class="glyphicon glyphicon-move pull-right"></span></div>';
  var deleteButton = '<a href="#" class="pull-right btn btn-danger btn-xs" style="margin:2px 0px 0px 0px" onclick="deleteNode(' + node.id + ')"><i class="glyphicon glyphicon-remove"></i></a>';
  var copyButton = '<a href="#" class="pull-right btn btn-info btn-xs" style="margin:2px 4px 0px 0px" onclick="copyNode(' + node.id + ')"><i class="glyphicon glyphicon-plus"></i></a>';
  var showExpandButton = '<a id="expandID' + node.id + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(' + node.id + ')" class="btn btn-xs show-expand"><span id="icon' + node.id + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';
  var hideExpandButton = '<a id="expandID' + node.id + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(' + node.id + ')" class="btn btn-xs hide-expand"><span id="icon' + node.id + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';

  markup += '<tr id="rowid' + node.id + '" class="' + classes + '"><td class="redips-rowhandler cell">';
  markup += deleteButton + copyButton + dragHandle;

  if(node.nodes && node.nodes.length > 0)                                       //if node is a parent
  {
    markup += showExpandButton;                                                 //show the expansion button
  }
  else                                                                          //if node is a leaf
  {
    markup += hideExpandButton;                                                 //hide the expansion button
  }

  markup += '<input class="node" type="text" value="' + node.name + '"/></td>';

  for(var i = 0; i < fields.length; i++)                                        //add the data inputs for each fields
  {
    id = fields[i] + node.id;

    if(node.values && node.values[fields[i]])
    {
      markup += '<td class="cell"><input class="fieldInput fieldInput' + fields[i] + '" type="text" id="' + id + '" value="' + node.values[fields[i]] + '" oninput="updateFieldValue(\'' + fields[i] + '\', \'' + node.id + '\')"/></td>';
    }
    else
    {
      markup += '<td class="cell"><input class="fieldInput fieldInput' + fields[i] + '" type="text" id="' + id + '" oninput="updateFieldValue(\'' + fields[i] + '\', \'' + node.id + '\')"/></td>';
    }
  }

  markup += '</tr>';

  if(node.nodes && node.nodes.length > 0)                                       //add the children of this node below this node's row
  {
    for(var i = 0; i < node.nodes.length; i++)
    {
      markup += addRow(node.nodes[i], depth+1, ancestors + ' ancestor' + node.id, node.id);
    }
  }

  return markup;
}

function getAssemblyMarkup(nodeID)
{
  var node    = findNodeInTree(nodeID);
  var parent  = findParentInTree(nodeID);
  return addRow(node, 0, '', parent.id);
}

