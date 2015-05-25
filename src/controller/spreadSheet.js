var spreadSheet = 
{
  display: function()
  {
    project.cleanseData();                  //required to remove circular references that other views may add
    spreadSheetView.render(project.tree);
  },
  fields: function()
  {
    return project.fields();
  },
  tree: function()
  {
    return project.tree;
  },
  updateFieldValue: function(fieldName, nodeID)
  {
    var node = project.findNode(nodeID);
  
    if(node)
    {
      if(!node.values) { node.values = {}; }
      node.values[fieldName] = spreadSheetView.getFieldValue(fieldName, nodeID);     
    }  
  
    //TODO: should perform the aggregation based on the field settings for aggregating this field
    project.tree.children.forEach(function(child) 
    {
      aggregate_any(child, fieldName);
    });    
  },
  rawValue: function(fieldName, nodeID)
  {
    var node = project.findNode(parseInt(nodeID));
    
    if(node.values && node.values[fieldName])
    {
      return node.values[fieldName];
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
    return !project.isNodeChildless(node);
  },
  childrenHidden: function(node)
  {
    return project.isNodeCollapsed(node);
  },
  moveNode: function(nodeID, newParentID)
  {
    var newParentNode = project.findNode(newParentID);
    var node = project.findNode(nodeID);
  
    spreadSheet.removeNode(node);
    project.addNode(node, newParentNode);
    spreadSheet.addNode(node, newParentNode);    
  },
  removeNode: function(node)
  {
    var parentNode = project.findParent(node.id);
    project.traverse(project.getChildren, spreadSheetView.removeNode, node);
    project.removeNode(node);
    spreadSheetView.redrawNodeContent(parentNode);          //if the parent is childless now, then hide the old parent's expand/collapse icon     
  },
  deleteNode: function(nodeID)
  {
    var node = project.findNode(nodeID);
    spreadSheet.removeNode(node);
  },
  addNode: function(node, parentNode)
  {
    if(project.isNodeCollapsed(parentNode))                                 
    {
      spreadSheet.expandNode(parentNode);
    }
    
    spreadSheetView.redrawNodeContent(parentNode);
    spreadSheetView.insertNodeAfter(node, parentNode);      //add the moved node and its descendants to the new parent in the view  
  },
  copyNode: function(nodeID)
  {
    var sourceNode = project.findNode(nodeID);
    var newNode = project.cloneNode(sourceNode);
    project.insertNode(newNode, sourceNode);
    spreadSheetView.insertNodeBefore(newNode, sourceNode);    
  },
  expandNode: function(node)
  {
    project.expandNode(node);
    spreadSheetView.expandNode(node);
    spreadSheetView.redrawNodeContent(node);      
  },
  collapseNode: function(node)
  {
    project.traverseDescendants(project.getChildren, spreadSheetView.removeNode, node);    
    project.collapseNode(node);
    spreadSheetView.redrawNodeContent(node);     
  },
  toggleNode: function(nodeID)
  {
    var node = project.findNode(nodeID);
    
    if(project.isNodeExpanded(node))
    {
      spreadSheet.collapseNode(node);                
    }
    else if(project.isNodeCollapsed(node))
    {
      spreadSheet.expandNode(node); 
    }  
  },
  updateNodeName: function(nodeID, newName)
  {
    project.findNode(nodeID).name = newName;    
  },
  updateNumberFieldFormatting: function(field)
  {
    project.traverse(project.getChildren, function(node)
    {      
      if(node.values)
      {
        var value = Field.formatValue(field, Number(node.values[field.name]));                //get the value from the model
        spreadSheetView.updateFieldValue(field.name, node.id, value);
      }      
    });
  },
  enableDragging: function(node)
  {
    project.traverse(project.getChildren, spreadSheetView.enableDragging, node);    
  }  
};