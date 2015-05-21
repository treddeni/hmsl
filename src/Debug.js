function Debug() {}

Debug.print = function(o)
{
  console.log(JSON.stringify(o, null, '\t'));  
};

Debug.printTree = function()
{
  console.log(JSON.stringify(Tree.getTree(), null, '\t'));
};