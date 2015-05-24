var DEFAULT_NODE_INPUT_WIDTH = 390;

function addRow(node)       //add node and data input for each field
{
  var markup = '';
  var dragHandle = '<div class="redips-drag pull-right"><i class="glyphicon glyphicon-move"></i></div>';
  var deleteButton = '<a href="#" class="pull-right btn btn-danger btn-xs delete-button" onclick="SpreadSheetView.deleteNode(' + node.id + ')"><i class="glyphicon glyphicon-remove"></i></a>';
  var copyButton = '<a href="#"  class="pull-right btn btn-info btn-xs copy-button" onclick="SpreadSheetView.copyNode(' + node.id + ')"><i class="glyphicon glyphicon-plus"></i></a>';
  
  markup += '<tr id="rowid' + node.id + '" class="nodeRow"><td class="redips-rowhandler cell"><div id="nodeContent' + node.id + '" class="node-container">';
  markup += deleteButton + copyButton + dragHandle;

  markup += getNodeContentMarkup(node);

  if(node.children && node.children.length > 0)                                       //add the children of this node below this node's row
  {
    for(var i in node.children)
    {
      markup += addRow(node.children[i]);
    }
  }
  
  markup += '</div></td></tr>';
  return markup;
}

function getNodeContentMarkup(node)
{
  var markup = '';
  var depthAdjustment = (node.depth-1) * 10;
  
  if(node.children && node.children.length > 0)           //if children are visible
  {
    //hide children button
    markup += '<a href="#" id="icon' + node.id + '" style="margin-left:' + depthAdjustment + 'px" onclick="SpreadSheetView.toggleExpandIcon(' + node.id + ')" class="btn btn-xs"><span class="glyphicon glyphicon-chevron-down"></span></a>';
  }
  else if(node._children && node._children.length > 0)    //if children are hidden
  {
    //show children icon
    markup += '<a href="#" id="icon' + node.id + '" style="margin-left:' + depthAdjustment + 'px" onclick="SpreadSheetView.toggleExpandIcon(' + node.id + ')" class="btn btn-xs"><span class="glyphicon glyphicon-chevron-right"></span></a>';
  }
  else                                                    //if node has no children (is a leaf)
  {
    markup += '<a href="#" id="icon' + node.id + '" style="margin-left:' + (depthAdjustment+12) + 'px" onclick="SpreadSheetView.toggleExpandIcon(' + node.id + ')" class="btn btn-xs"><span></span></a>';
    depthAdjustment -= 10;
  } 
  
  markup += '<input id="nodeInput' + node.id + '" class="nodeTextInput" type="text" value="' + node.name + '" style="width:' + (DEFAULT_NODE_INPUT_WIDTH-depthAdjustment) + 'px" oninput="SpreadSheetView.updateNodeName(' + node.id + ')"/>';  
  return markup; 
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