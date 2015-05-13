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
      
    var info = getActiveElementInfo();
    
    if(info)
    {
      info[0]--;
      $('#' + info[1] + info[0]).focus();
    }  
  }
  else if (e.keyCode == KEY_DOWN_ARROW) 
  {
    e.preventDefault();
    
    var info = getActiveElementInfo();
    
    if(info)
    {
      info[0]++;
      $('#' + info[1] + info[0]).focus();
    }         
  }
}

function getActiveElementInfo()
{
  var id = document.activeElement.id;  
  if(id.indexOf('nodeInput') > -1)
  {
    return [ id.replace('nodeInput', ''), 'nodeInput' ];
  }
  else
  {
    var classes = document.activeElement.className.split(' ');

    for(var i = 0; i < classes.length; i++)
    {
      var c = classes[i];
      console.log(c);
      if(c.indexOf('fieldInput') > -1 && c != 'fieldInput')
      {
        var fieldName = c.replace('fieldInput', '');
        return  [ document.activeElement.id.replace(fieldName, ''), fieldName ];
      }
    }
  }   
} 