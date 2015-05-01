"use strict";

var redips = {};

redips.init = function () {

  var rd = REDIPS.drag;   // reference to the REDIPS.drag library

  rd.init();

  //rd.clone.keyDiv = rd.clone.keyRow = true;   // enable clone element and clone row with shift key

  rd.event.rowDropped = function (newParentRow)
  {
    var movedID       = parseInt(rd.objOld.id.replace('rowid', ''));
    var movedRow      = document.getElementById(rd.objOld.id);
    var newParentID   = parseInt(newParentRow.id.replace('rowid', ''));
    var oldParentID   = getParentID(movedRow);

    moveAssembly(movedID, newParentID, oldParentID, newParentRow);  //move the node in the data, including all descendant nodes

    refreshDataModelDisplay();                                      //TODO: temp for displaying the model on the page for debugging purposes

    //show the expand button for the new parent, in case it was previously childless
    document.getElementById('expandID' + newParentID).classList.remove('hide-expand');
    document.getElementById('expandID' + newParentID).classList.add('show-expand');
  };

  rd.event.rowDroppedSource = function ()         // row was dropped to the source - event handler, mini table (cloned row) will be deleted and source row should return to original state
  {
    rd.rowOpacity(rd.objOld, 100);                // make source row completely visible (no opacity)
  };

  rd.event.rowChanged = function ()
  {
    //var pos = rd.getPosition();                   // get target and source position (method returns positions as array)
    //console.log('Changed: ' + pos[0]);          // display current table and current row
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
