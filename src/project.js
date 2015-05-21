function Project() {}

Project.projects = null;

Project.getProjects = function() { return Project.projects.projects; };
Project.setProjects = function(projects) { Project.projects = projects; };

Project.selectProject = function()
{
  if($('#projectSelector').find(":selected").attr('id') === "newProjectOption")
  {
    $('#editNewProjectNameInput').val("Type New Project Name and Press Enter to Create");
    $('#editNewProjectNameInput').show().focus().select();
  }
  else
  {
    //remove the select project option, once the user selects a project
    if($('#projectSelector').val() > 0)                               
    {
      $('#selectProjectOption').remove(); 
    }

    $.ajax({ type: 'GET', url: 'api/tree?projectID=' + $('#projectSelector').val() }).done(function(data)               //read tree for the selected project from the database
    {
      Tree.setTree(data);
      Project.showSpreadSheetView();
    });  
  }                                                                                                 
};

Project.saveToDatabase = function()
{
  $.ajax({ type: 'POST', url: '/api/tree', dataType: 'json', data: { json: JSON.stringify(Tree.getTree()) } });
};

Project.createNewProject = function()
{
	$('#selectProjectOption').remove();                                                                     //remove the select project option, once the user selects a project 
	
	var newProjectName = $('#editNewProjectNameInput').val();
	$('#editNewProjectNameInput').hide();
	
	//add an option for the new project to the projects list, select that option
	var newProjectID = Project.projects.nextProjectID++;                                                   //TODO: need to get this from the database to insure we get the correct id
	var option = document.createElement("option");
	option.text = newProjectName;
	option.value = newProjectID.toString();                                        
	$(option).insertBefore('#projectSelector option:nth-child(' + $('#projectSelector').length + ')');
	$('#projectSelector').val(newProjectID);
	
	$.ajax({ type: 'POST', url: '/api/addProject?projectName=' + newProjectName });                         // add the new project to the projects document in the database
	
	//create a top node and tree for the project
	Tree.setTree({ "projectID": newProjectID, "projectName": newProjectName, "name": newProjectName, "version": 1, "nextNodeID": 2, "depth": 0, "fields": [], "children": [{ "id": 1, "name": newProjectName, "depth": 1, "children": [] }] });
	
	Project.saveToDatabase();
  Project.showSpreadSheetView();	
}

Project.cleanseTree = function()
{
  Tree.traverse(Tree.getChildren, function(node)
  {
    if(!node.children) { node.children = []; }
    delete node.parent;
  });
};

Project.switchView = function()
{
  if($('#spreadSheetView').length)
  {
    Project.showTreeView();
  }
  else
  {
    Project.showSpreadSheetView();
  }
};

Project.showSpreadSheetView = function()
{
  Project.removeAllViews();
  SpreadSheetView.display();  
};

Project.showTreeView = function()
{
  Project.removeAllViews();
  TreeView.display(Tree.getTree()); 
};

Project.removeAllViews = function()
{
  $('#spreadSheetView').remove();
  $('#tree-container').remove();  
};