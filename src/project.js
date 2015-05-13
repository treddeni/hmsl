function displayProject()
{
	$("#redips-drag").html(generateMarkup());                                                   			//append the markup to the DOM
	redips.init();                                                                                    //initialize tree drag/drop library
	initProjectActions();	
}

var handleProjectAction = function()
{
	if($('#projectActionSelector').val() == 'addField')
	{
    $('#projectActionInput').val("Type New Field Name and Press Enter to Create");
		$('#projectActionInput').show().focus().select();
	}	
};

function projectActionEnterPressed()
{
	if($('#projectActionSelector').val() == 'addField')
	{
		var fieldName = $('#projectActionInput').val();
		tree.fields.push({ "name": fieldName });															                                //add new field to the model
		addColumn(fieldName);                                                                                 //add column for new field to the view
		
    $('#projectActionInput').hide();
    $('#projectActionSelector').val('blank');
    
		refreshDataModelDisplay();                                                                            //TODO: temp for displaying the model on the page for debugging purposes 
	}	
}

function createNewProject()
{
	$('#selectProjectOption').remove();                                                                     //remove the select project option, once the user selects a project 
	
	var newProjectName = $('#editNewProjectNameInput').val();
	$('#editNewProjectNameInput').hide();
	
	//add an option for the new project to the projects list, select that option
	var newProjectID = projects.nextProjectID.toString();                                                   //TODO: need to get this from the database to insure we get the correct id
	var option = document.createElement("option");
	option.text = newProjectName;
	option.value = newProjectID;                                        
	$(option).insertBefore('#projectSelector option:nth-child(' + $('#projectSelector').length + ')');
	$('#projectSelector').val(newProjectID);
	
	$.ajax({ type: 'POST', url: '/api/addProject?projectName=' + newProjectName });                         // add the new project to the projects document in the database
	
	//create a top node and tree for the project
	tree = { "projectID": newProjectID, "projectName": newProjectName, "version": 1, "nextNodeID": 2, "fields": [], "nodes": [{ "id": 1, "name": newProjectName, "nodes": [] }] };
  displayProject();
	
	saveToDatabase();
	refreshDataModelDisplay();                                                                              //TODO: temp for displaying the model on the page for debugging purposes 	
}