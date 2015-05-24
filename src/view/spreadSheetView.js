//TODO: add comments
var spreadSheetView = 
{
  render: function()
  {
    $('body').append(this.spreadSheetMarkup());
  
    projectAction.init();
    this.renderFieldsRow();
    this.renderDataTable();
    this.renderNodeColumn();
  },
  destroy: function() 
  { 
    $('#spreadSheetView').remove(); 
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
      $(getFieldMenuMarkup(fieldName, e.clientX, e.clientY, Tree.getTree().fields)).appendTo('body');
      $('#fieldMenu').mouseleave(function() { $('#fieldMenu').remove(); });
    }    
  },
  renderDataTable: function()
  {    
    $('#data-container').append('<table id="dataTable"></table>');
    Tree.getTree().children.forEach(function(child) 
    { 
      spreadSheetView.renderDataRow(child); 
    });
    
    $('#data-container').scroll(function() 
    {
      $('#redips-drag').scrollTop($('#data-container').scrollTop());
      $('#fields-header-row').scrollLeft($('#data-container').scrollLeft());      
    });     
  },
  renderDataRow: function(node, parentRow)
  {
    if(parentRow) { $('<tr id="datarowid' + node.id + '" class="dataRow"></tr>').insertAfter(parentRow); }
    else { $('#dataTable').append('<tr id="datarowid' + node.id + '" class="dataRow"></tr>'); }
    
    Tree.getFields().forEach(function(field) 
    {  
      spreadSheetView.renderDataCell($('#datarowid' + node.id), field.name, node.id, spreadSheet.formattedValue(field, node));    
    });
    
    if(parentRow) { node.children.forEach(function(child) { spreadSheetView.renderDataRow(child, $('#datarowid' + node.id)); }); }
    else { node.children.forEach(function(child) { spreadSheetView.renderDataRow(child); }); }   
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
  renderNodeColumn: function()
  {
    $('#redips-drag').html('<table id="treeTable"></table>');
    Tree.getTree().children.forEach(function(child) { spreadSheetView.renderNodeCell(child); });
    $('#redips-drag').css('bottom', scrollBarWidth + 'px');                                           //shorten the height of the tree section by the width of the scroll bar
  	redips.init();                                                                                    //initialize tree drag/drop library    
  },
  renderNodeCell: function(node, parentCell)
  {
    if(parentCell) { $(spreadSheetView.nodeRow(node.id)).insertAfter(parentCell); }
    else { $('#treeTable').append(spreadSheetView.nodeRow(node.id)); }
    
    $('#nodeContent' + node.id).append(spreadSheetView.deleteButton(node.id) + spreadSheetView.copyButton(node.id) + spreadSheetView.dragHandle);
    spreadSheetView.addNodeContent(node);
    $('#nodeInput' + node.id).on('input', function() { SpreadSheetView.updateNodeName(node.id); });
    
    if(parentCell) { node.children.forEach(function(child) { spreadSheetView.renderNodeCell(child,  $('#rowid' + node.id)); }); }
    else { node.children.forEach(function(child) { spreadSheetView.renderNodeCell(child); }); }   
  },
  nodeRow: function(nodeID) { return '<tr id="rowid' + nodeID + '" class="nodeRow"><td class="redips-rowhandler cell"><div id="nodeContent' + nodeID + '" class="node-container"></div></td></tr>'; },
  dragHandle: '<div class="redips-drag pull-right"><i class="glyphicon glyphicon-move"></i></div>',
  copyButton: function(nodeID) { return '<a href="#"  class="pull-right btn btn-info btn-xs copy-button" onclick="SpreadSheetView.copyNode(' + nodeID + ')"><i class="glyphicon glyphicon-plus"></i></a>' },
  deleteButton: function(nodeID) { return '<a href="#" class="pull-right btn btn-danger btn-xs delete-button" onclick="SpreadSheetView.deleteNode(' + nodeID + ')"><i class="glyphicon glyphicon-remove"></i></a>' },
  expandIcon: function(nodeID) { return '<a href="#" id="icon' + nodeID + '" class="btn btn-xs"><span></span></a>'; },
  nodeInput: function(node) { return '<input id="nodeInput' + node.id + '" class="nodeTextInput" type="text" value="' + node.name + '"/>'; },
  addNodeContent: function(node)
  {
    $('#nodeContent' + node.id).append(spreadSheetView.expandIcon(node.id) + spreadSheetView.nodeInput(node));    
    
    var depthAdjustment = (node.depth-1) * 10;
    var widthAdjustment = depthAdjustment;
    
    if(spreadSheet.hasChildren(node))
    {
      if(spreadSheet.childrenHidden(node))
      {
        $('#icon' + node.id).append('<span class="glyphicon glyphicon-chevron-right"></span>');
      }
      else
      {
        $('#icon' + node.id).append('<span class="glyphicon glyphicon-chevron-down"></span>');
      }
    }
    else
    {
      $('#icon' + node.id).append('<span></span>');
      depthAdjustment += 12;
      widthAdjustment -= 10;
    }
    
    $('#icon' + node.id).click(function() { spreadSheetView.toggleNodeExpansion(node.id); });
    $('#icon' + node.id).css('margin-left', depthAdjustment + 'px');
    $('#nodeInput' + node.id).css('width', (DEFAULT_NODE_INPUT_WIDTH-widthAdjustment) + 'px');
  },
  toggleNodeExpansion: function(nodeID)
  {
    var node = Tree.findNode(nodeID);
    
    if(Tree.isNodeExpanded(node))
    {
      Tree.traverseDescendants(Tree.getChildren, function(n)                           //remove descendant node rows from the DOM
      {
        $('#datarowid' + n.id).remove();
        $('#rowid' + n.id).remove();
      }, node);
      
      Tree.collapseNode(node);                 
    }
    else if(Tree.isNodeCollapsed(node))
    {
      Tree.expandNode(node);
      
      var child;                                                                //add descendant node rows to the DOM
      for(var i = node.children.length-1; i >= 0; i--)                          //iterate in reverse order to preserve the node ordering
      {
        child = node.children[i];
        spreadSheetView.renderDataRow(child, $('#datarowid' + node.id));
        spreadSheetView.renderNodeCell(child, $('#rowid' + node.id));
      }     

      SpreadSheetView.enableDragging(node);   
    }
    
    spreadSheetView.redrawNodeContent(node);     
  },
  redrawNodeContent: function(node)
  {
    $('#icon' + node.id).remove();
    $('#nodeInput' + node.id).remove();
    spreadSheetView.addNodeContent(node);      
  },
  addField: function(fieldName)
  {
    $('#fieldHeaderRow').append(this.fieldHeaderMarkup(fieldName, Tree.getTree().fields.length));
    $('#fieldMenuButton' + fieldName).click(function(e) { spreadSheetView.showFieldMenu(e, fieldName); });
    $('.dataRow').each(function(i, item) { spreadSheetView.renderDataCell(item, fieldName, parseInt(item.id.replace('datarowid', '')), ''); });        
  }
};

function SpreadSheetView() {}

SpreadSheetView.moveNode = function(nodeID, newParentID)
{
  var newParentNode = Tree.findNode(newParentID);
  var node = Tree.findNode(nodeID);

  SpreadSheetView.removeNode(node);
  Tree.addNode(node, newParentNode);
  SpreadSheetView.addNode(node, newParentNode);
}

SpreadSheetView.addNode = function(node, parentNode)
{
  //expand the new parent node, if it's collapsed
  if(Tree.isNodeCollapsed(parentNode))                                 
  {
    SpreadSheetView.expandNode(parentNode);
  }
  spreadSheetView.redrawNodeContent(parentNode);

  //add the moved node and its descendants to the new parent in the view
  $(addRow(node)).insertAfter($('#rowid' + parentNode.id)); 
  $(addDataRow(node, Tree.getTree().fields)).insertAfter($('#datarowid' + parentNode.id));
  
  SpreadSheetView.enableDragging(node);     
};

SpreadSheetView.insertNode = function(node, insertBeforeNode)
{
  $(addRow(node)).insertBefore($('#rowid' + insertBeforeNode.id));                                //insert the new rows before the source row
  $(addDataRow(node, Tree.getTree().fields)).insertBefore($('#datarowid' + insertBeforeNode.id)); //insert the new rows before the source row
  SpreadSheetView.enableDragging(node);   
};

SpreadSheetView.removeNode = function(node)     //remove the node and its descendants from the view 
{
  Tree.traverse(Tree.getChildren, function(n) 
  { 
    $('#rowid' + n.id).remove();
    $('#datarowid' + n.id).remove(); 
  }, node);  
  
  var parentNode = Tree.findParent(node.id);
  Tree.removeNode(node);
  spreadSheetView.redrawNodeContent(parentNode); //if the parent is childless now, then hide the old parent's expand/collapse icon 
};

SpreadSheetView.enableDragging = function(node)
{
  Tree.traverse(Tree.getChildren, function(n)
  {
    REDIPS.drag.enableDivs('init', $('#rowid' + n.id).find('div'));    
  }, node);  
};

SpreadSheetView.updateFieldFormatting = function(field)                 //formats all the values for the field (the entire column)
{
  $('.fieldInput' + field.name).each(function(index) 
  {
    var nodeID = $(this).attr('id').replace(field.name, '');
    var node = Tree.findNode(parseInt(nodeID));
    
    if(node.values)
    {
      var value = Number(node.values[field.name]);              //get the value from the model
      $(this).val(Field.formatValue(field, value));             //format the value and display it
    }
  });
};

SpreadSheetView.copyNode = function(nodeID)
{
  var sourceNode = Tree.findNode(nodeID);
  var newNode = Tree.cloneNode(sourceNode);
  Tree.insertNode(newNode, sourceNode);
  SpreadSheetView.insertNode(newNode, sourceNode);
};

SpreadSheetView.deleteNode = function(nodeID)
{
  SpreadSheetView.removeNode(Tree.findNode(nodeID));
};

SpreadSheetView.updateNodeName = function(nodeID)
{
  var node = Tree.findNode(nodeID);
  
  node.name = $('#nodeInput' + nodeID).val();
  $('#nodeInput' + nodeID).attr('value', $('#nodeInput' + nodeID).val());                          //update the input value in the DOM, so that when we drag/move the row, the value is correct
};

SpreadSheetView.updateFieldValue = function(field, nodeID)
{
  Tree.updateNodeValue(parseInt(nodeID), field, $('#' + field + nodeID).val());

  //TODO: should perform the aggregation based on the field settings for aggregating
  for(var i in Tree.getTree().children)
  {
    aggregate_any(Tree.getTree().children[i], field);
  }
};