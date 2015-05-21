function ProjectAction() {}

ProjectAction.init = function()
{
  $('#project-action-container').html(generateProjectSelectorMarkup());
  
  $('#projectActionInput').keyup(function(e)
  {
    if(e.keyCode == ENTER_KEY)
    {
      ProjectAction.EnterPressed();
    }
  }); 
};

ProjectAction.handle = function()
{
	if($('#projectActionSelector').val() == 'addField')
	{
    $('#projectActionInput').val("Type New Field Name and Press Enter to Create");
		$('#projectActionInput').show().focus().select();
	}	
};

ProjectAction.EnterPressed = function()
{
	if($('#projectActionSelector').val() == 'addField')
	{
		var fieldName = $('#projectActionInput').val();
		Tree.getTree().fields.push(new Field(fieldName));     //add new field to the model
    addColumn(fieldName, Tree.getTree().fields);          //add column for new field to the view
		
    $('#projectActionInput').hide();
    $('#projectActionSelector').val('blank');
	}
};