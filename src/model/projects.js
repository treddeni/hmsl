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
  	
    project.tree = { "projectID": project.nextProjectID, "projectName": newProjectName, "name": newProjectName, "version": 1, "nextNodeID": 2, "depth": 0, "fields": [], "children": [{ "id": 1, "name": newProjectName, "depth": 1, "children": [] }] };
  	project.saveToDatabase();  
  },
  openProject: function(projectID, finishFn)
  {
    $.ajax({ type: 'GET', url: 'api/tree?projectID=' + projectID }).done(function(data)               //read tree for the selected project from the database
    {
      finishFn(data);
    });     
  } 
};