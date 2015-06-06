var headerView = 
{
  render: function(projects)
  {
    var markup = '<select id="projectSelector" class="form-control">' +
    '<option id="selectProjectOption" value="0">Select Project...</option>';
  
    projects.forEach(function(project)
    {
      markup += '<option value="' + project.id + '">' + project.name + '</option>';
    });
  
    markup += '<option id="newProjectOption" value="-1">Create New Project...</option></select>'
    + '<input id="editNewProjectNameInput" class="form-control"></input>';
    //markup += '<a href="#" class="btn btn-default" id="save-file-button" onclick="saveLocally()">Save as File</a>';    
    
    $('#header').html(markup);
    
    //event handlers
    $('#projectSelector').change(function() { headerView.selectProject($(this)); });
    $('#editNewProjectNameInput').keyup(function(e) { headerView.createNewProject(e); });
  },
  refresh: function(versions)
  {
    $('#versionSelector').remove();
    $('#viewSelector').remove();
    $('#save-database-button').remove();
    
    var versionSelector = '<select id="versionSelector" class="form-control">';
    versions.forEach(function(version) 
    { 
      versionSelector += '<option value="' + version.version + '">' + version.version + '</option>';   
    });
    versionSelector += '</select>';
    $('#header').append(versionSelector);
    
    $('#header').append('<a href="#" id="save-database-button" class="btn btn-default">Save to Database</a>');
    
    var viewSelector = '<select id="viewSelector" class="form-control">' +
    '<option value="0">Spread Sheet</option>' +
    '<option value="1">Tree</option>' +
    '<option value="2">Weighted Tree</option>' +
    '<option value="3">Circle Packing</option>' +
    '</select>';
    
    $('#header').append(viewSelector);
    $('#save-database-button').click(function() { hms.saveToDatabase(); });
    $('#viewSelector').change(function() { hms.selectView($(this).val()); });
    $('#versionSelector').change(function() { hms.selectVersion($(this).val()); });     
  },
  selectedView: function()
  {
    return $('#viewSelector').val();
  },
  selectProject: function(projectSelector)
  {
    if(projectSelector.find(":selected").attr('id') === "newProjectOption")
    {
      $('#editNewProjectNameInput').val("Type New Project Name and Press Enter to Create");
      $('#editNewProjectNameInput').show().focus().select();
    }
    else
    {
      $('#selectProjectOption').remove();     //remove the select project option, once the user selects a project      
      hms.openProject(projectSelector.val());
    }       
  },
  createNewProject: function(e)
  {
    if(e.keyCode == ENTER_KEY)
    {
    	$('#selectProjectOption').remove();                                                                     //remove the select project option, once the user selects a project 
    	
    	var newProjectName = $('#editNewProjectNameInput').val();
    	$('#editNewProjectNameInput').hide();
    	
    	//add an option for the new project to the projects list, select that option
    	var newProjectID = hms.nextProjectID();                                                   //TODO: need to get this from the database to insure we get the correct id
    	var option = document.createElement("option");
    	option.text = newProjectName;
    	option.value = newProjectID.toString();                                        
    	$(option).insertBefore('#projectSelector option:nth-child(' + $('#projectSelector').length + ')');
    	$('#projectSelector').val(newProjectID);
              
      hms.createNewProject(newProjectName);
    }    
  }
};