var FieldMenu = function(field, fields)
{
  FieldMenu.menu = this;
  
  var numberItem = new FieldMenuItem('Number', Field.NUMBER, 'datatype', field);
  var formatItem = new FieldMenuItem('Format');
  
  var numberFormatItem = new FieldMenuItem('Number', Field.NUMBER_FORMAT, 'format', field);
  numberFormatItem.items.push(new FieldMenuItem('0', 0, 'precision', field));
  var displayString = '0.';
  for(var i = 1; i < 11; i++)
  {
    displayString += '0';
    numberFormatItem.items.push(new FieldMenuItem(displayString, i, 'precision', field));
  }
  formatItem.items.push(numberFormatItem);
  
  var percentFormatItem = new FieldMenuItem('Percent', Field.PERCENT_FORMAT, 'format', field);
  percentFormatItem.items.push(new FieldMenuItem('0', 0, 'precision', field));
  var displayString = '0.';
  for(var i = 1; i < 11; i++)
  {
    displayString += '0';
    percentFormatItem.items.push(new FieldMenuItem(displayString + '%', i, 'precision', field));
  }
  formatItem.items.push(percentFormatItem);
  
  var scientificFormatItem = new FieldMenuItem('Scientific', Field.SCIENTIFIC_FORMAT, 'format', field);
  scientificFormatItem.items.push(new FieldMenuItem('0', 0, 'precision', field));
  var displayString = '0.';
  for(var i = 1; i < 11; i++)
  {
    displayString += '0';
    scientificFormatItem.items.push(new FieldMenuItem(displayString + 'e+0', i, 'precision', field));
  }
  formatItem.items.push(scientificFormatItem);  
  
  numberItem.items.push(formatItem);
  
  var aggregationItem = new FieldMenuItem('Aggregation');
  aggregationItem.items.push(new FieldMenuItem('No Aggregation', Field.NO_AGGREGATION, 'agg_type', field));
  
  var sumAnyAggItem = new FieldMenuItem('Sum any defined children', Field.SUM_ANY_AGGREGATION, 'agg_type', field);
  
  for(var index in fields)
  {
    var f = fields[index];
    
    if(f.name != field.name)
    {
      sumAnyAggItem.items.push(new FieldMenuItem(f.name, f.name, 'agg_qty_field', field));
    }
  }
  
  aggregationItem.items.push(sumAnyAggItem);
  numberItem.items.push(aggregationItem);
  
  this.items = [];
  this.items.push(numberItem);
  this.items.push(new FieldMenuItem('Text', Field.STRING, 'datatype', field));
  //TODO: this.items.push(new FieldMenuItem('Choice', Field.CHOICE, 'datatype', field));  
};

FieldMenu.menu;

FieldMenu.handleClick = function(id)
{
  var clicked = FieldMenu.menu.getMenuItem(id, FieldMenu.menu);
  var parent = FieldMenu.menu.getMenuItemParent(id, FieldMenu.menu);

  if(clicked.field)                                                                                       //if the menu item doesn't have a field then ignore it
  {
    var field = project.getField(clicked.field.name);
    field[clicked.varName] = clicked.value;                                                               //set value for the field in the model based on the clicked menu item
  
    for(var i in parent.items)                                                                            //clear the checkmarks for all item on the same menu level
    {
      $('#menuItem' + parent.items[i].id).removeClass('checkedMenuItem').addClass('uncheckedMenuItem');
    }
  
    $('#menuItem' + id).removeClass('uncheckedMenuItem').addClass('checkedMenuItem');                     //check the item that was clicked
    
    if(parent === FieldMenu.menu)                                                                              //if this is a top level menu item then update the formatting, since we only want to do this once per click
    {
      spreadSheet.updateNumberFieldFormatting(field);
    }
  }
};

FieldMenu.prototype.getMenuItem = function(id, menuItem)
{
  if(id === menuItem.id)
  {
    return menuItem;
  }
  else if(menuItem.items && menuItem.items.length > 0)
  {
    var found;
    for(var i = 0; i < menuItem.items.length; i++)
    {
      found = this.getMenuItem(id, menuItem.items[i]);
      if(found) { return found; }
    }
  }
};

FieldMenu.prototype.getMenuItemParent = function(id, menuItem)
{
  if(menuItem.items && menuItem.items.length > 0)
  {
    for(var i = 0; i < menuItem.items.length; i++)
    { 
      if(menuItem.items[i].id === id)
      {
        return menuItem;
      }
      else
      {
        var found = this.getMenuItemParent(id, menuItem.items[i]);
        if(found) { return found; }
      }
    }
  }
};