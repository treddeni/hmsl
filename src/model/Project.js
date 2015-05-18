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