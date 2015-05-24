var project =
{
  saveToDatabase: function()
  {
    $.ajax({ type: 'POST', url: '/api/tree', dataType: 'json', data: { json: JSON.stringify(Tree.getTree()) } });
    //TODO: replace with -> $.ajax({ type: 'POST', url: '/api/tree', dataType: 'json', data: { json: JSON.stringify(project.data) } });
  },
  fields: function()
  {
    return this.data.fields;
  },
  cleanseData: function()
  {
    Tree.traverse(Tree.getChildren, function(node)
    {
      if(!node.children) { node.children = []; }
      delete node.parent;
    });    
  },
  addField: function(fieldName)
  {
    this.data.fields.push(new Field(fieldName));
  }    
};