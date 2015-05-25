//TODO: add comments
var spreadSheetView = 
{
  render: function()
  {
    $(document).on("keydown", spreadSheetKeyHandler.checkKey);
    
    $('body').append(this.spreadSheetMarkup());
  
    projectAction.init();
    this.renderFieldsRow();
    this.renderDataTable();
    this.renderNodeColumn();
  },
  destroy: function() 
  { 
    $('#spreadSheetView').remove();
    $(document).off("keydown"); 
  },
  spreadSheetMarkup: function()
  {
    return '<div id="spreadSheetView">' +
      '<div id="project-action-container"></div>' +
      '<div id="fields-header-row"></div>' +
      '<div id="redips-drag"></div>' +
      '<div id="data-container"></div>' +
    '</div>';
  },
  renderFieldsRow: function()
  {
    $('#fields-header-row').html('<table id="fieldHeaderTable"><tr id="fieldHeaderRow"></tr></table>');
  
    spreadSheet.fields().forEach(function(field)
    { 
      $('#fieldHeaderRow').append(spreadSheetView.fieldHeader(field.name));
      $('#fieldMenuButton' + field.name).click(function(e) { spreadSheetView.showFieldMenu(e, field.name); });
    });
  
    $('#fields-header-row').css('right', scrollBarWidth + 'px');   //shorten the width of the fieldsRow by the width of the scroll bar   
  },
  fieldHeader: function(fieldName)
  {
    return '<td class="fieldHeaderCell"><div class="fieldHeaderContainer">'
      + '<div class="moveColGrip"></div>'
      + '<div class="fieldNameInputContainer"><textarea id="colHeaderInput' + fieldName + '" class="fieldNameInput">' + fieldName + '</textarea></div>'
      + '<div class="fieldHeaderButton">'
      + '<img id="fieldMenuButton' + fieldName + '" src="images/down-arrow.png"/>'
      + '</div>'
      + '<div id="grip' + fieldName + '" class="resizeColGrip" onmousedown="startResize(event, this)"></div>'
      + '</div></td>';
  },
  showFieldMenu: function(e, fieldName)
  {
    if($('#fieldMenu').length === 0)
    {
      //$(getFieldMenuMarkup(fieldName, e.clientX, e.clientY, spreadSheet.fields())).appendTo('body');
      //getFieldMenuMarkup(fieldName, e.clientX, e.clientY, spreadSheet.fields());
      fieldMenuController.displayFieldMenu(fieldName, e.clientX, e.clientY);
      //$('#fieldMenu').mouseleave(function() { $('#fieldMenu').remove(); });
    }    
  },
  renderDataTable: function()
  {    
    $('#data-container').append('<table id="dataTable"></table>');
    spreadSheet.tree().children.forEach(function(child) 
    { 
      $('#dataTable').append(spreadSheetView.dataRowsMarkup(child)); 
    });
    
    $('#data-container').scroll(function() 
    {
      $('#redips-drag').scrollTop($('#data-container').scrollTop());
      $('#fields-header-row').scrollLeft($('#data-container').scrollLeft());      
    });     
  },
  dataRowsMarkup: function(node)
  {
    var markup = '<tr id="datarowid' + node.id + '" class="dataRow">';
    
    spreadSheet.fields().forEach(function(field) 
    {  
      markup += '<td class="cell">'
             + '<input class="fieldInput fieldInput' + field.name + '" type="text" id="' + field.name + node.id + '" value="' + spreadSheet.formattedValue(field, node) + '" '
             + 'oninput="spreadSheet.updateFieldValue(\'' + field.name + '\',' + node.id + ')" onfocus="$(this).val(spreadSheet.rawValue(\'' + field.name + '\',' + node.id + '))">'
             + '</td>';
    });

    node.children.forEach(function(child) { markup += spreadSheetView.dataRowsMarkup(child); });   

    return markup + '</tr>';
  },
  renderDataCell: function(row, fieldName, nodeID, value)
  {
    $(row).append(spreadSheetView.fieldCell(fieldName, nodeID, value));
    $('#' + fieldName + nodeID).on('input', function() { spreadSheet.updateFieldValue(fieldName, nodeID); });
    $('#' + fieldName + nodeID).focus(function() { $(this).val(spreadSheet.rawValue(fieldName, nodeID)); });     
  },
  fieldCell: function(fieldName, nodeID, value)
  {
    return '<td class="cell"><input class="fieldInput fieldInput' + fieldName + '" type="text" id="' + fieldName + nodeID + '" value="' + value + '"></td>';
  },
  nodeRowMarkup: function(node)
  {
    var markup = '<tr id="rowid' + node.id + '" class="nodeRow"><td class="redips-rowhandler cell"><div id="nodeContent' + node.id + '" class="node-container">';
    
    markup += spreadSheetView.deleteButton(node.id) + spreadSheetView.copyButton(node.id) + spreadSheetView.dragHandle;
    markup += spreadSheetView.nodeContent(node);    
  
    node.children.forEach(function(child) { markup += spreadSheetView.nodeRowMarkup(child); });
  
    return markup + '</div></td></tr>';
  },
  nodeContent: function(node)
  {
    var iconMarkup;
    var depthAdjustment = (node.depth-1) * 10;
    var widthAdjustment = depthAdjustment;   
  
    if(spreadSheet.hasChildren(node))
    {
      if(spreadSheet.childrenHidden(node)) { iconMarkup = '<span class="glyphicon glyphicon-chevron-right"></span>'; }
      else                                 { iconMarkup = '<span class="glyphicon glyphicon-chevron-down"></span>'; }
    }
    else
    {
      iconMarkup = '<span></span>';
      depthAdjustment += 12;
      widthAdjustment -= 10;
    }
    
    return spreadSheetView.expandIcon(node.id, depthAdjustment, iconMarkup) + spreadSheetView.nodeInput(node, DEFAULT_NODE_INPUT_WIDTH-widthAdjustment);     
  },
  renderNodeColumn: function()
  {
    $('#redips-drag').html('<table id="treeTable"></table>');
    spreadSheet.tree().children.forEach(function(child) 
    { 
       $('#treeTable').append(spreadSheetView.nodeRowMarkup(child));
    });
    $('#redips-drag').css('bottom', scrollBarWidth + 'px');                                           //shorten the height of the tree section by the width of the scroll bar
  	redips.init();                                                                                    //initialize tree drag/drop library    
  },
  dragHandle: '<div class="redips-drag pull-right"><i class="glyphicon glyphicon-move"></i></div>',
  copyButton: function(nodeID) { return '<a href="#"  class="pull-right btn btn-info btn-xs copy-button" onclick="spreadSheet.copyNode(' + nodeID + ')"><i class="glyphicon glyphicon-plus"></i></a>' },
  deleteButton: function(nodeID) { return '<a href="#" class="pull-right btn btn-danger btn-xs delete-button" onclick="spreadSheet.deleteNode(' + nodeID + ')"><i class="glyphicon glyphicon-remove"></i></a>' },
  expandIcon: function(nodeID, depthAdjustment, iconMarkup) 
  { 
    return '<a href="#" id="icon' + nodeID + '" class="btn btn-xs" style="margin-left:' + depthAdjustment + 'px" '
         + 'onclick="spreadSheet.toggleNode(' + nodeID + ')">' + iconMarkup + '</a>'; 
  },
  nodeInput: function(node, width)
  { 
    return '<input id="nodeInput' + node.id + '" class="nodeTextInput" style="width:' + width + 'px" type="text" '
         + 'value="' + node.name + '" oninput="spreadSheetView.updateNodeName(' + node.id + ')"/>'; 
  },
  expandNode: function(node)
  {
    var child;                                                                //add descendant node rows to the DOM
    for(var i = node.children.length-1; i >= 0; i--)                          //iterate in reverse order to preserve the node ordering
    {
      child = node.children[i];
      $(spreadSheetView.dataRowsMarkup(child)).insertAfter($('#datarowid' + node.id));
      $(spreadSheetView.nodeRowMarkup(child)).insertAfter($('#rowid' + node.id));
    }     

    spreadSheetView.enableDragging(node);     
  },
  redrawNodeContent: function(node)
  {
    $('#icon' + node.id).remove();
    $('#nodeInput' + node.id).remove();
    $('#nodeContent' + node.id).append(spreadSheetView.nodeContent(node));     
  },
  addField: function(fieldName)
  {
    $('#fieldHeaderRow').append(this.fieldHeaderMarkup(fieldName, spreadSheet.fields().length));
    $('#fieldMenuButton' + fieldName).click(function(e) { spreadSheetView.showFieldMenu(e, fieldName); });
    $('.dataRow').each(function(i, item) { spreadSheetView.renderDataCell(item, fieldName, parseInt(item.id.replace('datarowid', '')), ''); });        
  },
  updateNodeName: function(nodeID)
  {
    var value = $('#nodeInput' + nodeID).val();
    spreadSheet.updateNodeName(nodeID, value);
    $('#nodeInput' + nodeID).attr('value', value);                          //update the input value in the DOM, so that when we drag/move the row, the value is correct    
  },
  removeNode: function(node)
  {
    $('#rowid' + node.id).remove();
    $('#datarowid' + node.id).remove();     
  },
  insertNodeBefore: function(node, insertBeforeNode)
  {
    $(spreadSheetView.nodeRowMarkup(node)).insertBefore($('#rowid' + insertBeforeNode.id));      //insert the new rows before the source row
    $(spreadSheetView.dataRowsMarkup(node)).insertBefore($('#datarowid' + insertBeforeNode.id)); //insert the new rows before the source row
    spreadSheetView.enableDragging(node);    
  },
  insertNodeAfter: function(node, insertAfterNode)
  {
    $(spreadSheetView.nodeRowMarkup(node)).insertAfter($('#rowid' + insertAfterNode.id));      //insert the new rows before the source row
    $(spreadSheetView.dataRowsMarkup(node)).insertAfter($('#datarowid' + insertAfterNode.id)); //insert the new rows before the source row
    spreadSheetView.enableDragging(node);    
  },
  enableDragging: function(node)
  {
    REDIPS.drag.enableDivs('init', $('#rowid' + node.id).find('div'));       
  },
  getFieldValue: function(fieldName, nodeID)
  {
    return $('#' + fieldName + nodeID).val();
  },
  updateFieldValue: function(fieldName, nodeID, value)
  {
    $('#' + fieldName + nodeID).val(value);
  }
};