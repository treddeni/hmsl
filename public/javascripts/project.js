var handleProjectAction = function()
{
	console.log('handleProjectAction()');
	if($('#projectActionSelector').val() == 'addField')
	{
		$('#projectActionInput').show().focus().select();
	}	
};