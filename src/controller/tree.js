var tree =
{
  display: function()
  {
    this.data = project.tree;
    this.field = project.fields()[0];
    this.maxFieldValue = this.calcMaxFieldValue();
    treeView.render();
  },
  calcMaxFieldValue: function()
  {
    var maxValue = Number.NEGATIVE_INFINITY;
    
    project.traverse(project.getChildren, function(node) 
    {
      if(node.values)
      {
        var value = node.values[tree.field.name];
        if(value > maxValue) { maxValue = value; }
      }
    });
    
    return maxValue;
  }
};