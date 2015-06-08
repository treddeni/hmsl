var project =
{
  saveToDatabase: function(finishFn)
  {
    this.cleanseData();
    $.ajax({ type: 'POST', url: '/api/tree', dataType: 'json', data: { json: JSON.stringify(this.tree) } }).done(finishFn());
  },
  getCurrentVersion: function(finishFn)
  {
    $.ajax({ type: 'GET', url: 'api/tree?projectID=' + this.tree.projectID }).done(function(data)               //read tree for the selected project from the database
    {
      finishFn(data.version);
    });      
  },
  fields: function()
  {
    return this.tree.fields;
  },
  cleanseData: function()
  {
    this.traverse(project.getChildren, function(node)
    {
      if(!node.children) { node.children = []; }
      delete node.parent;
      delete node.x;
      delete node.x0;
      delete node.y;
      delete node.y0;
    });    
  },
  addField: function(fieldName)
  {
    this.tree.fields.push(new Field(fieldName));
  },
  getField: function(fieldName)
  {
    for(var i in this.tree.fields)
    {
      var field = this.tree.fields[i];
      if(field.name === fieldName)
      {
        return field;
      }
    }
  },
  removeNode: function(node)
  {
    var parentNode = this.findParent(node.id);
  
    if(parentNode)
    {
      parentNode.children.splice(parentNode.children.indexOf(node), 1);
    }
    else
    {
      this.tree.children.splice(this.tree.children.indexOf(node), 1);  
    }    
  },
  addNode: function(node, parentNode)
  {
    parentNode.children.push(node);            //add the moved node to it's new parent in the model
    project.setDepths(parentNode);             //set the new depth values for the moved nodes       
  },
  setDepths: function(node)
  {
    node.children.forEach(function(child, i)
    {
      child.depth = node.depth + 1;
      
      if(child.depth > project.tree.maxDepth) 
      { 
        project.tree.maxDepth = child.depth; 
      }
      
      project.setDepths(child);
    });
  },
  insertNode: function(node, sourceNode)
  {
    var parentNode = this.findParent(sourceNode.id);
    if(parentNode)
    {
      parentNode.children.splice(parentNode.children.indexOf(sourceNode), 0, node);                           
    }
    else
    {
      this.tree.children.splice(this.tree.children.indexOf(sourceNode), 0, node);
    }     
  },
  cloneNode: function(sourceNode)
  {
    var newNode = $.extend(true, {}, sourceNode);                                                       //clone the source node
    this.traverse(this.getChildren, function(node) { node.id = project.tree.nextNodeID++; }, newNode);  //assign unique ids to each node in the clone                                                  
    return newNode;     
  },
  expandNode: function(node)
  {
    if(project.isNodeCollapsed(node))
    {
      node.children = node._children;
      node._children = []; 
    }   
  },
  fullyExpandNode: function(node)
  {
    project.expandNode(node);
    node.children.forEach(function(child) { project.fullyExpandNode(child); });       
  },
  expandToLevel: function(node, level)
  {    
    if(node.depth < level)
    {
      project.expandNode(node);
      for(var i in node.children) { project.expandToLevel(node.children[i], level); }
    }
    else
    {
      project.collapseNode(node);
      for(var i in node._children) { project.expandToLevel(node._children[i], level); }
    }
  }, 
  collapseNode: function(node)
  {
    if(project.isNodeExpanded(node))
    {
      node._children = node.children;
      node.children = [];
    }    
  },
  fullyCollapseNode: function(node)
  {
    if(node.children)
    {
      node._children = node.children;
      node._children.forEach(project.fullyCollapseNode);
      node.children = [];
    }    
  },
  toggleExpansion: function(node)
  {
    if (node.children) 
    {
        node._children = node.children;
        node.children = [];
    } 
    else if (node._children) 
    {
        node.children = node._children;
        node._children = [];
    }    
  },
  hasChildren: function(node)
  {
    return (node.children && node.children.length === 0) || (node._children && node._children.length === 0);
  },  
  isNodeChildless: function(node)
  {
    return (!node.children || node.children.length === 0) && (!node._children || node._children.length === 0);
  },
  isNodeCollapsed: function(node)
  {
    return node._children && node._children.length > 0;
  },
  isNodeExpanded: function(node)
  {
    return node.children && node.children.length > 0;
  },
  findNode: function(nodeID, searchNode)
  {
    if(!searchNode) { searchNode = this.tree; }
    
    if(searchNode.id === nodeID)
    {
      return searchNode;
    }
    else
    {
      for(var i in searchNode.children)
      {
        var foundNode = this.findNode(nodeID, searchNode.children[i]);
        if(foundNode) { return foundNode; }
      }
    }    
  },
  findParent: function(nodeID, searchNode, parent)
  {
    if(!searchNode) { searchNode = this.tree; }
    
    if(searchNode.id === nodeID)
    {
      return parent;
    }
    else
    {
      for(var i in searchNode.children)
      {
        var foundParent = this.findParent(nodeID, searchNode.children[i], searchNode);
        if(foundParent) { return foundParent; }
      }
    }    
  },
  traverse: function(childrenFn, visitFn, parent)
  {
    if (!parent) { parent = project.tree; }
    visitFn(parent);
    
    var children = childrenFn(parent);
    for (var i in children) 
    {
      project.traverse(childrenFn, visitFn, children[i]);
    }    
  },
  traverseDescendants: function(childrenFn, visitFn, parent)
  {
    if(!parent) { parent = project.tree; }
    parent.children.forEach(function(child) { project.traverse(childrenFn, visitFn, child); });  
  },
  getChildren: function(node)
  {
    return node.children && node.children.length > 0 ? node.children : null;    
  }   
};