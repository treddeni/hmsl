var MenuItem = function(display, value, varName, field)
{
  this.display = display;
  this.value = value;
  this.varName = varName;
  this.field = field;
  this.items = [];
  this.id = MenuItem.id++;
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

MenuItem.id = 0;