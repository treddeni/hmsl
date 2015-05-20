function Project()
{
  
}

Project.getField = function(name)
{
  for(var i = 0; i < tree.fields.length; i++)
  {
    var field = tree.fields[i];
    if(field.name === name)
    {
      return field;
    }
  }
  
  return null;
}

Project.saveToDatabase = function()
{
  $.ajax({ type: 'POST', url: '/api/tree', dataType: 'json', data: { json:JSON.stringify(tree) } });
};

Project.updateFieldFormatting = function(field)                 //formats all the values for the field (the entire column)
{
  $('.fieldInput' + field.name).each(function(index) 
  {
    var nodeID = $(this).attr('id').replace(field.name, '');
    var node = findNodeInTree(parseInt(nodeID));
    
    if(node.values)
    {
      var value = Number(node.values[field.name]);              //get the value from the model
      $(this).val(Field.formatValue(field, value));             //format the value and display it
    }
});
};

Project.cleanseTree = function()
{
  visit(tree, getChildren, function(node)
  {
    delete node.parent;
  });
};

Project.getTree = function()
{
  return tree;
}

Project.switchView = function()
{
  if($('#spreadSheetView').length)
  {
    $('#spreadSheetView').remove();
    displayTreeView(tree);
  }
  else
  {
    $('#tree-container').remove();
    displaySpreadSheet();
  }
};