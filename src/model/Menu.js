var Menu = function()
{
  var items = [];
  Menu.menu = this;
};

Menu.menu;

Menu.handleClick = function(id)
{
  var clicked = Menu.menu.getMenuItem(id, Menu.menu);
  var parent = Menu.menu.getMenuItemParent(id, Menu.menu);

  if(clicked.field)                                                                                       //if the menu item doesn't have a field then ignore it
  {
    var field = Project.getField(clicked.field.name);
    field[clicked.varName] = clicked.value;                                                              //set value for the field in the model based on the clicked menu item
  
    for(var i = 0; i < parent.items.length; i++)                                                          //clear the checkmarks for all item on the same menu level
    {
      $('#menuItem' + parent.items[i].id).removeClass('checkedMenuItem').addClass('uncheckedMenuItem');
    }
  
    $('#menuItem' + id).removeClass('uncheckedMenuItem').addClass('checkedMenuItem');                     //check the item that was clicked
    
    if(parent === Menu.menu)                                                                              //if this is a top level menu item then update the formatting, since we only want to do this once per click
    {
      Project.updateFieldFormatting(field);
    }
  }
};

Menu.prototype.getMenuItem = function(id, menuItem)
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
      
      if(found)
      {
        return found;
      }
    }
  }
  return null;
};

Menu.prototype.getMenuItemParent = function(id, menuItem)
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
        if(found)
        {
          return found;
        }
      }
    }
  }
  return null;
};