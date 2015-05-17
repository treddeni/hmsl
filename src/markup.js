function generateHeaderMarkup(projects)
{
  var markup = '<select id="projectSelector" class="form-control" onchange="selectProject()">'
  + '<option id="selectProjectOption" value="0">Select Project...</option>';

  for(var i = 0; i < projects.length; i++)
  {
    markup += '<option value="' + projects[i].id + '">' + projects[i].name + '</option>';
  }

  markup += '<option id="newProjectOption" value="-1">Create New Project...</option></select>'
  + '<input id="editNewProjectNameInput" class="form-control"></input>'
  + '<a href="#" id="save-database-button" class="btn btn-default" onclick="saveToDatabase()">Save to Database</a>';
  //markup += '<a href="#" class="btn btn-default" id="save-file-button" onclick="saveLocally()">Save as File</a>';
  
  //markup += '<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">';
  //markup += '<span class="caret"></span></button>';
  //markup += '<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">';
  //markup += '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>';
  //markup += '</ul></div>';  
  
  return markup;
}

function generateProjectSelectorMarkup()
{
  return '<table><tr id="headerRow"><tr><div id="project-select-container">'
  + '<select id="projectActionSelector" class="form-control" onchange="handleProjectAction()"><option value="blank"></option>'
  + '<option value="addField">Add Field</option>'
  + '</select>'
  + '<input id="projectActionInput" class="form-control"></input>'
  + '</div></tr><table>'; 
}

function generateFieldsRowMarkup()
{  
  var markup = '<table id="fieldHeaderTable"><tr id="fieldHeaderRow">';

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
  var deleteButton = '<a href="#" class="pull-right btn btn-danger btn-xs delete-button" onclick="deleteNode(this)"><i class="glyphicon glyphicon-remove"></i></a>';
  var copyButton = '<a href="#"  class="pull-right btn btn-info btn-xs copy-button" onclick="copyNode(this)"><i class="glyphicon glyphicon-plus"></i></a>';
  var showExpandButton = '<a id="expandID' + nodeID + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(this)" class="btn btn-xs show-expand"><span id="icon' + nodeID + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';
  var hideExpandButton = '<a id="expandID' + nodeID + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(this)" class="btn btn-xs hide-expand"><span id="icon' + nodeID + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';

  markup += '<tr id="rowid' + nodeID + '" class="' + classes + '"><td class="redips-rowhandler cell"><div class="node-container">';
  markup += deleteButton + copyButton + dragHandle;

  if(node.nodes && node.nodes.length > 0)                                       //if node is a parent
  {
    markup += showExpandButton;                                                 //show the expansion button
  }
  else                                                                          //if node is a leaf
  {
    markup += hideExpandButton;                                                 //hide the expansion button
  }

  markup += '<input id="nodeInput' + node.id + '" class="node" type="text" value="' + node.name + '" style="width:' + (400-depth*10) + 'px" oninput="updateNodeName(this)"/></div></td></tr>';

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

  for(var i = 0; i < tree.nodes.length; i++)        //add row for each node
  {
    markup += addDataRow(tree.nodes[i]);
  }

  markup += '</table>';
  return markup;  
}

function addDataRow(node)
{
  var markup = '<tr id="datarowid' + node.id + '" class="dataRow">';
  
  for(var i = 0; i < tree.fields.length; i++)                                        //add the data inputs for each fields
  {
    if(node.values && node.values[tree.fields[i].name])
    {
      markup += getFieldCellMarkup(tree.fields[i].name, node.id, node.values[tree.fields[i].name]);
    }
    else
    {
      markup += getFieldCellMarkup(tree.fields[i].name, node.id, '');
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
  $('#fieldHeaderRow').append(getFieldHeaderMarkup(fieldName, tree.fields.length));    //add field header
  
  $('.dataRow').each(function(i, item)                                                 //add cell for each node
  {
    $(item).append(getFieldCellMarkup(fieldName, item.id.replace('datarowid', '')));
  });
}

function getFieldHeaderMarkup(fieldName, index)
{
  return '<td class="fieldHeaderCell"><div class="fieldHeaderContainer">'
  + '<div class="moveColGrip"></div>'
  + '<div class="fieldNameInputContainer"><textarea id="colHeaderInput' + fieldName + '" class="fieldNameInput">' + fieldName + '</textarea></div>'
  + '<div class="fieldHeaderButton">'
  + '<img src="images/down-arrow.png" onclick="showMenu(event, \'' + fieldName + '\');" style="cursor:pointer"/>'
  + '</div>'
  + '<div id="grip' + index + '" class="resizeColGrip" onmousedown="startResize(event, this)"></div>'
  + '</div></td>';
  //return '<th id="colHeader' + fieldName + '" class="header"><div class="moveColGrip"></div><input id="colHeaderInput' + fieldName + '" class="fieldNameInput" type="text" value="' + fieldName + '"/><div id="grip' + index + '" class="resizeColGrip" onmousedown="startResize(event, this)"></div></th>';
}

function getFieldCellMarkup(fieldName, nodeID, value)
{  
  return '<td class="cell"><input class="fieldInput fieldInput' + fieldName + '" type="text" id="' + fieldName + nodeID + '" value="' + value + '" oninput="updateFieldValue(\'' + fieldName + '\', \'' + nodeID + '\')"/></td>';
}

function getAssemblyMarkup(nodeID, newNodeID, depth)
{
  var node    = findNodeInTree(nodeID);
  var parent  = findParentInTree(nodeID);
  return addRow(node, depth, 'ancestor' + parent.id, parent.id);
}

function getFieldMenuMarkup(fieldName, x, y)
{
  var field = null;
  
  for(var i = 0; i < tree.fields.length; i++)
  {
    if(tree.fields[i].name === fieldName)
    {
      field = tree.fields[i];
    }
  }
  
  if(field == null)
  {
    //TODO: handle field not found error
  }
  
  console.log(field.name);
  
  var markup = '<div id="fieldMenu" style="left:' + x + 'px;top:' + y + 'px;"><ul>'
    + '<li>Number'
      + '<ul>'
        + '<li>Precision'
          + '<ul>'
            + '<li>Scientific</li>'
            + '<li>0</li>'
            + '<li>0.0</li>'
            + '<li>0.00</li>'
          + '</ul>'
        + '</li>'
        + '<li>Aggregation Type'
          + '<ul>'
            + '<li>Sum any defined children'
              + '<ul>';
              
  for(var i = 0; i < tree.fields.length; i++)
  {
    markup += '<li>' + tree.fields[i].name + '</li>';
  }
              
       markup += '</ul></li>'
            + '<li>Do not aggregate</li>'
          + '</ul>'
        + '</li>'
      + '</ul>'
    + '</li>'
    + '<li>String</li>'
    + '<li>Choice</li>'
  + '</ul></div>';
  return markup;
}