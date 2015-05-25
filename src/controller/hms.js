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