var hms = 
{
  init: function()
  {
    projects.init(function(projects) { headerView.render(projects); });   
  },
  openProject: function(projectID)
  {
    projects.openProject(projectID, function(data)
    {
      project.data = data;
      spreadSheet.display();      
    });
    if(this.view) { this.view.destroy(); }
    this.view = spreadSheetView;       
  },
  saveToDatabase: function() { project.saveToDatabase(); },
  switchView: function()
  {
    if(this.view === spreadSheetView)
    {
      this.view.destroy();
      this.view = treeView;
      //tree.display();
    }
    else if(this.view === treeView)
    {
      this.view.destroy();
      this.view = spreadSheetView;
      spreadSheet.display();      
    }
  },
  createNewProject: function(newProjectName)
  {  	
    projects.createNewProject(newProjectName);
  	
    this.view.destroy();
    this.view = spreadSheetView;
    spreadSheet.display();      
  },
  nextProjectID: function()
  {
    return projects.nextProjectID++;
  }
};