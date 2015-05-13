$(document).ready(function()
{
  document.onkeydown = checkKey; 
  
  $.ajax({ type: 'GET', url: 'api/projects'}).done(function(data)                                               //read projects from the server
  { 
    projects = data; 
    
    //TODO: read fields from the database (put them in the tree?)
  
    $('#header').html(generateHeaderMarkup(projects.projects));
    
    $('#editNewProjectNameInput').keyup(function(e)
    {
      if(e.keyCode == ENTER_KEY)
      {
        createNewProject();
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
      projectActionEnterPressed();
    }
  }); 
}