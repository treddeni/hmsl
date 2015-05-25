var FieldMenuItem = function(display, value, varName, field)
{
  this.display = display;
  this.value = value;
  this.varName = varName;
  this.field = field;
  this.items = [];
  this.id = FieldMenuItem.id++;
  this.parent = -1;

  if(field)
  {
    this.checked = field[varName] === value;
  }
  else
  {
    this.checked = false;
  }
};

FieldMenuItem.id = 0;