var KEY_UP_ARROW = 38;
var KEY_DOWN_ARROW = 40;
var KEY_LEFT_ARROW = 37;
var KEY_RIGHT_ARROW = 39;

function checkKey(e) 
{
  e = e || window.event;

  if (e.keyCode == KEY_UP_ARROW) 
  {
    e.preventDefault();
    var prevRow = $(getAncestorTag(document.activeElement, 'tr')).prev()[0];
    
    if(prevRow)
    {
      $('#' + getNextElementID(prevRow)).focus();
    }      
  }
  else if (e.keyCode == KEY_DOWN_ARROW) 
  {
    e.preventDefault();
    var nextRow = $(getAncestorTag(document.activeElement, 'tr')).next()[0];
    
    if(nextRow)
    {
      $('#' + getNextElementID(nextRow)).focus();
    }       
  }
  else if (e.keyCode == KEY_RIGHT_ARROW) 
  {
    e.preventDefault();
    $(getAncestorTag(document.activeElement, 'td')).next().find('input').focus();  
  }
  else if (e.keyCode == KEY_LEFT_ARROW) 
  {
    e.preventDefault();
    $(getAncestorTag(document.activeElement, 'td')).prev().find('input').focus();  
  }    
}

function getNextElementID(newRow)
{
  var id = document.activeElement.id;  
  if(id.indexOf('nodeInput') > -1)
  {
    return 'nodeInput' + newRow.id.replace('rowid','');
  }
  else
  {
    var classes = document.activeElement.className.split(' ');

    for(var i = 0; i < classes.length; i++)
    {
      var c = classes[i];

      if(c.indexOf('fieldInput') > -1 && c != 'fieldInput')
      {
        var fieldName = c.replace('fieldInput', '');
        return fieldName + newRow.id.replace('datarowid','');
      }
    }
  }   
}