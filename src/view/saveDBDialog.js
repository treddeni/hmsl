var saveDBDialog =
{
  render: function(baseVersionNumber, baseVersionLabel, baseVersionDate, newVersion)
  {
    $('#saveDBDialog').remove();
    
    $('body').append('<div class="modal fade" id="saveDBDialog" role="dialog"></div>');
    $('#saveDBDialog').append('<div class="modal-dialog"><div id="saveDBDialogContent" class="modal-content"></div></div>');
    $('#saveDBDialogContent').append('<div class="modal-header" style="padding:15px 30px;"><button type="button" class="close" data-dismiss="modal">&times;</button><h4>Save Project Changes to Database</h4></div>');
    
    $('#saveDBDialogContent').append('<div id="saveDBDialogBody" class="modal-body" style="padding:40px 50px;"></div>');
    $('#saveDBDialogBody').append('<div><label>Base Version: ' + baseVersionNumber + ' - ' + baseVersionDate + ' - ' + baseVersionLabel + '</label></div>');
    $('#saveDBDialogBody').append('<div style="margin-top:20px"><label>New Version:  ' + newVersion + '</label></div><div></div>');
    $('#saveDBDialogBody').append('<div ><label for="versionLabel">New Version Label</label>');
    $('#saveDBDialogBody').append('<input type="text" class="form-control" id="versionLabel"></div>');
    $('#saveDBDialogBody').append('<div style="margin-top:20px"><label for="reasonForChange">Reason for Changes</label>');
    $('#saveDBDialogBody').append('<textarea style="resize:none" class="form-control" rows="5" id="reasonForChange"></textarea></div>');
    
    $('#saveDBDialogContent').append('<div id="saveDBDialogFooter" class="modal-footer"></div>');
    $('#saveDBDialogFooter').append('<button style="margin-left:10px" class="btn btn-danger btn-default pull-right" data-dismiss="modal">Cancel</button>');
    $('#saveDBDialogFooter').append('<button id="saveDBDialogSaveButton" class="btn btn-info btn-default pull-right" data-dismiss="modal">Save</button>');
    
    $('#saveDBDialogSaveButton').click(function() { hms.saveToDatabase(); });
    $("#saveDBDialog").modal();
  }
};