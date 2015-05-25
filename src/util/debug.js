function debug() {}

debug.print = function(o)
{
  console.log(JSON.stringify(o, null, '\t'));  
};

debug.printTree = function()
{
  console.log(JSON.stringify(project.tree, null, '\t'));
};