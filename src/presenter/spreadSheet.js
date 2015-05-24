var spreadSheet = 
{
  display: function()
  {
    project.cleanseData();                  //required to remove circular references that other views may add
    spreadSheetView.render(project.data);
  },
  fields: function()
  {
    return project.fields();
  },
  updateFieldValue: function(fieldName, nodeID)
  {
    Tree.updateNodeValue(parseInt(nodeID), fieldName, $('#' + fieldName + nodeID).val());
  
    //TODO: should perform the aggregation based on the field settings for aggregating
    for(var i in Tree.getTree().children)
    {
      aggregate_any(Tree.getTree().children[i], fieldName);
    }     
  },
  rawValue: function(fieldName, nodeID)
  {
    var field = Tree.getField(fieldName);
    var node = Tree.findNode(parseInt(nodeID));
    
    if(node.values && node.values[field.name])
    {
      return node.values[field.name];
    }  
    else
    {
      return '';
    }    
  },
  formattedValue: function(field, node)
  {
    if(node.values && node.values[field.name])
    {
      return Field.formatValue(field, node.values[field.name]);
    }
    else
    {
      return '';
    }    
  },
  addField: function(fieldName)
  {
    project.addField(fieldName);
    spreadSheetView.addField(fieldName);
  },
  hasChildren: function(node)
  {
    return (node.children && node.children.length > 0) || (node._children && node._children.length > 0);
  },
  childrenHidden: function(node)
  {
    return node._children && node._children.length > 0;
  }
};