var spreadSheetKeyHandler =
{
  checkKey: function(e) 
  {
    e = e || window.event;
  
    if (e.keyCode == KEY_UP_ARROW) 
    {
      e.preventDefault();
      var prevRow = $(spreadSheetKeyHandler.findAncestor(document.activeElement, 'tr')).prev()[0];
      
      if(prevRow) { $('#' + spreadSheetKeyHandler.getNextElementID(prevRow)).focus(); }      
    }
    else if (e.keyCode == KEY_DOWN_ARROW) 
    {
      e.preventDefault();
      var nextRow = $(spreadSheetKeyHandler.findAncestor(document.activeElement, 'tr')).next()[0];
      
      if(nextRow) { $('#' + spreadSheetKeyHandler.getNextElementID(nextRow)).focus(); }       
    }
    else if (e.keyCode == KEY_RIGHT_ARROW) 
    {
      e.preventDefault();
      $(spreadSheetKeyHandler.findAncestor(document.activeElement, 'td')).next().find('input').focus();  
    }
    else if (e.keyCode == KEY_LEFT_ARROW) 
    {
      e.preventDefault();
      $(spreadSheetKeyHandler.findAncestor(document.activeElement, 'td')).prev().find('input').focus();  
    }    
  },
  getNextElementID: function(newRow)
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
  },
  findAncestor: function(el, tagName) 
  {
    tagName = tagName.toLowerCase();
  
    while (el && el.parentNode) 
    {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() === tagName) { return el; }
    }
  }
};