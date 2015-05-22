function SpreadSheetView() {}

SpreadSheetView.display = function()
{
  Project.cleanseTree();
  
  $('body').append(generateSpreadSheetMarkup());
  
  ProjectAction.init();
  $('#fields-header-row').html(generateFieldsRowMarkup(Tree.getFields()));
  $('#fields-header-row').css('right', scrollBarWidth + 'px');                                      //shorten the width of the fieldsRow by the width of the scroll bar
  $("#data-container").html(generateDataMarkup(Tree.getTree())); 
	$("#redips-drag").html(generateTreeMarkup(Tree.getTree()));                                       //append the markup to the DOM
  $('#redips-drag').css('bottom', scrollBarWidth + 'px');                                           //shorten the height of the tree section by the width of the scroll bar
	redips.init();                                                                                    //initialize tree drag/drop library   
};

SpreadSheetView.showFieldMenu = function(e, fieldName)
{
  if($('#fieldMenu').length === 0)
  {
    $(getFieldMenuMarkup(fieldName, e.clientX, e.clientY, Tree.getTree().fields)).appendTo('body');
    $('#fieldMenu').mouseleave(function() { $('#fieldMenu').remove(); });
  }
};

SpreadSheetView.handleDataScroll = function()
{
  $('#redips-drag').scrollTop($('#data-container').scrollTop());
  $('#fields-header-row').scrollLeft($('#data-container').scrollLeft());
};

SpreadSheetView.displayRawValue = function(fieldName, nodeID)
{
  var field = Tree.getField(fieldName);
  var node = Tree.findNode(parseInt(nodeID));
  
  if(node.values && node.values[field.name])
  {
    $('#' + fieldName + nodeID).val(node.values[field.name]);
  }  
  else
  {
    $('#' + fieldName + nodeID).val('');
  }
};

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
  SpreadSheetView.redrawExpandIcon(parentNode);

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
  SpreadSheetView.redrawExpandIcon(parentNode); //if the parent is childless now, then hide the old parent's expand/collapse icon  
};

SpreadSheetView.enableDragging = function(node)
{
  Tree.traverse(Tree.getChildren, function(n)
  {
    REDIPS.drag.enableDivs('init', $('#rowid' + n.id).find('div'));    
  }, node);  
};

SpreadSheetView.toggleExpandIcon = function(nodeID)
{
  var node = Tree.findNode(nodeID);
  
  if(Tree.isNodeExpanded(node))
  {
    SpreadSheetView.collapseNode(node);     
  }
  else if(Tree.isNodeCollapsed(node))
  {
    SpreadSheetView.expandNode(node);
  }
};

SpreadSheetView.expandNode = function(node)
{
  Tree.expandNode(node);
  
  var child;                                                                //add descendant node rows to the DOM
  for(var i = node.children.length-1; i >= 0; i--)                          //iterate in reverse order to preserve the node ordering
  {
    child = node.children[i];
    $(addDataRow(child, Tree.getTree().fields)).insertAfter($('#datarowid' + node.id));
    $(addRow(child, '', '')).insertAfter($('#rowid' + node.id)); 
  }

  SpreadSheetView.redrawExpandIcon(node);
  SpreadSheetView.enableDragging(node);   
};

SpreadSheetView.collapseNode = function(node)
{
  Tree.traverseDescendants(Tree.getChildren, function(n)                           //remove descendant node rows from the DOM
  {
    $('#datarowid' + n.id).remove();
    $('#rowid' + n.id).remove();
  }, node);
  
  Tree.collapseNode(node);
  SpreadSheetView.redrawExpandIcon(node); 
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

SpreadSheetView.redrawExpandIcon = function(node)
{
  $('#icon' + node.id).remove();
  $('#nodeInput' + node.id).remove();
  $(getNodeContentMarkup(node)).insertAfter($('#nodeContent' + node.id));
};