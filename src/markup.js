var DEFAULT_NODE_INPUT_WIDTH = 390;

function generateSpreadSheetMarkup()
{
  return '<div id="spreadSheetView">' +
          '<div id="project-action-container"></div>' +
          '<div id="fields-header-row"></div>' +
          '<div id="redips-drag"></div>' +
          '<div id="data-container" onscroll="SpreadSheetView.handleDataScroll()"></div>' +
         '</div>';
}

function generateHeaderMarkup(projects)
{
  var markup = '<select id="projectSelector" class="form-control" onchange="Project.selectProject()">'
  + '<option id="selectProjectOption" value="0">Select Project...</option>';

  for(var i in projects)
  {
    markup += '<option value="' + projects[i].id + '">' + projects[i].name + '</option>';
  }

  markup += '<option id="newProjectOption" value="-1">Create New Project...</option></select>'
  + '<input id="editNewProjectNameInput" class="form-control"></input>'
  + '<a href="#" id="save-database-button" class="btn btn-default" onclick="Project.saveToDatabase()">Save to Database</a>'
  + '<a href="#" id="switchViewButton" class="btn btn-default" onclick="Project.switchView()">Switch View</a>';
  //markup += '<a href="#" class="btn btn-default" id="save-file-button" onclick="saveLocally()">Save as File</a>';
  
  return markup;
}

function generateProjectSelectorMarkup()
{
  return '<table><tr id="headerRow"><tr><div id="project-select-container">'
  + '<select id="projectActionSelector" class="form-control" onchange="ProjectAction.handle()"><option value="blank"></option>'
  + '<option value="addField">Add Field</option>'
  + '</select>'
  + '<input id="projectActionInput" class="form-control"></input>'
  + '</div></tr><table>'; 
}

function generateFieldsRowMarkup(fields)
{  
  var markup = '<table id="fieldHeaderTable"><tr id="fieldHeaderRow">';

  for(var i in fields)              //add table headers with the field names
  {
    markup += getFieldHeaderMarkup(fields[i].name, i);
  }

  markup += '</tr></table>';
  return markup;  
}

function generateTreeMarkup(tree)
{
  var markup = '<table id="treeTable">';

  //TODO: need to iterate backwards through the children to preserve order
  for(var i in tree.children)        //add row for each node
  {
    markup += addRow(tree.children[i]);
  }

  markup += '</table>';
  return markup;
}

function addRow(node)       //add node and data input for each field
{
  var markup = '';
  var depthAdjustment = (node.depth-1) * 10;

  var dragHandle = '<div class="redips-drag pull-right"><i class="glyphicon glyphicon-move"></i></div>';
  var deleteButton = '<a href="#" class="pull-right btn btn-danger btn-xs delete-button" onclick="SpreadSheetView.deleteNode(' + node.id + ')"><i class="glyphicon glyphicon-remove"></i></a>';
  var copyButton = '<a href="#"  class="pull-right btn btn-info btn-xs copy-button" onclick="SpreadSheetView.copyNode(' + node.id + ')"><i class="glyphicon glyphicon-plus"></i></a>';
  var expandButton = '<a id="expandID' + node.id + '" href="#" style="margin-left:' + depthAdjustment + 'px" onclick="SpreadSheetView.toggleExpandIcon(' + node.id + ')" class="btn btn-xs"><span id="icon' + node.id + '" class="glyphicon glyphicon-chevron-right"></span></a>';
  var collapseButton = '<a id="expandID' + node.id + '" href="#" style="margin-left:' + depthAdjustment + 'px" onclick="SpreadSheetView.toggleExpandIcon(' + node.id + ')" class="btn btn-xs"><span id="icon' + node.id + '" class="glyphicon glyphicon-chevron-down"></span></a>';
  var blankButton = '<a id="expandID' + node.id + '" href="#" style="margin-left:' + depthAdjustment + 'px" onclick="SpreadSheetView.toggleExpandIcon(' + node.id + ')" class="btn btn-xs"><span id="icon' + node.id + '"></span></a>';

  markup += '<tr id="rowid' + node.id + '" class="nodeRow"><td class="redips-rowhandler cell"><div class="node-container">';
  markup += deleteButton + copyButton + dragHandle;

  if(node.children && node.children.length > 0)                                 //if children are visible
  {
    markup += collapseButton;                                                   //hide children button
  }
  else if(node._children && node._children.length > 0)                          //if children are hidden
  {
    markup += expandButton;                                                     //show children button
  }
  else                                                                          //if node has no children (is a leaf)
  {
    markup += blankButton;
    depthAdjustment -= 10;
  }

  markup += '<input id="nodeInput' + node.id + '" class="nodeTextInput" type="text" value="' + node.name + '" style="width:' + (DEFAULT_NODE_INPUT_WIDTH-depthAdjustment) + 'px" oninput="SpreadSheetView.updateNodeName(' + node.id + ')"/></div></td></tr>';

  if(node.children && node.children.length > 0)                                       //add the children of this node below this node's row
  {
    for(var i in node.children)
    {
      markup += addRow(node.children[i]);
    }
  }

  return markup;
}

function generateDataMarkup(tree)
{
  var markup = '<table id="dataTable">';

  //TODO: need to iterate backwards through the children to preserve order
  for(var i in tree.children)        //add row for each node
  {
    markup += addDataRow(tree.children[i], tree.fields);
  }

  markup += '</table>';
  return markup;  
}

function addDataRow(node, fields)
{
  var markup = '<tr id="datarowid' + node.id + '" class="dataRow">';
  
  for(var i in fields)                                        //add the data inputs for each field
  {
    var field = fields[i];

    var value = '';
    if(node.values && node.values[field.name])
    {
      value = Field.formatValue(field, node.values[field.name]);
    }
    
    markup += getFieldCellMarkup(field.name, node.id, value);
  }
  
  markup += '</tr>';
  
  //add the children of this node below this node's row
  for(var i in node.children)
  {
    markup += addDataRow(node.children[i], fields);
  }
  
  return markup;  
}

function addColumn(fieldName, fields)
{
  $('#fieldHeaderRow').append(getFieldHeaderMarkup(fieldName, fields.length));    //add field header
  
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
  + '<img src="images/down-arrow.png" onclick="SpreadSheetView.showFieldMenu(event, \'' + fieldName + '\');" style="cursor:pointer"/>'
  + '</div>'
  + '<div id="grip' + index + '" class="resizeColGrip" onmousedown="startResize(event, this)"></div>'
  + '</div></td>';
}

function getFieldCellMarkup(fieldName, nodeID, value)
{  
  return '<td class="cell"><input class="fieldInput fieldInput' + fieldName + '" type="text" id="' + fieldName + nodeID + '" value="' + value + '" oninput="SpreadSheetView.updateFieldValue(\'' + fieldName + '\', \'' + nodeID + '\')" onfocus="SpreadSheetView.displayRawValue(\'' + fieldName + '\', \'' + nodeID + '\')"/></td>';
}

function getFieldMenuMarkup(fieldName, x, y, fields)
{
  var field = Tree.getField(fieldName);
  
  var menu = new Menu();

  var numberItem = new MenuItem('Number', Field.NUMBER, 'datatype', field);
  var formatItem = new MenuItem('Format');
  
  var numberFormatItem = new MenuItem('Number', Field.NUMBER_FORMAT, 'format', field);
  numberFormatItem.items.push(new MenuItem('0', 0, 'precision', field));
  var displayString = '0.';
  for(var i = 1; i < 11; i++)
  {
    displayString += '0';
    numberFormatItem.items.push(new MenuItem(displayString, i, 'precision', field));
  }
  formatItem.items.push(numberFormatItem);
  
  var percentFormatItem = new MenuItem('Percent', Field.PERCENT_FORMAT, 'format', field);
  percentFormatItem.items.push(new MenuItem('0', 0, 'precision', field));
  var displayString = '0.';
  for(var i = 1; i < 11; i++)
  {
    displayString += '0';
    percentFormatItem.items.push(new MenuItem(displayString + '%', i, 'precision', field));
  }
  formatItem.items.push(percentFormatItem);
  
  var scientificFormatItem = new MenuItem('Scientific', Field.SCIENTIFIC_FORMAT, 'format', field);
  scientificFormatItem.items.push(new MenuItem('0', 0, 'precision', field));
  var displayString = '0.';
  for(var i = 1; i < 11; i++)
  {
    displayString += '0';
    scientificFormatItem.items.push(new MenuItem(displayString + 'e+0', i, 'precision', field));
  }
  formatItem.items.push(scientificFormatItem);  
  
  numberItem.items.push(formatItem);
  
  var aggregationItem = new MenuItem('Aggregation');
  aggregationItem.items.push(new MenuItem('No Aggregation', Field.NO_AGGREGATION, 'agg_type', field));
  
  var sumAnyAggItem = new MenuItem('Sum any defined children', Field.SUM_ANY_AGGREGATION, 'agg_type', field);
  
  for(var index in fields)
  {
    var f = fields[index];
    
    if(f.name != field.name)
    {
      sumAnyAggItem.items.push(new MenuItem(f.name, f.name, 'agg_qty_field', field));
    }
  }
  
  aggregationItem.items.push(sumAnyAggItem);
  numberItem.items.push(aggregationItem);
  
  menu.items = [];
  menu.items.push(numberItem);
  menu.items.push(new MenuItem('Text', Field.STRING, 'datatype', field));
  //TODO: menu.items.push(new MenuItem('Choice', Field.CHOICE, 'datatype', field));
  
  var markup = '<div id="fieldMenu" style="left:' + x + 'px;top:' + y + 'px;">';
  
  markup += generateMenuMarkup(menu);
  
  markup += '</div>';
  return markup;
}

function generateMenuMarkup(menu)
{
  var markup = '<ul>';
  
  for(var i = 0; i < menu.items.length; i++)
  {
    var item = menu.items[i];
    
    markup += '<li onclick="Menu.handleClick(' + item.id + ');">';

    var checkMarkClass = 'uncheckedMenuItem';
    if(item.field && item.checked)
    {
      checkMarkClass = 'checkedMenuItem';
    }
    
    markup += '<img id="menuItem' + item.id + '" src="' + CHECK_MARK_IMAGE_PATH + '" class="' + checkMarkClass + '"/>';
    markup += item.display;
    
    if(item.items && item.items.length > 0)
    {
      markup += '<div class="arrowRight"></div>';
    }

    if(item.items && item.items.length > 0)
    {
      markup += generateMenuMarkup(item);
    }
    
    markup += '</li>';
  }
  
  return markup + '</ul>';
}