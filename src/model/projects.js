var projects =
{
  init: function(finishFn)
  {  	
    $.ajax({ type: 'GET', url: 'api/projects'}).done(function(data)   //read projects from the server
    { 
      projects.data = data;
      finishFn(data.projects);
    });     
  },
  nextProjectID: function()
  {
    return projects.data.nextProjectID;
  },
  createNewProject: function(newProjectName, finishFn)
  {
  	$.ajax({ type: 'POST', url: '/api/addProject?projectName=' + newProjectName }).done(function()     // add the new project to the projects document in the database
    {
      //TODO: need to set the versionDate here or better yet on the server, when we do saveToDatabase()
      project.tree = { "projectID": projects.nextProjectID(), "projectName": newProjectName, "name": newProjectName, "version": 1, "versionDate": '1/1/2015 1:23:45', 
                       "versionLabel": 'Project Created', "nextNodeID": 3, "depth": 0, "id": 1, "fields": [], "children": [{ "id": 2, "name": newProjectName, "depth": 1, "children": [] }] };
    	project.saveToDatabase(finishFn);
    });  
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