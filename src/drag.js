"use strict";

var redips = {};

redips.init = function () 
{
  var rd = REDIPS.drag;   // reference to the REDIPS.drag library

  rd.init();

  //rd.clone.keyDiv = rd.clone.keyRow = true;   // enable clone element and clone row with shift key

  rd.event.rowDropped = function (newParentRow)
  {
    var movedID       = parseInt(rd.objOld.id.replace('rowid', ''));
    var newParentID   = parseInt(newParentRow.id.replace('rowid', ''));
    var oldParentID   = findParentInTree(movedID).id;

    moveAssembly(movedID, newParentID, oldParentID);             //move the node in the data, including all descendant nodes
  };

  rd.event.rowDroppedSource = function ()         // row was dropped to the source - event handler, mini table (cloned row) will be deleted and source row should return to original state
  {
    rd.rowOpacity(rd.objOld, 100);                // make source row completely visible (no opacity)
  };

  rd.event.rowMoved = function ()
  {
    rd.rowOpacity(rd.obj, 85);                    // set opacity for moved row, rd.obj is reference of cloned row (mini table)
    rd.rowOpacity(rd.objOld, 20, 'White');        // set opacity for source row and change source row background color, obj.objOld is reference of source row
  };

  rd.event.rowClicked   = function () {};
  rd.event.rowNotMoved  = function () {};
  rd.event.rowCloned    = function () {};
  rd.event.rowNotCloned = function () {};
  rd.event.rowDeleted   = function () {};

  rd.event.rowUndeleted = function ()             // row is undeleted (return source row to original state)
  {
    rd.rowOpacity(rd.objOld, 100);
  };
};
