$(document).ready(function()
{
  $.ajax({ type: 'GET', url: 'api/projects'}).done(function(data)                                         //read projects from the server
  { 
    projects = data; 
    
    //TODO: read fields from the database (put them in the tree?)
  
    $('#header').html(generateHeaderMarkup(projects.projects));
    
    $('#editNewProjectNameInput').keyup(function(e)
    {
      if(e.keyCode == ENTER_KEY)
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
        
        $.ajax({ type: 'POST', url: '/api/addProject?projectName=' + newProjectName });                   // add the new project to the projects document in the database
        
        //create a top node and tree for the project
        tree = { "projectID": newProjectID, "projectName": newProjectName, "version": 1, "nextNodeID": 2, "fields": [], "nodes": [{ "id": 1, "name": newProjectName, "nodes": [] }] };
        $("#redips-drag").html(generateMarkup(tree, fields));                                                   //append the markup to the DOM
        redips.init();                                                                                          //initialize tree drag/drop library
        
        saveToDatabase();
        refreshDataModelDisplay();                                                                                    //TODO: temp for displaying the model on the page for debugging purposes 
      }
    });
  });  
});

function initProjectActions()
{
  $('#projectActionInput').keyup(function(e)
  {
    if(e.keyCode == ENTER_KEY)
    {
      console.log('add field');
      //TODO: implement adding a field
    }
  }); 
}