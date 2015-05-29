var MIN_NODE_SIZE = 5;
var MAX_NODE_SIZE = 100;

var VERTICAL_VIEW = 0;
var HORIZONTAL_VIEW = 1;

var weightedTreeView = 
{
  destroy: function()
  {
    $('#treeView').remove();
  },
  refresh: function()
  {
    weightedTreeView.update(weightedTreeView.root);
  },
  rotate: function()
  {
    if(weightedTreeView.direction === HORIZONTAL_VIEW)
    {
      weightedTreeView.direction = VERTICAL_VIEW;
      weightedTreeView.horizontal_spacing = 100;
      weightedTreeView.vertical_spacing = 60;
      weightedTreeView.diagonal = d3.svg.diagonal().projection(function(d) { return [d.x, d.y]; });  // define a d3 diagonal projection for use by the node paths later on.
      
      weightedTreeView.root.y0 = weightedTreeView.viewerHeight / 2;
      weightedTreeView.root.x0 = 0;      
    }
    else
    {
      weightedTreeView.direction = HORIZONTAL_VIEW;
      weightedTreeView.horizontal_spacing = 300;
      weightedTreeView.vertical_spacing = 200;
      weightedTreeView.diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });  // define a d3 diagonal projection for use by the node paths later on.
      
      weightedTreeView.root.x0 = weightedTreeView.viewerHeight / 2;
      weightedTreeView.root.y0 = 0;    
    }
    
    weightedTreeView.update(weightedTreeView.root);
  },
  init: function()
  {
    weightedTreeView.direction = HORIZONTAL_VIEW;
    weightedTreeView.selectedNode = null;
    weightedTreeView.draggingNode = null;
    weightedTreeView.duration = 750;
    weightedTreeView.horizontal_spacing = 300;
    weightedTreeView.vertical_spacing = 200;    
    
    weightedTreeView.maxLabelLength = 0;
    
    project.traverse(project.getChildren, function(d)
    {
      weightedTreeView.maxLabelLength = Math.max(d.name.length, weightedTreeView.maxLabelLength);
    });
    
    weightedTreeView.viewerWidth = $('#tree-container').width();
    weightedTreeView.viewerHeight = $('#tree-container').height();
    
    weightedTreeView.tree = d3.layout.tree().size([weightedTreeView.viewerHeight, weightedTreeView.viewerWidth]);
    weightedTreeView.root = project.tree;
    
    weightedTreeView.dragStarted = null;
    weightedTreeView.diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });  // define a d3 diagonal projection for use by the node paths later on.                
  },  
  render: function()
  {
    weightedTreeView.destroy();
    $('body').append('<div id="treeView"><div id="treeViewOptions"><div id="expanderContainer"></div></div><div id="tree-container"></div></div>');
 
    expanderSelector.init(project.tree.maxDepth);
    $('#treeViewOptions').append('<a href="#" id="treeViewRotateButton" class="btn btn-default pull-right">Rotate View</a>');
    $('#treeViewRotateButton').click(function() { weightedTreeView.rotate(); });  
 
    weightedTreeView.init();

    function zoom() { weightedTreeView.svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); }   // Define the zoom function for the zoomable tree
  
    weightedTreeView.zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);     // define the weightedTreeView.zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  
    function initiateDrag(d, domNode) 
    {
      weightedTreeView.draggingNode = d;
      d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
      d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
      d3.select(domNode).attr('class', 'node activeDrag');

      weightedTreeView.svgGroup.selectAll("g.node").sort(function(a, b)    // select the parent and sort the path's
      { 
        if (a.id != weightedTreeView.draggingNode.id) return 1;          // a is not the hovered element, send "a" to the back
        else return -1;                                 // a is the hovered element, bring "a" to the front
      });
      // if nodes has children, remove the links and nodes
      if (nodes.length > 1) 
      {
        // remove link paths
        links = weightedTreeView.tree.links(nodes);
        nodePaths = weightedTreeView.svgGroup.selectAll("path.link").data(links, function(d) { return d.target.id; }).remove();
        
        // remove child nodes
        nodesExit = weightedTreeView.svgGroup.selectAll("g.node").data(nodes, function(d) { return d.id; }).filter(function(d, i) { return d.id != weightedTreeView.draggingNode.id; }).remove();
      }
  
      // remove parent link
      parentLink = weightedTreeView.tree.links(weightedTreeView.tree.nodes(weightedTreeView.draggingNode.parent));
      weightedTreeView.svgGroup.selectAll('path.link').filter(function(d, i) { return d.target.id == weightedTreeView.draggingNode.id; }).remove();

      weightedTreeView.dragStarted = null;
    }
  
    // define the baseSvg, attaching a class for styling and the weightedTreeView.zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", weightedTreeView.viewerWidth)
      .attr("height", weightedTreeView.viewerHeight)
      .attr("class", "overlay")
      .call(weightedTreeView.zoomListener);
  
    dragListener = d3.behavior.drag().on("dragstart", weightedTreeView.dragstart).on("drag", drag).on("dragend", weightedTreeView.dragend);  // Define the drag listeners for drag/drop behaviour of nodes.
    
    function drag(d)
    {
      if (d == weightedTreeView.root) { return; }
      
      if (weightedTreeView.dragStarted) 
      {
        domNode = this;
        initiateDrag(d, domNode);
      }

      d.x0 += d3.event.dy;
      d.y0 += d3.event.dx;
      d3.select(this).attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
      weightedTreeView.updateTempConnector();      
    }
  
    // Append a group which holds all nodes and which the zoom Listener can act upon.
    weightedTreeView.svgGroup = baseSvg.append("g");
  
    // Define the root
    weightedTreeView.root.x0 = weightedTreeView.viewerHeight / 2;
    weightedTreeView.root.y0 = 0;
    
    // Layout the tree initially and center on the root node.
    weightedTreeView.update(weightedTreeView.root);
    weightedTreeView.centerNode(weightedTreeView.root);    
  },
  click: function(d)   // Toggle children on click.
  {
    if (d3.event.defaultPrevented) { return; } // click suppressed
    project.toggleExpansion(d);
    weightedTreeView.update(d);
  },  
  update: function(source) 
  { 
    var i = 0;
        
    // Compute the new height, function counts total children of root node and sets tree height accordingly.
    // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
    // This makes the layout more consistent.
    var levelWidth = [1];
    var childCount = function(level, n) 
    {
      if (n.children && n.children.length > 0) 
      {
        if (levelWidth.length <= level + 1) { levelWidth.push(0); }

        levelWidth[level + 1] += n.children.length;
        n.children.forEach(function(d) { childCount(level + 1, d); });
      }
    };
    
    childCount(0, weightedTreeView.root);
    var newHeight = d3.max(levelWidth) * weightedTreeView.vertical_spacing; // 25 pixels per line
    weightedTreeView.tree = weightedTreeView.tree.size([newHeight, weightedTreeView.viewerWidth]);

    // Compute the new tree layout.
    var nodes = weightedTreeView.tree.nodes(weightedTreeView.root).reverse();
    var links = weightedTreeView.tree.links(nodes);

    // Set widths between levels based on maxLabelLength.
    nodes.forEach(function(d) {
        //d.y = (d.depth * (weightedTreeView.maxLabelLength * 10)); //maxLabelLength * 10px
        // alternatively to keep a fixed scale one can set a fixed depth per level
        // Normalize for fixed-depth by commenting out below line
        d.y = (d.depth * weightedTreeView.horizontal_spacing); //200px per level.
    });

    // Update the nodes…
    node = weightedTreeView.svgGroup.selectAll("g.node").data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
      .call(dragListener)
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on('click', weightedTreeView.click);

    nodeEnter.append("circle")
      .attr('class', 'nodeCircle')
      .attr("r", 0)
      .style("fill", function(d) { return project.isNodeCollapsed(d) ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
      .attr("x", function(d) { return project.hasChildren(d) ? -10 : 10; })
      .attr("dy", ".35em")
      .attr('class', 'nodeText')
      .attr("text-anchor", function(d) { return project.hasChildren(d) ? "end" : "start"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 0);

    // phantom node to give us mouseover in a radius around it
    nodeEnter.append("circle")
      .attr('class', 'ghostCircle')
      .attr("r", 30)
      .attr("opacity", 0.2) // change this to zero to hide the target area
      .style("fill", "red")
      .attr('pointer-events', 'mouseover')
      .on("mouseover", function(node) { weightedTreeView.overCircle(node); })
      .on("mouseout", function(node) { weightedTreeView.outCircle(node); });

    // Update the text to reflect whether node has children or not.
    node.select('text')
        .attr("x", function(d) { return project.hasChildren(d) ? -10 : 10; })
        .attr("text-anchor", function(d) { return project.hasChildren(d) ? "end" : "start"; })
        .text(function(d) { return d.name; });

    // Change the circle fill depending on whether it has children and is collapsed
    node.select("circle.nodeCircle")
      .attr("r", function(d) { return weightedTreeView.computeNodeSize(d); })
      .style("fill", function(d) { return project.isNodeCollapsed(d) ? "lightsteelblue" : "#fff"; });

    // Transition nodes to their new position.
    var nodeUpdate;
    if(weightedTreeView.direction === VERTICAL_VIEW)
    {
      nodeUpdate = node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }
    else
    {
      nodeUpdate = node.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });
    }

    // Fade the text in
    nodeUpdate.select("text").style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit()
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle").attr("r", 0);
    nodeExit.select("text").style("fill-opacity", 0);

    // Update the links…
    var link = weightedTreeView.svgGroup.selectAll("path.link").data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
            var o = { x: source.x0, y: source.y0 };
            return weightedTreeView.diagonal({ source: o, target: o });
        });

    // Transition links to their new position.
    link.attr("d", weightedTreeView.diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit()
        .attr("d", function(d) {
            var o = { x: source.x, y: source.y };
            return weightedTreeView.diagonal({ source: o, target: o });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) { d.x0 = d.x; d.y0 = d.y; });
  },  
  dragstart: function(d)
  {
    if (d == weightedTreeView.root) { return; }
    weightedTreeView.dragStarted = true;
    nodes = weightedTreeView.tree.nodes(d);
    d3.event.sourceEvent.stopPropagation();
    // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');      
  },
  dragend: function(d)
  {
    if (d == weightedTreeView.root) { return; }
    domNode = this;
    
    if (weightedTreeView.selectedNode) 
    {
      // now remove the element from the parent, and insert it into the new elements children
      project.removeNode(weightedTreeView.draggingNode);
      
      if(!weightedTreeView.selectedNode.children) { weightedTreeView.selectedNode.children = []; }
      weightedTreeView.selectedNode.children.push(weightedTreeView.draggingNode);
      
      project.expandNode(weightedTreeView.selectedNode);  // Make sure that the node being added to is expanded so user can see added node is correctly moved    
    } 
  
    weightedTreeView.selectedNode = null;
    d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
    d3.select(domNode).attr('class', 'node');
    
    d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');   // now restore the mouseover event or we won't be able to drag a 2nd time
    weightedTreeView.updateTempConnector();
    
    if (weightedTreeView.draggingNode !== null) 
    {
      weightedTreeView.update(weightedTreeView.root);
      //weightedTreeView.centerNode(weightedTreeView.draggingNode);
      weightedTreeView.draggingNode = null;
    }      
  },
  // Function to update the temporary connector indicating dragging affiliation
  updateTempConnector: function() 
  {
    var data = [];
    if (weightedTreeView.draggingNode !== null && weightedTreeView.selectedNode !== null)   // have to flip the source coordinates since we did this for the existing connectors on the original tree
    {
      data = [{ source: { x: weightedTreeView.selectedNode.y0, y: weightedTreeView.selectedNode.x0 }, target: { x: weightedTreeView.draggingNode.y0, y: weightedTreeView.draggingNode.x0 } }];
    }
    
    var link = weightedTreeView.svgGroup.selectAll(".templink").data(data);
    link.enter().append("path").attr("class", "templink").attr("d", d3.svg.diagonal()).attr('pointer-events', 'none');
    link.attr("d", d3.svg.diagonal());
    link.exit().remove();
  },
  overCircle: function(d) 
  {
    weightedTreeView.selectedNode = d;
    weightedTreeView.updateTempConnector();
  },
  outCircle: function(d) 
  {
    weightedTreeView.selectedNode = null;
    weightedTreeView.updateTempConnector();
  },
  centerNode: function(source)     // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
  {
    scale = weightedTreeView.zoomListener.scale();
    x = -source.y0;
    y = -source.x0;
    x = x * scale + weightedTreeView.viewerWidth / 4;
    y = y * scale + weightedTreeView.viewerHeight / 2;
    d3.select('g').attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
    weightedTreeView.zoomListener.scale(scale);
    weightedTreeView.zoomListener.translate([x, y]);
  },          
  computeNodeSize: function(node)
  {
    var nodeSize = MIN_NODE_SIZE;
    
    if(tree.field)
    {
      if(node.values && node.values[tree.field.name])
      {
        //nodeSize = 2 * Math.PI * Math.sqrt(MAX_NODE_SIZE * node.values[tree.field.name] / tree.maxFieldValue / Math.PI);
        nodeSize = MAX_NODE_SIZE * Math.sqrt(node.values[tree.field.name] / tree.maxFieldValue);
      }
      
      if(nodeSize < MIN_NODE_SIZE) { nodeSize = MIN_NODE_SIZE; }
    }
    
    return nodeSize;       
  }   
};