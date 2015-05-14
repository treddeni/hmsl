function generateHeaderMarkup(projects)
{
  var markup = '<select id="projectSelector" class="form-control" onchange="selectProject()">';

  markup += '<option id="selectProjectOption" value="0">Select Project...</option>';

  for(var i = 0; i < projects.length; i++)
  {
    markup += '<option value="' + projects[i].id + '">' + projects[i].name + '</option>';
  }

  markup += '<option id="newProjectOption" value="-1">Create New Project...</option></select>';
  markup += '<input id="editNewProjectNameInput" class="form-control"></input>';
  
  markup += '<a href="#" class="btn btn-default" style="float:right" onclick="saveToDatabase()">Save to Database</a>';
  //markup += '<a href="#" class="btn btn-default" style="float:right" onclick="saveLocally()">Save as File</a>';
  
  return markup;
}

function generateFieldsRowMarkup()
{
  /*var markup = '<table><thead><tr id="headerRow"><th><div id="projectActionContainer">';
  markup += '<select id="projectActionSelector" class="form-control" onchange="handleProjectAction()"><option value="blank"></option>';
  markup += '<option value="addField">Add Field</option>';
  markup += '</select>';
  markup += '<input id="projectActionInput" class="form-control"></input>';
  markup += '</div></th>';*/
  
  var markup = '<table id="fieldHeaderTable"><tr>';

  for(var i = 0; i < tree.fields.length; i++)              //add table headers with the field names
  {
    markup += getFieldHeaderMarkup(tree.fields[i].name, i);
  }

  markup += '</tr></table>';
  return markup;  
}

function generateTreeMarkup()
{
  var markup = '<table id="treeTable">';

  for(var i = 0; i < tree.nodes.length; i++)        //add row for each node
  {
    markup += addRow(tree.nodes[i], 0, '', 0);
  }

  markup += '</table>';
  return markup;
}

function addRow(node, depth, ancestors, parent)       //add node and data input for each field
{
  var markup = '';
  var classes = 'nodeRow depth' + depth + ' expanded parent' + parent + ' ' + ancestors;
  var nodeID = node.id;

  var dragHandle = '<div class="redips-drag pull-right"><i class="glyphicon glyphicon-move"></i></div>';
  var deleteButton = '<a href="#" class="pull-right btn btn-danger btn-xs" style="margin:2px 2px 0px 0px" onclick="deleteNode(this)"><i class="glyphicon glyphicon-remove"></i></a>';
  var copyButton = '<a href="#" class="pull-right btn btn-info btn-xs" style="margin:2px 4px 0px 0px" onclick="copyNode(this)"><i class="glyphicon glyphicon-plus"></i></a>';
  var showExpandButton = '<a id="expandID' + nodeID + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(this)" class="btn btn-xs show-expand"><span id="icon' + nodeID + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';
  var hideExpandButton = '<a id="expandID' + nodeID + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(this)" class="btn btn-xs hide-expand"><span id="icon' + nodeID + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';

  markup += '<tr id="rowid' + nodeID + '" class="' + classes + '"><td class="redips-rowhandler cell"><div style="width:499px">';
  markup += deleteButton + copyButton + dragHandle;

  if(node.nodes && node.nodes.length > 0)                                       //if node is a parent
  {
    markup += showExpandButton;                                                 //show the expansion button
  }
  else                                                                          //if node is a leaf
  {
    markup += hideExpandButton;                                                 //hide the expansion button
  }

  markup += '<input id="nodeInput' + node.id + '" class="node" type="text" value="' + node.name + '" oninput="updateNodeName(this)"/></div></td>';

  /*for(var i = 0; i < tree.fields.length; i++)                                        //add the data inputs for each fields
  {
    if(node.values && node.values[tree.fields[i].name])
    {
      markup += getFieldCellMarkup(tree.fields[i].name, nodeID, node.values[tree.fields[i].name]);
    }
    else
    {
      markup += getFieldCellMarkup(tree.fields[i].name, nodeID);
    }
  }*/

  markup += '</tr>';

  if(node.nodes && node.nodes.length > 0)                                       //add the children of this node below this node's row
  {
    for(var i = 0; i < node.nodes.length; i++)
    {
      markup += addRow(node.nodes[i], depth+1, ancestors + ' ancestor' + nodeID, nodeID);
    }
  }

  return markup;
}

function generateDataMarkup()
{
  var markup = '<table id="dataTable">';


 /* markup += '<thead><tr id="headerRow">';

  for(var i = 0; i < tree.fields.length; i++)              //add table headers with the field names
  {
    markup += getFieldHeaderMarkup(tree.fields[i].name, i);
  }

  markup += '</tr></thead>';*/



  for(var i = 0; i < tree.nodes.length; i++)        //add row for each node
  {
    markup += addDataRow(tree.nodes[i]);
  }

  markup += '</table>';
  return markup;  
}

function addDataRow(node)
{
  var markup = '<tr>';
  
  for(var i = 0; i < tree.fields.length; i++)                                        //add the data inputs for each fields
  {
    if(node.values && node.values[tree.fields[i].name])
    {
      markup += getFieldCellMarkup(tree.fields[i].name, node.id, node.values[tree.fields[i].name]);
    }
    else
    {
      markup += getFieldCellMarkup(tree.fields[i].name, node.id);
    }
  }
  
  markup += '</tr>';
  
  if(node.nodes && node.nodes.length > 0)                                       //add the children of this node below this node's row
  {
    for(var i = 0; i < node.nodes.length; i++)
    {
      markup += addDataRow(node.nodes[i]);
    }
  }  
  
  return markup;  
}

function addColumn(fieldName)
{
  $('#headerRow').append(getFieldHeaderMarkup(fieldName, tree.fields.length));    //add field header
  
  $('.nodeRow').each(function(i, item)                                            //add cell for each node
  {
    $(item).append(getFieldCellMarkup(fieldName, item.id.replace('rowid', '')));
  });
}

function getFieldHeaderMarkup(fieldName, index)
{
  return '<td class="fieldHeaderCell"><div style="width:80px"><input id="colHeaderInput' + fieldName + '" class="fieldHeaderInput" type="text" value="' + fieldName + '" style="width:50px"/></div></td>';
  //return '<th id="colHeader' + fieldName + '" class="header"><div class="moveColGrip"></div><input id="colHeaderInput' + fieldName + '" class="fieldNameInput" type="text" value="' + fieldName + '"/><div id="grip' + index + '" class="resizeColGrip" onmousedown="startResize(event, this)"></div></th>';
}

function getFieldCellMarkup(fieldName, nodeID, value)
{
  var valueString = '';
  
  if(value)
  {
    valueString = value;
  }
  
  return '<td class="cell"><div style="width:80px;height:21px"><input class="fieldInput fieldInput' + fieldName + '" type="text" id="' + fieldName + nodeID + '" value="' + valueString + '" oninput="updateFieldValue(\'' + fieldName + '\', \'' + nodeID + '\')"/></div></td>';
  //return '<td class="cell"><input class="fieldInput fieldInput' + fieldName + '" type="text" id="' + fieldName + nodeID + '" value="' + valueString + '" oninput="updateFieldValue(\'' + fieldName + '\', \'' + nodeID + '\')"/></td>';
}

function getAssemblyMarkup(nodeID, newNodeID, depth)
{
  var node    = findNodeInTree(nodeID);
  var parent  = findParentInTree(nodeID);
  return addRow(node, depth, 'ancestor' + parent.id, parent.id);
}