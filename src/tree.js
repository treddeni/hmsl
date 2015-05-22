function Tree() {}

Tree.tree = null;

Tree.getTree = function() { return Tree.tree; };
Tree.setTree = function(t) { Tree.tree = t; };

Tree.getFields = function() { return Tree.tree.fields; };

Tree.getField = function(name)
{
  for(var i in Tree.tree.fields)
  {
    var field = Tree.tree.fields[i];
    if(field.name === name)
    {
      return field;
    }
  }
}

Tree.removeNode = function(node)
{
  var parentNode = Tree.findParent(node.id);

  if(parentNode)
  {
    parentNode.children.splice(parentNode.children.indexOf(node), 1);
  }
  else
  {
    Tree.tree.children.splice(Tree.tree.children.indexOf(node), 1);  
  }
};

Tree.addNode = function(node, parentNode)
{
  parentNode.children.push(node);         //add the moved node to it's new parent in the model
  Tree.setDepths(parentNode);         //set the new depth values for the moved nodes    
};

Tree.insertNode = function(node, addAfterNode)
{
  var parentNode = Tree.findParent(node.id);
  if(parentNode)
  {
    parentNode.children.splice(parentNode.children.indexOf(addAfterNode), 0, node);                           
  }
  else
  {
    Tree.tree.children.splice(Tree.tree.children.indexOf(addAfterNode), 0, node);
  }   
};

Tree.cloneNode = function(sourceNode)
{
  var newNode = $.extend(true, {}, sourceNode);                                     //clone the source node
  Tree.assignNewNodeIDs(newNode);                                                        //assign unique ids to each node in the clone
  return newNode;  
};

Tree.assignNewNodeIDs = function(node)
{
  node.id = Tree.tree.nextNodeID++;
  
  for(var i in node.children)
  {
    Tree.assignNewNodeIDs(node.children[i]);
  }
};

Tree.expandNode = function(node)
{
  node.children = node._children;
  node._children = [];
};

Tree.collapseNode = function(node)
{
  node._children = node.children;
  node.children = [];  
};

Tree.isNodeChildless = function(node)
{
  return (!node.children || node.children.length === 0) && (!node._children || node._children.length === 0);
};

Tree.isNodeCollapsed = function(node)
{
  return node._children && node._children.length > 0;
};

Tree.isNodeExpanded = function(node)
{
  return node.children && node.children.length > 0;  
};

Tree.setDepths = function(node)
{
  for(var i in node.children)
  {
    node.children[i].depth = node.depth + 1;
    Tree.setDepths(node.children[i]);
  }
};

Tree.findNode = function(nodeID, node)
{
  if(!node) { node = Tree.tree; }
  
  if(node.id === nodeID)
  {
    return node;
  }
  else
  {
    for(var i in node.children)
    {
      var foundNode = Tree.findNode(nodeID, node.children[i]);

      if(foundNode) { return foundNode; }
    }
  }
};

Tree.findParent = function(nodeID, node, parent)
{
  if(!node) { node = Tree.tree; }
  
  if(node.id === nodeID)
  {
    return parent;
  }
  else
  {
    for(var i in node.children)
    {
      var foundParent = Tree.findParent(nodeID, node.children[i], node);

      if(foundParent) { return foundParent; }
    }
  }
};

Tree.updateNodeValue = function(nodeID, field, value)
{
  var node = Tree.findNode(nodeID, Tree.tree);

  if(node)
  {
    if(!node.values) { node.values = {}; }
    node.values[field] = value;     
  }
};

Tree.traverse = function(childrenFn, visitFn, parent) 
{
  if (!parent) { parent = Tree.tree; }

  visitFn(parent);
  
  var children = childrenFn(parent);
  for (var i in children) 
  {
    Tree.traverse(childrenFn, visitFn, children[i]);
  }
};

Tree.traverseDescendants = function(childrenFn, visitFn, parent)
{
  if(!parent) { parent = Tree.tree; }
  
  for(var i in parent.children)
  {
    Tree.traverse(childrenFn, visitFn, parent.children[i]);
  }
};

Tree.getChildren = function(node)
{
  return node.children && node.children.length > 0 ? node.children : null;
};