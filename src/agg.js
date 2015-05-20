function aggregate_any(node, field)
{
  if(!node.children || node.children.length === 0)
  {
    if(!node.values || !node.values[field])
    {
      return 0.0;
    }
    else
    {
      return parseFloat(node.values[field]);
    }
  }
  else
  {
    var childrenSum = 0.0;

    for(var i = 0; i < node.children.length; i++)
    {
      childrenSum += aggregate_any(node.children[i], field);
    }

    if(!node.values)
    {
      node.values = {};
    }

    node.values[field] = childrenSum;                                     //update the model
    document.getElementById(field + node.id).value = childrenSum;         //update the view

    return childrenSum;
  }
}