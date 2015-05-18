var MenuItem = function(display, value, varName, field)
{
  this.display = display;
  this.value = value;
  this.varName = varName;
  this.field = field;
  this.items = [];
  
  if(field)
  {
    this.checked = field[varName] === value;
  }
  else
  {
    this.checked = false;
  }
};

MenuItem.handleClick = function(fieldName, varName, value)
{
  Project.getField(fieldName)[varName] = value;
};