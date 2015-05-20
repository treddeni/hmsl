function displaySpreadSheet()
{
  $('body').append(generateSpreadSheetMarkup());
  
  $('#project-action-container').html(generateProjectSelectorMarkup());
  $('#fields-header-row').html(generateFieldsRowMarkup());
  $('#fields-header-row').css('right', scrollBarWidth + 'px');                                      //shorten the width of the fieldsRow by the width of the scroll bar
  $("#data-container").html(generateDataMarkup()); 
	$("#redips-drag").html(generateTreeMarkup());                                                     //append the markup to the DOM
  $('#redips-drag').css('bottom', scrollBarWidth + 'px');                                           //shorten the height of the tree section by the width of the scroll bar
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
		tree.fields.push(new Field(fieldName));                                                               //add new field to the model
    addColumn(fieldName);                                                                                 //add column for new field to the view
		
    $('#projectActionInput').hide();
    $('#projectActionSelector').val('blank');
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
	tree = { "projectID": newProjectID, "projectName": newProjectName, "name": newProjectName, "version": 1, "nextNodeID": 2, "fields": [], "children": [{ "id": 1, "name": newProjectName, "children": [] }] };
  displaySpreadSheet();
	
	Project.saveToDatabase();	
}

function showMenu(e, fieldName)
{
  if($('#fieldMenu').length === 0)
  {
    $(getFieldMenuMarkup(fieldName, e.clientX, e.clientY)).appendTo('body');
    $('#fieldMenu').mouseleave(function() { $('#fieldMenu').remove(); });
  }
}