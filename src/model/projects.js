var projects =
{
  init: function(finishFn)
  {  	
    $.ajax({ type: 'GET', url: 'api/projects'}).done(function(data)   //read projects from the server
    { 
      this.data = data;
      finishFn(data.projects);
    });     
  },
  createNewProject: function(newProjectName)
  {
  	$.ajax({ type: 'POST', url: '/api/addProject?projectName=' + newProjectName });                         // add the new project to the projects document in the database
  	
    project.tree = { "projectID": project.nextProjectID, "projectName": newProjectName, "name": newProjectName, "version": 1, "nextNodeID": 3, "depth": 0, "id": 1, "fields": [], "children": [{ "id": 2, "name": newProjectName, "depth": 1, "children": [] }] };
  	project.saveToDatabase();  
  },
  openProject: function(projectID, finishFn)
  {
    $.ajax({ type: 'GET', url: 'api/tree?projectID=' + projectID }).done(function(data)               //read tree for the selected project from the database
    {
      finishFn(data);
    });     
  },
  openProjectVersion: function(projectID, version, finishFn)
  {
    $.ajax({ type: 'GET', url: 'api/version?projectID=' + projectID + '&version=' + version }).done(function(data)               //read tree for the selected project version from the database
    {
      finishFn(data);
    });     
  } 
};