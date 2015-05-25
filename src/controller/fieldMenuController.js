var fieldMenuController =
{
  displayFieldMenu: function(fieldName, x, y) 
  {
    var field = project.getField(fieldName);
      
    var menu = new FieldMenu(field, spreadSheet.fields);
    
    fieldMenuView.render(menu, x, y);    
  }
};