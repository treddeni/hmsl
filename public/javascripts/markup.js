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

function generateMarkup(tree)
{
  var markup = '<table id="treeTable"><tr><th><div id="projectActionContainer">';
  markup += '<select id="projectActionSelector" class="form-control" onchange="handleProjectAction()"><option></option>';
  markup += '<option value="addField">Add Field</option>';
  markup += '</select>';
  markup += '<input id="projectActionInput" class="form-control"></input>';
  markup += '</div></th>';

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

function addRow(node, depth, ancestors, parent)       //add node and data input for each field
{
  var markup = '';
  var id;
  var classes = 'depth' + depth + ' expanded parent' + parent + ' ' + ancestors;
  var nodeID = node.id;

  var dragHandle = '<div class="redips-drag"><span class="glyphicon glyphicon-move pull-right"></span></div>';
  var deleteButton = '<a href="#" class="pull-right btn btn-danger btn-xs" style="margin:2px 0px 0px 0px" onclick="deleteNode(this)"><i class="glyphicon glyphicon-remove"></i></a>';
  var copyButton = '<a href="#" class="pull-right btn btn-info btn-xs" style="margin:2px 4px 0px 0px" onclick="copyNode(this)"><i class="glyphicon glyphicon-plus"></i></a>';
  var showExpandButton = '<a id="expandID' + nodeID + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(this)" class="btn btn-xs show-expand"><span id="icon' + nodeID + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';
  var hideExpandButton = '<a id="expandID' + nodeID + '" href="#" style="margin-left:' + (depth*10) + 'px" onclick="toggle(this)" class="btn btn-xs hide-expand"><span id="icon' + nodeID + '" class="glyphicon glyphicon-chevron-down iconp' + parent + '"></span></a>';

  markup += '<tr id="rowid' + nodeID + '" class="' + classes + '"><td class="redips-rowhandler cell">';
  markup += deleteButton + copyButton + dragHandle;

  if(node.nodes && node.nodes.length > 0)                                       //if node is a parent
  {
    markup += showExpandButton;                                                 //show the expansion button
  }
  else                                                                          //if node is a leaf
  {
    markup += hideExpandButton;                                                 //hide the expansion button
  }

  markup += '<input class="node" type="text" value="' + node.name + '" oninput="updateNodeName(this)"/></td>';

  for(var i = 0; i < fields.length; i++)                                        //add the data inputs for each fields
  {
    id = fields[i] + nodeID;

    if(node.values && node.values[fields[i]])
    {
      markup += '<td class="cell"><input class="fieldInput fieldInput' + fields[i] + '" type="text" id="' + id + '" value="' + node.values[fields[i]] + '" oninput="updateFieldValue(\'' + fields[i] + '\', \'' + nodeID + '\')"/></td>';
    }
    else
    {
      markup += '<td class="cell"><input class="fieldInput fieldInput' + fields[i] + '" type="text" id="' + id + '" oninput="updateFieldValue(\'' + fields[i] + '\', \'' + nodeID + '\')"/></td>';
    }
  }

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

function getAssemblyMarkup(nodeID, newNodeID, depth)
{
  var node    = findNodeInTree(nodeID);
  var parent  = findParentInTree(nodeID);
  return addRow(node, depth, 'ancestor' + parent.id, parent.id);
}