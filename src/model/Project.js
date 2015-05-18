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