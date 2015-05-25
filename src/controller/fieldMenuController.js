var fieldMenuController =
{
  displayFieldMenu: function(fieldName, x, y) 
  {
    var field = project.getField(fieldName);
      
    this.menu = new FieldMenu(field, spreadSheet.fields);
    
    fieldMenuView.render(this.menu, x, y);    
  },
  handleClick: function(menuItemID)
  {
    var clicked = this.menu.getMenuItem(menuItemID, this.menu);
    var parent = this.menu.getMenuItemParent(menuItemID, this.menu);
  
    if(clicked.field)                                                                                       //if the menu item doesn't have a field then ignore it
    {
      var field = project.getField(clicked.field.name);
      field[clicked.varName] = clicked.value;                                                               //set value for the field in the model based on the clicked menu item
    
      fieldMenuView.setCheckmarks(menuItemID, parent.items);

      if(parent === this.menu)                                                                              //if this is a top level menu item then update the formatting, since we only want to do this once per click
      {
        spreadSheet.updateNumberFieldFormatting(field);
      }
    }    
  }
};