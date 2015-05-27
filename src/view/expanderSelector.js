var expanderSelector =
{
  init: function(numLevels)
  {
    $('#expanderContainer').html(expanderSelector.getMarkup(numLevels));
    $("#expanderSelector").change(expanderSelector.handle);
  },
  handle: function()
  {
    var level = parseInt($('#expanderSelector').val());

    if(level > 0)
    {
      hms.expandToLevel(level);  
    }
  },  
  getMarkup: function(numLevels)
  {
    var markup = '<div id="expanderSelectContainer">'
    + '<select id="expanderSelector" class="form-control">'
    + '<option value="0">Expand/Collapse to Level</option>';
    
    for(var i = 1; i < numLevels+1; i++)
    {
      markup += '<option value="' + i + '">' + i + '</option>';
    }
    
    markup += '</select>'
    + '<input id="projectActionInput" class="form-control"></input>'
    + '</div>';
    return markup; 
  }
};