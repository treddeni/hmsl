$(document).ready(function()
{
  scrollBarWidth = getScrollBarWidth();  //get the scrollbar width for the browser, to use later for sizing other elements 
  hms.init();
});

var hms = 
{
  init: function()
  {
    projects.init(function(projects) { headerView.render(projects); });   
  },
  openProject: function(projectID)
  {
    projects.openProject(projectID, function(tree)
    {
      project.tree = tree;
      
      $.ajax({ type: 'GET', url: 'api/versions?projectID=' + projectID }).done(function(versions)
      {
        headerView.refresh(JSON.parse(versions).versions);
        hms.selectView(headerView.selectedView());
      });    
    });     
  },
  openSaveDBDialog: function()
  {
    project.getCurrentVersion(function(currentVersion) 
    { 
      saveDBDialog.render(project.tree.version, project.tree.versionLabel, project.tree.versionDate, currentVersion+1);
    });
  },
  saveToDatabase: function() 
  { 
    project.saveToDatabase();
    this.openProject(project.tree.projectID);    
  },
  selectView: function(viewID)
  {
    if(project.tree)
    {
      if(this.view) { this.view.destroy(); }
      this.showView(viewID);
    }
  },
  selectVersion: function(version)
  {
    projects.openProjectVersion(project.tree.projectID, version, function(tree)
    {
      project.tree = tree;
      hms.selectView(headerView.selectedView());
    });
  },  
  showView: function(viewID)
  {
    switch(viewID)
    {
      case SPREADSHEET_VIEW:
        this.view = spreadSheetView;
        spreadSheet.display();
        break;
        
      case TREE_VIEW:
        this.view = treeView;
        tree.displayTree();
        break;
        
      case WEIGHTED_TREE_VIEW:
        this.view = weightedTreeView;
        tree.displayWeightedTree();
        break; 
        
      case CIRCLE_VIEW:
        this.view = circleView;
        circleView.display();
        break;                
    }    
  },
  createNewProject: function(newProjectName)
  {  	
    projects.createNewProject(newProjectName);
  	hms.selectView(headerView.selectedView());      
  },
  nextProjectID: function()
  {
    return projects.nextProjectID++;
  },
  expandToLevel: function(level)
  {
    project.expandToLevel(project.tree, level);
    //TODO: the following needs to be refactored
    if(this.view === spreadSheetView) { spreadSheet.display(); }
    else if(this.view === treeView) { treeView.refresh(); }
    else if(this.view === weightedTreeView) { weightedTreeView.refresh(); }   
  }
};

var scrollBarWidth;
var getScrollBarWidth = function() 
{
  var div, width;
  div = document.createElement('div');
  div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
  div = div.firstChild;
  document.body.appendChild(div);
  width = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return width;
};