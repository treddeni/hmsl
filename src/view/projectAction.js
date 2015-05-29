var projectAction =
{
  init: function()
  {
    $('#project-action-container').html(projectAction.markup());
    
    $('#projectActionInput').keyup(function(e)
    {
      if(e.keyCode == ENTER_KEY)
      {
        projectAction.enterPressed();
      }
    }); 
    
    $("#projectActionSelector").change(projectAction.handle);
  },
  handle: function()
  {
  	if($('#projectActionSelector').val() == 'addField')
  	{
      $('#projectActionInput').val("Type New Field Name and Press Enter to Create");
  		$('#projectActionInput').show().focus().select();
  	}	
  },
  enterPressed: function()
  {
  	if($('#projectActionSelector').val() == 'addField')
  	{
      spreadSheet.addField($('#projectActionInput').val());	
      $('#projectActionInput').hide();
      $('#projectActionSelector').val('blank');
  	}
  },
  markup: function()
  {
    return '<div id="projectActionSelectorContainer">'
    + '<select id="projectActionSelector" class="form-control">'
    + '<option value="blank"></option>'
    + '<option value="addField">Add Field</option>'
    + '</select>'
    + '<input id="projectActionInput" class="form-control"></input>'
    + '</div>'; 
  }
};