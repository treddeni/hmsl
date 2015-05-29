var MIN_NODE_SIZE = 5;
var MAX_NODE_SIZE = 100;
var VERTICAL_TREE_SPACING = 300;

var treeView = 
{
  destroy: function()
  {
    $('#tree-container').remove();
  },
  refresh: function()
  {
    treeView.update(treeView.root);
  },
  init: function()
  {
    treeView.selectedNode = null;
    treeView.draggingNode = null;
    treeView.duration = 750;    
    
    treeView.maxLabelLength = 0;
    
    project.traverse(project.getChildren, function(d)
    {
      treeView.maxLabelLength = Math.max(d.name.length, treeView.maxLabelLength);
    });
    
    treeView.viewerWidth = $('#tree-container').width();
    treeView.viewerHeight = $('#tree-container').height();
    
    treeView.tree = d3.layout.tree().size([treeView.viewerHeight, treeView.viewerWidth]);
    treeView.root = project.tree;
    
    treeView.dragStarted = null;
    treeView.diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });  // define a d3 diagonal projection for use by the node paths later on.                
  },  
  render: function()
  {
    $('#treeView').remove();
    $('body').append('<div id="treeView"><div id="expanderContainer"></div><div id="tree-container"></div></div>');
 
    expanderSelector.init(project.tree.maxDepth);  
 
    treeView.init();

    function zoom() { treeView.svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); }   // Define the zoom function for the zoomable tree
  
    treeView.zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);     // define the treeView.zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  
    function initiateDrag(d, domNode) 
    {
      treeView.draggingNode = d;
      d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
      d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
      d3.select(domNode).attr('class', 'node activeDrag');

      treeView.svgGroup.selectAll("g.node").sort(function(a, b)    // select the parent and sort the path's
      { 
        if (a.id != treeView.draggingNode.id) return 1;          // a is not the hovered element, send "a" to the back
        else return -1;                                 // a is the hovered element, bring "a" to the front
      });
      // if nodes has children, remove the links and nodes
      if (nodes.length > 1) 
      {
        // remove link paths
        links = treeView.tree.links(nodes);
        nodePaths = treeView.svgGroup.selectAll("path.link").data(links, function(d) { return d.target.id; }).remove();
        
        // remove child nodes
        nodesExit = treeView.svgGroup.selectAll("g.node").data(nodes, function(d) { return d.id; }).filter(function(d, i) { return d.id != treeView.draggingNode.id; }).remove();
      }
  
      // remove parent link
      parentLink = treeView.tree.links(treeView.tree.nodes(treeView.draggingNode.parent));
      treeView.svgGroup.selectAll('path.link').filter(function(d, i) { return d.target.id == treeView.draggingNode.id; }).remove();

      treeView.dragStarted = null;
    }
  
    // define the baseSvg, attaching a class for styling and the treeView.zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", treeView.viewerWidth)
      .attr("height", treeView.viewerHeight)
      .attr("class", "overlay")
      .call(treeView.zoomListener);
  
    dragListener = d3.behavior.drag().on("dragstart", treeView.dragstart).on("drag", drag).on("dragend", treeView.dragend);  // Define the drag listeners for drag/drop behaviour of nodes.
    
    function drag(d)
    {
      if (d == treeView.root) { return; }
      
      if (treeView.dragStarted) 
      {
        domNode = this;
        initiateDrag(d, domNode);
      }

      d.x0 += d3.event.dy;
      d.y0 += d3.event.dx;
      d3.select(this).attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
      treeView.updateTempConnector();      
    }
  
    // Append a group which holds all nodes and which the zoom Listener can act upon.
    treeView.svgGroup = baseSvg.append("g");
  
    // Define the root
    treeView.root.x0 = treeView.viewerHeight / 2;
    treeView.root.y0 = 0;
    
    // Layout the tree initially and center on the root node.
    treeView.update(treeView.root);
    treeView.centerNode(treeView.root);    
  },
  click: function(d)   // Toggle children on click.
  {
    if (d3.event.defaultPrevented) { return; } // click suppressed
    project.toggleExpansion(d);
    treeView.update(d);
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
    
    childCount(0, treeView.root);
    var newHeight = d3.max(levelWidth) * VERTICAL_TREE_SPACING; // 25 pixels per line  
    treeView.tree = treeView.tree.size([newHeight, treeView.viewerWidth]);

    // Compute the new tree layout.
    var nodes = treeView.tree.nodes(treeView.root).reverse();
    var links = treeView.tree.links(nodes);

    // Set widths between levels based on maxLabelLength.
    nodes.forEach(function(d) {
        //d.y = (d.depth * (treeView.maxLabelLength * 10)); //maxLabelLength * 10px
        // alternatively to keep a fixed scale one can set a fixed depth per level
        // Normalize for fixed-depth by commenting out below line
        d.y = (d.depth * 200); //200px per level.
    });

    // Update the nodes…
    node = treeView.svgGroup.selectAll("g.node").data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
      .call(dragListener)
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on('click', treeView.click);

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
      .on("mouseover", function(node) { treeView.overCircle(node); })
      .on("mouseout", function(node) { treeView.outCircle(node); });

    // Update the text to reflect whether node has children or not.
    node.select('text')
        .attr("x", function(d) { return project.hasChildren(d) ? -10 : 10; })
        .attr("text-anchor", function(d) { return project.hasChildren(d) ? "end" : "start"; })
        .text(function(d) { return d.name; });

    // Change the circle fill depending on whether it has children and is collapsed
    node.select("circle.nodeCircle")
      .attr("r", function(d) { return treeView.computeNodeSize(d); })
      .style("fill", function(d) { return project.isNodeCollapsed(d) ? "lightsteelblue" : "#fff"; });

    // Transition nodes to their new position.
    var nodeUpdate = node.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    // Fade the text in
    nodeUpdate.select("text").style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit()
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .remove();

    nodeExit.select("circle").attr("r", 0);
    nodeExit.select("text").style("fill-opacity", 0);

    // Update the links…
    var link = treeView.svgGroup.selectAll("path.link").data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
            var o = { x: source.x0, y: source.y0 };
            return treeView.diagonal({ source: o, target: o });
        });

    // Transition links to their new position.
    link.attr("d", treeView.diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit()
        .attr("d", function(d) {
            var o = { x: source.x, y: source.y };
            return treeView.diagonal({ source: o, target: o });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) { d.x0 = d.x; d.y0 = d.y; });
  },  
  dragstart: function(d)
  {
    if (d == treeView.root) { return; }
    treeView.dragStarted = true;
    nodes = treeView.tree.nodes(d);
    d3.event.sourceEvent.stopPropagation();
    // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');      
  },
  dragend: function(d)
  {
    if (d == treeView.root) { return; }
    domNode = this;
    
    if (treeView.selectedNode) 
    {
      // now remove the element from the parent, and insert it into the new elements children
      project.removeNode(treeView.draggingNode);
      
      if(!treeView.selectedNode.children) { treeView.selectedNode.children = []; }
      treeView.selectedNode.children.push(treeView.draggingNode);
      
      project.expandNode(treeView.selectedNode);  // Make sure that the node being added to is expanded so user can see added node is correctly moved    
    } 
  
    treeView.selectedNode = null;
    d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
    d3.select(domNode).attr('class', 'node');
    
    d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');   // now restore the mouseover event or we won't be able to drag a 2nd time
    treeView.updateTempConnector();
    
    if (treeView.draggingNode !== null) 
    {
      treeView.update(treeView.root);
      //treeView.centerNode(treeView.draggingNode);
      treeView.draggingNode = null;
    }      
  },
  // Function to update the temporary connector indicating dragging affiliation
  updateTempConnector: function() 
  {
    var data = [];
    if (treeView.draggingNode !== null && treeView.selectedNode !== null)   // have to flip the source coordinates since we did this for the existing connectors on the original tree
    {
      data = [{ source: { x: treeView.selectedNode.y0, y: treeView.selectedNode.x0 }, target: { x: treeView.draggingNode.y0, y: treeView.draggingNode.x0 } }];
    }
    
    var link = treeView.svgGroup.selectAll(".templink").data(data);
    link.enter().append("path").attr("class", "templink").attr("d", d3.svg.diagonal()).attr('pointer-events', 'none');
    link.attr("d", d3.svg.diagonal());
    link.exit().remove();
  },
  overCircle: function(d) 
  {
    treeView.selectedNode = d;
    treeView.updateTempConnector();
  },
  outCircle: function(d) 
  {
    treeView.selectedNode = null;
    treeView.updateTempConnector();
  },
  centerNode: function(source)     // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
  {
    scale = treeView.zoomListener.scale();
    x = -source.y0;
    y = -source.x0;
    x = x * scale + treeView.viewerWidth / 4;
    y = y * scale + treeView.viewerHeight / 2;
    d3.select('g').attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
    treeView.zoomListener.scale(scale);
    treeView.zoomListener.translate([x, y]);
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