var scrollBarWidth;

$(document).ready(function()
{
  scrollBarWidth = getScrollBarWidth();
  
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