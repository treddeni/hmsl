/*
Copyright (c) 2008-2011, www.redips.net All rights reserved.
Code licensed under the BSD License: http://www.redips.net/license/
http://www.redips.net/javascript/drag-and-drop-table-content/
*/

"use strict";

var REDIPS = REDIPS || {};      //create REDIPS namespace (if is not already defined in another REDIPS package)

//REDIPS.drag is a JavaScript drag and drop library focused on dragging table content (DIV elements) and table rows.
REDIPS.drag = (function ()
{
    // methods
  var init,           // initialization
    enableDrag,         // method attaches / detaches onmousedown and onscroll event handlers for DIV elements
    enableDivs,
    handlerOnMouseDown,     // onmousedown handler
    handlerOnMouseUp,     // onmouseup handler
    handlerOnMouseMove,     // onmousemove handler for the document level
    elementDrop,        // drop element to the table cell
    resetStyles,        // reset object styles after element is dropped
    registerEvents,       // register event listeners for DIV element
    cellChanged,        // private method called from handlerOnMouseMove(), autoScrollX(), autoScrollY()
    handlerOnResize,      // onresize window event handler
    setTableRowColumn,      // function sets current table, row and cell
    setPosition,        // function sets color for the current table cell and remembers previous position and color
    setTdStyle,         // method sets background color and border styles for TD
    getTdStyle,         // method returns object containing background color and border styles for TD
    boxOffset,          // calculates object (box) offset (top, right, bottom, left)
    calculateCells,       // calculates table columns and row offsets (cells dimensions)
    getScrollPosition,      // returns scroll positions in array
    autoScrollX,        // horizontal auto scroll function
    autoScrollY,        // vertical auto scroll function
    copyProperties,       // method copies custom properties from source element to the cloned element.
    cloneLimit,         // clone limit (after cloning object, take care about climit1_X or climit2_X classnames)
    getStyle,         // method returns style value of requested object and style name
    findParent,         // method returns a reference of the required parent element
    rowOpacity,         // method sets opacity to table row (el, opacity, color)
    rowClone,         // clone table row - input parameter is DIV with class name "redips-row" -> DIV class="redips-drag redips-row"
    rowDrop,          // function drops (delete old & insert new) table row (input parameters are current table and row)
    normalize,          // private method returns normalized spaces from input string

    // private parameters
    objMargin = null,     // space from clicked point to the object bounds (top, right, bottom, left)

    // window width and height (parameters are set in onload and onresize event handler), just for a note: window and Window is reserved word in JS so I named variable "screen")
    screen = {width: 0, height: 0},

    // define scroll object with contained properties (this is private property)
    scrollData = {width : null, // scroll width of the window (it is usually greater then window)
        height : null,    // scroll height of the window (it is usually greater then window)
        container : [],   // scrollable container areas (contains autoscroll areas, reference to the container and scroll direction)
        obj : null},    // scroll object (needed in autoscroll for recursive calls)

    edge = {page: {x: 0, y: 0}, // autoscroll bound values for page and div as scrollable container
        div:  {x: 0, y: 0}, // closer to the edge, faster scrolling
        flag: {x: 0, y: 0}},// flags are needed to prevent multiple calls of autoScrollX and autoScrollY from onmousemove event handler

    bgStyleOld,         // (object) old td styles (background color and border styles)

    table,        // table offsets and row offsets (initialized in onload event)
    moved,            // (boolean) true if element is moved
    cloned,           // (boolean) true if element is cloned
    clonedId = [],        // needed for increment ID of cloned elements
    currentCell = [],     // current cell bounds (top, right, bottom, left) and "containTable" flag for nested tables
    dragContainer = null,   // drag container reference
    divBox = null,        // div drag box: top, right, bottom and left margin (decrease number calls of setTableRowColumn)
    pointer = {x: 0, y: 0},   // mouse pointer position (this properties are set in handlerOnMouseMove() - needed for autoscroll)
    threshold = {x: 0,      // initial x, y position of mouse pointer
          y: 0,
          value: 7,   // threshold distance value
          flag: false}, // threshold flag
    shiftKey = false,     // (boolean) true if shift key is pressed (set in handler_mousedown)
    cloneClass = false,     // (boolean) true if clicked element contains clone in class name (set in handler_mousedown)
    windowScrollPosition,   // (array) top and left window offset (set in calculateCells and used in boxOffset)

    // selected, previous and source row and cell (private parameters too)
    row = null,
    row_old = null,
    row_source = null,
    cell = null,
    cell_old = null,
    cell_source = null,

    // variables in the private scope revealed as public (see init() method)
    obj = false,        // (object) moved object
    objOld = false,       // (object) previously moved object (before clicked or cloned)
    hover = {colorTd: '#FFCFAE', colorTr: '#9BB3DA'},
    scroll = {enable : true,  // (boolean) enable/disable autoscroll function (default is true)
        bound : 25,     // (integer) bound width for autoscroll
        speed : 20},    // (integer) scroll speed in milliseconds
    style = {//borderEnabled : 'solid', // (string) border style for enabled elements
        borderDisabled : 'dotted',  // (string) border style for disabled elements
        opacityDisabled : '',   // (integer) set opacity for disabled elements
        rowEmptyColor : 'white'}, // (string) color of empty row
    td = {},            // (object) contains reference to source (set in onmousedown), current (set in onmousemove and autoscroll), previous (set in onmousemove and autoscroll) and target cell (set in onmouseup)
    clone = {keyDiv : false,    // (boolean) if true, elements could be cloned with pressed SHIFT key
        keyRow : false,     // (boolean) if true, rows could be cloned with pressed SHIFT key
        sendBack : false,   // (boolean) if true, then cloned element can be returned to its source
        drop : false},      // (boolean) if true, then cloned element will be always dropped to the table no matter if dropped outside of the table
    
    event =                                 // (object) event handlers
    {
      cloned : function () {},
      clonedDropped : function () {},
      clonedEnd1 : function () {},
      clonedEnd2 : function () {},
      dropped : function () {},
      droppedBefore : function () {},
      finish : function () {},
      notCloned : function () {},
      notMoved : function () {},
      rowChanged : function () {},
      rowClicked : function () {},
      rowCloned : function () {},
      rowDropped : function () {},
      rowDroppedBefore : function () {},
      rowDroppedSource : function () {},
      rowMoved : function () {},
      rowNotCloned : function () {},
      rowNotMoved : function () {}
    };


  /**
   * Drag container initialization. It should be called at least once and it's possible to call a method many times. Every page should have at least one drag container.
   * If REDIPS.drag.init() is called without input parameter, library will search for drag container with id="redips-drag".
   * Only tables inside drag container will be scanned. It is possible to have several drag containers totaly separated (elements from one container will not be visible to other drag containers).
   * "init" method calls enableDrag. If tables are generated dynamically then REDIPS.init() method should be called to set custom properties to tables (table initialization).
   * @param {String} [dc] Drag container Id (default is "redips-drag").
   * @example
   * // init drag container (with default id="redips-drag")
   * REDIPS.drag.init();
   *
   * // init drag container with id="my-drag1"
   * REDIPS.drag.init('my-drag1');
   */
  init = function ()
  {
    dragContainer = document.getElementById('redips-drag');           // set reference to the drag container

    windowScrollPosition = getScrollPosition();                       // set initial window scroll position

    // append DIV id="redips_clone" if DIV doesn't exist (needed for cloning DIV elements)
    // if automatic creation isn't precise enough, user can manually create and place element with id="redips_clone" to prevent window expanding (then this code will be skipped)
    if (!document.getElementById('redips_clone'))
    {
      var redipsClone = document.createElement('div');
      redipsClone.id = 'redips_clone';
      redipsClone.style.width = redipsClone.style.height = '1px';
      dragContainer.appendChild(redipsClone);
    }

    enableDrag('init', '.redips-drag');                               // attach onmousedown event handler to the DIV elements, attach onscroll='calculateCells' for DIV elements with 'scroll' in class name (prepare scrollable container areas)
    table = document.getElementById('treeTable');
    table.redips = {};

    handlerOnResize();                                                // set initial window width/height, scroll width/height and define onresize event handler, onresize event handler calls calculate columns
    REDIPS.event.add(window, 'resize', handlerOnResize);
    REDIPS.event.add(window, 'scroll', calculateCells);               // attach onscroll event to the window (needed for recalculating table cells positions)
  };


  // onmousedown event handler.  This event handler is attached to every DIV element in drag container (please see "enableDrag").
  handlerOnMouseDown = function (e)
  {
    var evt = e || window.event;          // define event (cross browser)
    var offset;                           // object offset
    var position;                         // position of table or container box of table (if has position:fixed then exclude scroll offset)
    var X, Y;                             // X and Y position of mouse pointer

    evt.cancelBubble = true;              // stop event propagation (only first clicked element will register onmousedown event), needed in case of placing table inside of <div class="redips-drag"> (after element was dropped to this table it couldn't be moved out any more - table and element moved together because table captures mousedown event also in bubbling proces)
    if (evt.stopPropagation)
    {
      evt.stopPropagation();
    }

    shiftKey = evt.shiftKey;              // set true or false if shift key is pressed

    if (window.getSelection)                                            // remove text selection (Chrome, FF, Opera, Safari)
    {
      window.getSelection().removeAllRanges();
    }
    else if (document.selection && document.selection.type === "Text")  // IE8
    {
      try { document.selection.empty(); } catch (error) { }             // ignore error to as a workaround for bug in IE8
    }

    X = pointer.x = evt.clientX;
    Y = pointer.y = evt.clientY;

    threshold.x = X;                                                    // set initial threshold position (needed for calculating distance)
    threshold.y = Y;
    threshold.flag = false;

    REDIPS.drag.objOld = objOld = obj || this;                          // remember previous object if defined or set to the clicked object
    REDIPS.drag.obj = obj = this;                                       // set reference to the clicked object

    cloneClass = obj.className.indexOf('redips-clone') > -1;            // set true or false if clicked element contains "redips-clone" class name (needed for clone element and clone table row)

    REDIPS.drag.obj = obj = rowClone(obj);                              // just return reference of the current row (do not clone)

    calculateCells();                                                 // if user has used a mouse event to increase the dimensions of the table - call calculateCells()

    row = cell = null;                                                  // reset row and cell indexes (needed in case of enable / disable tables)
    setTableRowColumn();                                                // set current table, row and cell and remember source position (old position is initially the same as source position)
    row_source = row_old = row;
    cell_source = cell_old = cell;

    REDIPS.drag.event.rowClicked(td.current);

    // if start position cannot be defined then user probably clicked on element that belongs to the disabled table (or something else happened that was not supposed to happen - every element should belong to the table) this code must go after execution of event handlers
    if (row === null || cell === null)
    {
      setTableRowColumn();                                  // rerun setTableRowColumn() again because some of tables might be enabled in handler events above
      row_source = row_old = row;
      cell_source = cell_old = cell;

      if (row === null || cell === null)  // no, clicked element is on the disabled table - sorry
      {
        return true;
      }
    }

    moved = cloned = false;                                             // reset "moved" flag (needed for clone object in handlerOnMouseMove) and "cloned" flag

    REDIPS.event.add(document, 'mousemove', handlerOnMouseMove);        // activate onmousemove event handler on document object
    REDIPS.event.add(document, 'mouseup', handlerOnMouseUp);            // activate onmouseup event handler on document object

    if (row !== null)                                                   // remember background color if is possible
    {
      bgStyleOld = getTdStyle(row);
    }

    position = getStyle(table, 'position');                             // set table CSS position (needed for exclusion "scroll offset" if table box has position fixed)

    if (position !== 'fixed')                                           // if table doesn't have style position:fixed then table container should be tested
    {
      position = getStyle(table.parentNode, 'position');
    }

    offset = boxOffset(obj, position);                                          // define object offset
    objMargin = [Y - offset[0], offset[1] - X, offset[2] - Y, X - offset[3]];   // calculate offset from the clicked point inside element to the top, right, bottom and left side of the element

    return false;                                                               // disable text selection for non IE browsers
  };


  /**
   * Methods returns reference to the table row or clones table row.
   * If called from handlerOnMouseDown:
   * <ul>
   * <li>input parameter is DIV class="redips-row"</li>
   * <li>method will return reference of the current row</li>
   * </ul>
   * If called from handlerOnMouseMove:
   * <ul>
   * <li>input parameter is TR (current row) - previously returned with this function</li>
   * <li>method will clone current row and return reference of the cloned row</li>
   * </ul>
   * @param {HTMLElement} el DIV class="redips-row" or TR (current row)
   * @return {HTMLElement} Returns reference of the current row or clone current row and return reference of the cloned row.
   */
  rowClone = function (el)
  {
    var tableMini;      // original table is cloned and all rows except picked row are deleted
    var rowObj;         // reference to the row object
    var div;            // reference to the <DIV class="redips-drag redips-row"> element

    if (el.nodeName === 'DIV')                            // 1) rowClone call in onmousedown will return reference of TR element (input parameter is HTMLElement <div class="redips-drag redips-row">)
    {
      div = el;                                           // remember reference to the <DIV class="redips-drag redips-row">
      el = findParent('TR', el);                          // find parent TR element
      if (el.redips === undefined) { el.redips = {}; }    // create a "property object" in which all custom properties will be saved (it is only one property for now)
      el.redips.div = div;                                // save reference to the DIV element as redips.div this will mostly be referenced as objOld.redips.div (because objOld in row dragging context is reference to the source row)
      return el;                                          // return reference to the TR element
    }
    else                                                  // 2) rowClone call in onmousemove will clone current row (el.nodeName === 'TR')
    {
      rowObj = el;                                                // remember source row

      tableMini = document.createElement('table');
      tableMini.innerHTML = '<tr id="' + rowObj.id + '" class="' + rowObj.classList + '">' + rowObj.innerHTML + '</tr>';
      //tableMini.innerHTML = getAssemblyMarkup(parseInt(rowObj.id.replace('rowid', '')));   //can be used to show the entire assembly when dragging, tends to slow things down and be cumbersome

      tableMini.redips = {};                                              // create a "property object" in which all custom properties will be saved
      tableMini.redips.sourceRow = rowObj;                                // save source row reference (needed for source row deletion in rowDrop method)

      copyProperties(rowObj, tableMini.rows[0]);                          // copy custom properties to all child DIV elements and set onmousedown/ondblclick event handlers
      document.getElementById('redips_clone').appendChild(tableMini);     // append cloned mini table to the DIV id="redips_clone"

      return tableMini;
    }
  };


  /**
   * Method drops table row to the target row and calls user event handlers. Source row is deleted and cloned row is inserted at the new position.
   * Method takes care about the last row in the table only if user drags element. In case of moving rows with moveObject(), control
   * and logic for last row is turned off. This method is called from handlerOnMouseUp()
   * @param {Integer} tableIdx Table index.
   * @param {Integer} rowIdx Row index.
   * @param {HTMLElement} [tableMini] Reference to the mini table (table that contains only one row). This is actually clone of source row.
   */
  rowDrop = function (rowIdx)
  {
    var drop;               // (boolean) if false then dropping row will be canceled
    var trMini;             // reference to the TR in mini table
    var deleteTableRow;     // delete row (private method)

    deleteTableRow = function (el)                                                              // delete table row - input paremeter is row reference (private method)
    {
      var tbl;

      if (el.redips === undefined || !el.redips.emptyRow)                                       // if row doesn't have custom "redips" property or is not marked as empty, then it can be deleted
      {
        tbl = findParent('TABLE', el);
        tbl.deleteRow(el.rowIndex);
      }
      else                                                                                      // else, row is marked as "empty" and it will be only colored (not deleted), content of table cells will be deleted and background color will be set to default color
      {
        rowOpacity(el, 'empty', REDIPS.drag.style.rowEmptyColor);
      }
    };

    var tableMini = obj;                                                                        // set reference to the currently dragged row - mini table

    if (rowIdx > table.rows.length - 1)                                                         // if row index is out of bounds, then set max row index (row will be appended to the table bottom)
    {
      rowIdx = table.rows.length - 1;
    }

    var tableRow = table.rows[rowIdx];

    trMini = tableMini.getElementsByTagName('tr')[0];                                           // set reference to the TR in mini table (mini table has only one row - first row)

    tableMini.parentNode.removeChild(tableMini);                                                // destroy mini table (node still exists in memory)

    drop = REDIPS.drag.event.rowDroppedBefore(table, tableMini.redips.sourceRow.rowIndex);      // call event.rowDroppedBefore() - this handler can return "false" value

    if (drop !== false)                                                                         // if handler returned false then row dropping will be canceled
    {
      if (rowIdx < table.rows.length)                                                           // if row is not dropped to the last row position
      {
        tableRow.parentNode.insertBefore(trMini, tableRow.nextSibling);
      }
      else                                                                                      // row is dropped to the last row position, it's possible to set target row index greater then number of rows - in this case row will be appended to the table end
      {
        tableRow.parentNode.appendChild(trMini);                                                // row should be appended
        tableRow = table.rows[0];                                                               // set reference to the upper row, after row is appended, upper row should be tested if contains "emptyRow" set to true, this could happen in case when row is moved to the table with only one empty row
      }

      if (!cloned)                                                                              // delete source row if row is not cloned
      {
        deleteTableRow(tableMini.redips.sourceRow);
      }

      delete trMini.redips.emptyRow;                                                            // delete emptyRow property from inserted/appended row because emptyRow will be set on next move, copyProperties() in rowClone() copied emptyRow property to the row in tableMini, otherwise row will be overwritten and that is not good
      REDIPS.drag.event.rowDropped(tableRow);         // call rowDropped event handler
    }
    else                                                                                        // event.rowDroppedBefore() returned "false" (it's up to user to return source row opacity to its original state)
    {
      // rowOpacity(objOld, 100);
    }
  };


  /**
   * onmouseup event handler.
   * handlerOnMouseUp is attached to the DIV element in a moment when DIV element is clicked (this happens in handlerOnMouseDown).
   * This event handler detaches onmousemove and onmouseup event handlers.
   * @param {Event} e Event information.
   */
  handlerOnMouseUp = function (e)
  {
    var evt = e || window.event;    // define event (FF & IE)
    var r_row;                      // needed for mode="row"
    var mt_tr;                      // needed for returning color to the table cell (mt_tr - "mini table" "table_row")
    var X, Y;                       // X and Y position of mouse pointer
    var i;                          // used in local loop
    var drop;                       // if false then dropped DIV element

    X = evt.clientX;
    Y = evt.clientY;

    edge.flag.x = edge.flag.y = 0;                                              // turn off autoscroll "current cell" handling (if user mouseup in the middle of autoscrolling)

    REDIPS.event.remove(document, 'mousemove', handlerOnMouseMove);
    REDIPS.event.remove(document, 'mouseup', handlerOnMouseUp);

    dragContainer.onselectstart = null;                                         // detach dragContainer.onselectstart handler to enable select for IE7/IE8 browser

    resetStyles(obj);                                                           // reset object styles

    scrollData.width  = document.documentElement.scrollWidth;
    scrollData.height = document.documentElement.scrollHeight;

    edge.flag.x = edge.flag.y = 0;                                              // reset autoscroll flags

    if (row === null || cell === null)                                          // if DIV element was clicked and left button was released, but element is placed inside unmovable table cell
    {
      REDIPS.drag.event.notMoved();
    }
    else
    {
      REDIPS.drag.td.target = td.target = table.rows[row].cells[cell];

      setTdStyle(row, bgStyleOld);                                              // set background color for destination row

      r_row = row;

      if (!moved)                                                               // row was clicked and mouse button was released right away (row was not moved)
      {
        REDIPS.drag.event.rowNotMoved();
      }
      else                                                                      // row was moved
      {
        if (row_source === r_row)                                               // and dropped to the source row
        {
          mt_tr = obj.getElementsByTagName('tr')[0];                            // reference to the TR in mini table (mini table has only one row)

          objOld.style.backgroundColor = mt_tr.style.backgroundColor;           // return color to the source row from the row of cloned mini table, color of the source row can be changed in event.rowMoved() (when user wants to mark source row)

          for (i = 0; i < mt_tr.cells.length; i++)                              // return color to the each table cell
          {
            objOld.cells[i].style.backgroundColor = mt_tr.cells[i].style.backgroundColor;
          }

          obj.parentNode.removeChild(obj);                                      // remove cloned mini table
          delete objOld.redips.emptyRow;                                        // delete emptyRow property from source row because emptyRow will be set on next move, otherwise row would be overwritten and that's no good

          if (cloned)                                                           // if row was cloned and dropped to the source location then call rowNotCloned event handler
          {
            REDIPS.drag.event.rowNotCloned();
          }
          else                                                                  // call event.rowDroppedSource() event handler
          {
            REDIPS.drag.event.rowDroppedSource(td.target);
          }
        }
        else                                                                    // and dropped to the new row
        {
          rowDrop(r_row);
        }
      }
      
      if (!cloned && !threshold.flag)                                           // clicked element was not moved - DIV element didn't cross threshold value, just call event.notMoved event handler
      {
        REDIPS.drag.event.notMoved();
      }
      else if (cloned && row_source === row && cell_source === cell)            // delete cloned element if dropped on the start position
      {
        obj.parentNode.removeChild(obj);
        clonedId[objOld.id] -= 1;
        REDIPS.drag.event.notCloned();
      }
      else if (cloned && REDIPS.drag.clone.drop === false && (X < table.redips.offset[3] || X > table.redips.offset[1] || Y < table.redips.offset[0] || Y > table.redips.offset[2]))    // delete cloned element if dropped outside current table and clone.drop is set to false
      {
        obj.parentNode.removeChild(obj);
        clonedId[objOld.id] -= 1;
        REDIPS.drag.event.notCloned();
      }
      else                                                                      // else call event.droppedBefore(), append object to the cell and call event.dropped()
      {
        drop = REDIPS.drag.event.droppedBefore(td.target);                      // call event.droppedBefore event handler
        elementDrop(drop);                                                      // drop element to the table cell (or delete cloned element if drop="false")
      }

      calculateCells();                                                         // recalculate table cells and scrollers because cell content could change row dimensions
      REDIPS.drag.event.finish();                                               // call last event handler
    }

    row_old = cell_old = null;                                                  // reset old positions
  };


  /**
   * Element drop. This method is called from handlerOnMouseUp and appends element to the target table cell.
   * If input parameter "drop" is set to "false" (this is actually return value from event.droppedBefore) then DIV elements will not be dropped (only cloned element will be deleted).
   * @param {Boolean} [drop] If not "false" then DIV element will be dropped to the cell.
   */
  elementDrop = function (drop) 
  {
    var cloneSourceDiv = null;                                        // clone source element (needed if clone.sendBack is set to true)
    var div;                                                          // nodeList of DIV elements in target cell (needed if clone.sendBack is set to true)
    
    if (drop !== false)                                               // if input parameter is not "false" then DIV element will be dropped to the table cell
    {
      if (clone.sendBack === true)                                    // if clone.sendBack is set to true then try to find source element in target cell
      {
        div = td.target.getElementsByTagName('DIV');                  // search all DIV elements in target cell
        
        for (var i = 0; i < div.length; i++)                          // loop through all DIV elements in target cell
        {
          // if DIV in target cell is source of dropped DIV element (dropped DIV id and id of DIV in target cell has the same name beginning like "d12c2" and "d12")
          // of course, the case where source DIV element is dropped to the cell with cloned DIV element should be excluded (possible in climit1 type)
          if (obj !== div[i] && obj.id.indexOf(div[i].id) === 0) 
          {
            cloneSourceDiv = div[i];                                  // set reference to cloneSourceDiv element
            break;
          }
        }
        
        if (cloneSourceDiv)                                           // if clone source DIV element exists in target cell
        {
          cloneLimit(cloneSourceDiv, 1);                              // update climit class (increment by 1)
          obj.parentNode.removeChild(obj);                            // delete dropped DIV element
          return;                                                     // return from the method (everything is done)
        }
      }

      td.target.appendChild(obj);
      
      registerEvents(obj);                                                            // register event listeners (FIX for Safari Mobile)
      REDIPS.drag.event.dropped(td.target);                                           // call event.dropped because cloneLimit could call event.clonedEnd1 or event.clonedEnd2
      
      if (cloned)                                                                     // if object is cloned
      {
        REDIPS.drag.event.clonedDropped(td.target);                                   // call clonedDropped event handler
        cloneLimit(objOld, -1);                                                       // update climit1_X or climit2_X classname
      }
    }
    else if (cloned && obj.parentNode)                                                // cloned element should be deleted (if not already deleted)
    {
      obj.parentNode.removeChild(obj);
    }
  };

  /**
   * Register event listeners for DIV element.
   * DIV elements should have only onmousedown (using traditional event registration model).
   * I had a problem with advanced event registration model.
   * In case of using advanced model, selected text and dragged DIV element were in collision.
   * It looks like selected text was able to drag instead of DIV element.
   * @param {HTMLElement} div Register event listeners for onmousedown, ontouchstart and ondblclick to the DIV element.
   * @param {Boolean} [flag] If set to false then event listeners will be deleted.
   */
  registerEvents = function (div, flag)
  {
    if (flag === false)                         // if flag is se to false, then remove event listeners on DIV element
    {
      div.onmousedown = null;
    }
    else
    {
      div.onmousedown = handlerOnMouseDown;
    }
  };


  resetStyles = function (el)         // After element is dropped, styles need to be reset.
  {
    el.style.top  = '';
    el.style.left = '';
    el.style.position = '';
    el.style.zIndex = '';
  };

  /**
   * onmousemove event handler.
   * handlerOnMouseMove is attached to document level in a moment when DIV element is clicked (this happens in handlerOnMouseDown).
   * handlerOnMouseUp detaches onmousemove and onmouseup event handlers.
   * @param {Event} e Event information.
   */
  handlerOnMouseMove = function (e)
  {
    var evt = e || window.event;            // define event (FF & IE)
    var bound = REDIPS.drag.scroll.bound;   // read "bound" public property (maybe code will be faster, and it will be easier to reference in onmousemove handler)
    var sca;                                // current scrollable container area
    var X, Y;                               // X and Y position of mouse pointer
    var deltaX, deltaY;                     // delta from initial position
    var i;                                  // needed for local loop
    var scrollPosition;                     // scroll position variable needed for autoscroll call

    X = pointer.x = evt.clientX;
    Y = pointer.y = evt.clientY;

    deltaX = Math.abs(threshold.x - X);         // calculate delta from initial position
    deltaY = Math.abs(threshold.y - Y);

    if (!moved)                                 // if "moved" flag isn't set (this is the first moment when object is moved)
    {
      //remember reference of the source row, clone source row and set obj as reference to the current row settings of "cloned" flag should go before calling rowClone() because "cloned" is needed in rowClone() to cut out "redips-clone" class name from <div class="redips-drag redips-row redips-clone"> elements
      if (cloneClass || (REDIPS.drag.clone.keyRow === true && shiftKey))
      {
        cloned = true;
      }

      REDIPS.drag.objOld = objOld = obj;        // remember reference to the source row
      REDIPS.drag.obj = obj = rowClone(obj);    // clone source row and set as obj
      obj.style.zIndex = 999;                   // set high z-index for cloned mini table

      obj.style.position = 'fixed';             // set style to fixed to allow dragging DIV object
      calculateCells();                       // call calculate cells for case where moved element changed cell dimension, place 3 elements in the same cell in example08 and try to move one out of the table cell
      setTableRowColumn();                      // set current table, row and column

      if (cloned)                               // call event handler (row cloned/moved)
      {
        REDIPS.drag.event.rowCloned();
      }
      else
      {
        REDIPS.drag.event.rowMoved();
      }

      setPosition();                          // set color for the current table cell and remember previous position and color, setPosition() must go after calling event.moved() and event.rowMoved() if user wants to change color of source row

      if (X > screen.width - objMargin[1])    // if element is far away on the right side of page, set possible right position (screen.width - object width), objMargin[1] + objMargin[3] = object width
      {
        obj.style.left = (screen.width - (objMargin[1] +  objMargin[3])) + 'px';
      }

      if (Y > screen.height - objMargin[2])   // if element is below page bottom, set possible lower position (screen.width - object height), objMargin[0] + objMargin[2] = object height
      {
        obj.style.top  = (screen.height - (objMargin[0] + objMargin[2])) + 'px';
      }
    }

    moved = true;                             // set moved_flag

    // set left and top styles for the moved element if element is inside window, this conditions will stop element on window bounds
    if (X > objMargin[3] && X < screen.width - objMargin[1])
    {
      obj.style.left = (X - objMargin[3]) + 'px';
    }
    if (Y > objMargin[0] && Y < screen.height - objMargin[2])
    {
      obj.style.top  = (Y - objMargin[0]) + 'px';
    }

    // set current table, row and cell (this condition should spare CPU): 1) if mouse pointer is inside DIV id="redips-drag" 2) and autoscroll is not working 3) and current table contains nested table or cursor is outside of current cell
    if (X < divBox[1] && X > divBox[3] && Y < divBox[2] && Y > divBox[0] &&
      edge.flag.x === 0 && edge.flag.y === 0 &&
      (currentCell.containTable || (X < currentCell[3] || X > currentCell[1] || Y < currentCell[0] || Y > currentCell[2])))
    {
      setTableRowColumn();                    // set current table row and table cell
      cellChanged();                          // if new location is inside table and new location is different then old location
    }

    // if autoScroll option is enabled (by default it is but it can be turned off)
    if (REDIPS.drag.scroll.enable)
    {
      edge.page.x = bound - (screen.width / 2  > X ? X - objMargin[3] : screen.width - X - objMargin[1]);       // calculate horizontally crossed page bound

      if (edge.page.x > 0)                                                                                      // if element crosses page bound then set scroll direction and call auto scroll
      {
        if (edge.page.x > bound)                                                                                // in case when object is only half visible
        {
          edge.page.x = bound;
        }

        // get horizontal window scroll position
        //scrollPosition = window.pageXOffset || document.documentElement.scrollLeft;
        scrollPosition = 0;   //disabling because we shouldn't have the user scrolling horizontally and this improves performance for large trees

        edge.page.x *= X < screen.width / 2 ? -1 : 1;                                                           // set scroll direction

        // if page bound is crossed and this two cases aren't met: 1) scrollbar is on the left and user wants to scroll left 2) scrollbar is on the right and user wants to scroll right
        if (!((edge.page.x < 0 && scrollPosition <= 0) || (edge.page.x > 0 && scrollPosition >= (scrollData.width - screen.width))))
        {
          if (edge.flag.x++ === 0)                                    // fire autoscroll function (this should happen only once)
          {
            REDIPS.event.remove(window, 'scroll', calculateCells);    // reset onscroll event
            autoScrollX(window);                                      // call window autoscroll
          }
        }
      }
      else
      {
        edge.page.x = 0;
      }

      edge.page.y = bound - (screen.height / 2 > Y ? Y - objMargin[0] : screen.height - Y - objMargin[2]);      // calculate vertically crossed page bound
      
      if (edge.page.y > 0)                                                                                      // if element crosses page bound
      {
        if (edge.page.y > bound)                                                                                // set max crossed bound
        {
          edge.page.y = bound;
        }
        
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;                              // get vertical window scroll position
        edge.page.y *= Y < screen.height / 2 ? -1 : 1;                                                          // set scroll direction
        
        if (!((edge.page.y < 0 && scrollPosition <= 0) || (edge.page.y > 0 && scrollPosition >= (scrollData.height - screen.height))))    // if page bound is crossed and this two cases aren't met: 1) scrollbar is on the page top and user wants to scroll up 2) scrollbar is on the page bottom and user wants to scroll down
        {
          if (edge.flag.y++ === 0)                                                                              // fire autoscroll (this should happen only once)
          {
            REDIPS.event.remove(window, 'scroll', calculateCells);                                              // reset onscroll event
            autoScrollY(window);                                                                                // call window autoscroll
          }
        }
      }
      else 
      {
        edge.page.y = 0;
      }
      
      for (i = 0; i < scrollData.container.length; i++)                                                         // test if dragged object is in scrollable container, this code will be executed only if scrollable container (DIV with overflow other than 'visible) exists on page
      {
        sca = scrollData.container[i];                                                                          // set current scrollable container area
        
        if (sca.autoscroll && X < sca.offset[1] && X > sca.offset[3] && Y < sca.offset[2] && Y > sca.offset[0]) // if dragged object is inside scrollable container and scrollable container has enabled autoscroll option
        {
          edge.div.x = bound - (sca.midstX  > X ? X - objMargin[3] - sca.offset[3] : sca.offset[1] - X - objMargin[1]);   // calculate horizontally crossed page bound
          
          if (edge.div.x > 0)                                                                                   // if element crosses page bound then set scroll direction and call auto scroll
          {
            if (edge.div.x > bound)                                                                             // in case when object is only half visible (page is scrolled on that object)
            {
              edge.div.x = bound;
            }
            
            edge.div.x *= X < sca.midstX ? -1 : 1;                                                              // set scroll direction: negative - left, positive - right
            
            if (edge.flag.x++ === 0)                                                                            // remove onscroll event handler and call autoScrollY function only once
            {
              REDIPS.event.remove(sca.div, 'scroll', calculateCells);
              autoScrollX(sca.div);
            }
          }
          else 
          {
            edge.div.x = 0;
          }
          
          edge.div.y = bound - (sca.midstY  > Y ? Y - objMargin[0] - sca.offset[0] : sca.offset[2] - Y - objMargin[2]);   // calculate vertically crossed page bound
          
          if (edge.div.y > 0)                                                                                   // if element crosses page bound then set scroll direction and call auto scroll
          {
            if (edge.div.y > bound)                                                                             // in case when object is only half visible (page is scrolled on that object)
            {
              edge.div.y = bound;
            }
            
            edge.div.y *= Y < sca.midstY ? -1 : 1;                                                              // set scroll direction: negative - up, positive - down
            
            if (edge.flag.y++ === 0)                                                                            // remove onscroll event handler and call autoScrollY function only once
            {
              REDIPS.event.remove(sca.div, 'scroll', calculateCells);
              autoScrollY(sca.div);
            }
          }
          else 
          {
            edge.div.y = 0;
          }
          
          break;                            // break the loop (checking for other scrollable containers is not needed)
        }
        else                                // otherwise (I mean dragged object isn't inside any of scrollable container) reset crossed edge
        {
          edge.div.x = edge.div.y = 0;
        }
      }
    }
    
    // stop all propagation of the event in the bubbling phase.  (save system resources by turning off event bubbling / propagation)
    evt.cancelBubble = true;
    if (evt.stopPropagation) 
    {
      evt.stopPropagation();
    }
  };

  // This method is called (from handlerOnMouseMove, autoScrollX, autoScrollY) in case of change of current table cell.
  // When change happens, then return background color to old position, highlight new position, calculate cell boundaries and call event.changed.
  cellChanged = function () 
  {
    if ((row !== row_old || cell !== cell_old)) 
    {
      if (row_old !== null && cell_old !== null)                                          // set cell background color to the previous cell
      {
        setTdStyle(row_old, bgStyleOld);                                                  // set background color for previous table row
        REDIPS.drag.td.previous = td.previous = table.rows[row_old].cells[cell_old];      // define previous table cell
        REDIPS.drag.td.current = td.current = table.rows[row].cells[cell];                // define current table cell

        if (row !== row_old)                                                              // for table or row should change (changing cell in the same row will be ignored)
        {
          REDIPS.drag.event.rowChanged(td.current);
        }
      }

      setPosition();
    }
  };

  // In initialization phase, this method is attached as onresize event handler for window.  It also calculates window width and window height. Result is saved in variables screen.width and screen.height visible inside REDIPS.drag private scope.
  handlerOnResize = function () 
  {
    screen.width  = window.innerWidth;
    screen.height = window.innerHeight;
    
    scrollData.width  = document.documentElement.scrollWidth;     // set scroll size (onresize, onload and onmouseup event)
    scrollData.height = document.documentElement.scrollHeight;
    
    calculateCells();                                             // calculate colums and rows offset (cells dimensions)
  };

  // Method sets current row and cell.  Current cell position is based on position of mouse pointer and calculated grid of tables inside drag container.
  // Rows with display='none' are not contained in row_offset array so row bounds calculation should take care about sparse arrays (since version 4.3.6).
  setTableRowColumn = function ()
  {
    var previous;       // set previous position (current cell will not be highlighted)
    var row_offset;     // row offsets for the selected table (row box bounds)
    var row_found;      // remember found row
    var tos = [];       // table offset
    var X, Y;           // X and Y position of mouse pointer
    var i;              // used in local loop

    previous = function ()    // set previous position (current cell will not be highlighted)
    {
      if (row_old !== null && cell_old !== null)
      {
        row = row_old;
        cell = cell_old;
      }
    };

    X = pointer.x;                                              // prepare X and Y position of mouse pointer
    Y = pointer.y;

    tos[0] = table.redips.offset[0]; // top
    tos[1] = table.redips.offset[1]; // right
    tos[2] = table.redips.offset[2]; // bottom
    tos[3] = table.redips.offset[3]; // left

    // if table belongs to the scrollable container then set scrollable container offset if needed in case when some parts of table are hidden (for example with "overflow: auto")
    if (table.sca !== undefined)
    {
      tos[0] = tos[0] > table.sca.offset[0] ? tos[0] : table.sca.offset[0]; // top
      tos[1] = tos[1] < table.sca.offset[1] ? tos[1] : table.sca.offset[1]; // right
      tos[2] = tos[2] < table.sca.offset[2] ? tos[2] : table.sca.offset[2]; // bottom
      tos[3] = tos[3] > table.sca.offset[3] ? tos[3] : table.sca.offset[3]; // left
    }

    if (tos[3] < X && X < tos[1] && tos[0] < Y && Y < tos[2])                 // mouse pointer is inside table (or scrollable container)
    {
      row_offset = table.redips.row_offset;                                   // define row offsets for the selected table (row box bounds)

      for (row = 0; row < row_offset.length - 1; row++)                       // find the current row (loop skips hidden rows)
      {
        if (row_offset[row] === undefined)                                    // if row doesn't exist (in case of hidden row) - skip it
        {
          continue;
        }

        currentCell[0] = row_offset[row][0];                                  // set top and bottom cell bounds

        if (row_offset[row + 1] !== undefined)                                // set bottom cell bound (if is possible) - hidden row doesn't exist
        {
          currentCell[2] = row_offset[row + 1][0];
        }
        else                                                                  // hidden row (like style.display === 'none')
        {
          for (i = row + 2; i < row_offset.length; i++)                       // search for next visible row
          {
            if (row_offset[i] !== undefined)                                  // visible row found
            {
              currentCell[2] = row_offset[i][0];
              break;
            }
          }
        }

        if (Y <= currentCell[2])                                              // top bound of the next row
        {
          break;
        }
      }

      row_found = row;                                                        // remember found row

      if (row === row_offset.length - 1)                                      // if loop exceeds, then set bounds for the last row (offset for the last row doesn't work in IE8, so use table bounds)
      {
        currentCell[0] = row_offset[row][0];
        currentCell[2] = table.redips.offset[2];
      }

      cell = 0;

      if (row < 0 || cell < 0)                                                                // if cell < 0 or row < 0 then use last possible location
      {
        previous();
      }
      else if (row !== row_found)                                                             // current cell found but if current row differ from previously found row (thanks too while loop with row--) then test if Y is inside current cell, (this should prevent case where TD border > 1px and upper colspaned row like in example15) logic will end in upper colspaned row while current row will not move - and that was wrong
      {

        currentCell[0] = row_offset[row][0];                                                  // recalculate top and bottom row offset (again)
        currentCell[2] = currentCell[0] + table.rows[row].cells[cell].offsetHeight;

        if (Y < currentCell[0] || Y > currentCell[2])                                         // if Y is outside of the current row, return previous location
        {
          previous();
        }
      }
    }
  };

  // Method sets background color for the current table cell and remembers previous position and background color.  It is called from handlerOnMouseMove and cellChanged.
  setPosition = function ()
  {
    if (row !== null && cell !== null)      // in case if ordinary element is placed inside 'deny' table cell
    {
      bgStyleOld = getTdStyle(row);         // remember background color before setting the new background color
      setTdStyle(row);                      // highlight current TD / TR (colors and styles are read from public property "hover"
      row_old = row;                        // remember current position (for row and cell)
      cell_old = cell;
    }
  };

  /**
   * Method sets table cell(s) background styles (background colors and border styles).
   * If tdStyle is undefined then current td/tr will be highlighted from public property hover.color_td, hover.color_tr ...
   * @param {Integer} ri Row index.
   * @param {Object} t Object contains background color and border styles ("t" is TD style object is prepared in getTdStyle method).
   */
  setTdStyle = function (ri, t) 
  {
    var tr, s;                                                                                    // reference to the table row and td.style

    tr = table.rows[ri];                                                                          // set reference to the current table row
    
    for (var i = 0; i < tr.cells.length; i++)                                                     // set colors to table cells (respectively) or first color to all cells (in case of settings hover to the row)
    {
      s = tr.cells[i].style;                                                                      // set reference to current TD style
      s.backgroundColor = (t === undefined) ? REDIPS.drag.hover.colorTr : t.color[i].toString();  // TR background color - tdStyle is undefined then highlight TD otherwise return previous background color
      
      if (REDIPS.drag.hover.borderTr !== undefined)                                               // TR border - if hover.borderTd is set then take care of border style
      {
        if (t === undefined)                                                                      // set border (highlight) - source row will not have any border
        {
          if (row < row_source)                                                                   // if row is moved above source row in current table
          {
            s.borderTop = REDIPS.drag.hover.borderTr;
          }
          else                                                                                    // if row is moved below source row in current table
          {
            s.borderBottom = REDIPS.drag.hover.borderTr;
          }
        }
        else                                                                                      // return previous state borderTop and borderBottom (exit from TD)
        {
          s.borderTopWidth = t.top[i][0];
          s.borderTopStyle = t.top[i][1];
          s.borderTopColor = t.top[i][2];
          s.borderBottomWidth = t.bottom[i][0];
          s.borderBottomStyle = t.bottom[i][1];
          s.borderBottomColor = t.bottom[i][2];
        }
      }
    }
  };


  // Method returns background and border styles as object for the input parameter row index (ri).  @return {Object} Object containing background color and border styles (for the row).
  getTdStyle = function (ri) 
  {
    var tr, c;                                                            // reference to the table row and td reference   
    var t = {color: [], top: [], right: [], bottom: [], left: []};        // define TD style object with background color and border styles: top, right, bottom and left
      
    var border = function (c, name)                                       // private method gets border styles: top, right, bottom, left
    {
      var width = 'border' + name + 'Width', style = 'border' + name + 'Style', color = 'border' + name + 'Color';
      return [getStyle(c, width), getStyle(c, style), getStyle(c, color)];
    };

    tr = table.rows[ri];                                                  // set reference to the current table row
    
    for (var i = 0; i < tr.cells.length; i++)                             // remember styles for each table cell
    {
      c = tr.cells[i];                                                    // set TD reference
      t.color[i] = c.style.backgroundColor;                               // remember background color
      
      if (REDIPS.drag.hover.borderTr !== undefined)                       // remember top and bottom TD border styles if hover.borderTr property is set
      {
        t.top[i] = border(c, 'Top');
        t.bottom[i] = border(c, 'Bottom');
      }
    }

    return t;
  };

  /**
   * Method returns array of element bounds (offset) top, right, bottom and left (needed for table grid calculation).
   * @param {HTMLElement} box HTMLElement for box metrics.
   * @param {String} [position] HTMLElement "position" style. Elements with style "fixed" will not have included page scroll offset.
   * @param {Boolean} [box_scroll] If set to "false" then element scroll offset will not be included in calculation (default is "true").
   * @return {Array} Box offset array: [ top, right, bottom, left ]
   * @example
   * // calculate box offset for the div id="redips-drag"
   * divbox = boxOffset(dragContainer);
   * @example
   * // include scroll position in offset
   * offset = boxOffset(rowObj, 'fixed');
   * @example
   * // get DIV offset with or without "page scroll" and excluded element scroll offset
   * cb = boxOffset(div, position, false);
   */
  boxOffset = function (box, position, box_scroll)
  {
    var oLeft = 0;                                                // define offset left (take care of horizontal scroll position)
    var oTop  = 0;                                                // define offset top (take care od vertical scroll position)
    var boxOld = box;                                             // remember box object

    if (position !== 'fixed')                                     // if table_position is undefined, '' or 'page_scroll' then include page scroll offset, windowScrollPosition is set in calculateCells(), calculateCells() is called on window scroll event
    {
      oLeft = 0 - windowScrollPosition[0];                        // define offset left (take care of horizontal scroll position)
      oTop  = 0 - windowScrollPosition[1];                        // define offset top (take care od vertical scroll position)
    }

    if (box_scroll === undefined || box_scroll === true)          // climb up through DOM hierarchy (getScrollPosition() takes care about page scroll positions)
    {
      do
      {
        oLeft += box.offsetLeft - box.scrollLeft;
        oTop += box.offsetTop - box.scrollTop;
        box = box.offsetParent;
      }
      while (box && box.nodeName !== 'BODY');
    }
    else                                                          // climb up to the BODY element but without scroll positions
    {
      do
      {
        oLeft += box.offsetLeft;
        oTop += box.offsetTop;
        box = box.offsetParent;
      }
      while (box && box.nodeName !== 'BODY');
    }

    //        top                 right,                     bottom           left
    return [ oTop, oLeft + boxOld.offsetWidth, oTop + boxOld.offsetHeight, oLeft ];
  };

  // Method is called in every possible case when position or size of table grid could change like: page scrolling, element dropped to the table cell, element start dragging and so on.
  // It calculates table row offsets (table grid) and saves to the "tables" array.
  // Table rows with style display='none' are skipped.
  calculateCells = function () 
  {
    var row_offset;                                                     // row box
    var position;                                                       // if element (table or table container) has position:fixed then "page scroll" offset should not be added
    var cb;                                                             // box offset for container box (cb)

    windowScrollPosition = getScrollPosition();                         // calculateCells() is called on window scroll event so here is perfect place to refresh window scroll position
    row_offset = [];                                                    // initialize row_offset array
    
    position = getStyle(table, 'position');                             // set table style position (to exclude "page scroll" offset from calculation if needed)
    
    if (position !== 'fixed')                                           // if table doesn't have style position:fixed then table container should be tested
    {
      position = getStyle(table.parentNode, 'position');
    }
    
    for (var i = table.rows.length - 1; i >= 0; i--)                    // backward loop has better perfomance
    {
      if (table.rows[i].style.display !== 'none')                       // add rows to the offset array if row is not hidden
      {
        row_offset[i] = boxOffset(table.rows[i], position);
      }
    }
    
    table.redips.offset = boxOffset(table, position);                   // save table informations (table offset and row offsets)
    table.redips.row_offset = row_offset;

    divBox = boxOffset(dragContainer);                                  // calculate box offset for the div id=redips-drag
    
    for (var i = 0; i < scrollData.container.length; i++)                   // update scrollable container areas if needed
    {
      position = getStyle(scrollData.container[i].div, 'position');     // set container box style position (to exclude page scroll offset from calculation if needed)
      cb = boxOffset(scrollData.container[i].div, position, false);     // get DIV container offset with or without "page scroll" and excluded scroll position of the content
      
      scrollData.container[i].offset = cb;                              // prepare scrollable container areas
      scrollData.container[i].midstX = (cb[1] + cb[3]) / 2;
      scrollData.container[i].midstY = (cb[0] + cb[2]) / 2;
    }
  };

  // Method returns current page scroll values as array (X and Y axis).
  getScrollPosition = function () 
  {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    //var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollX = 0;

    return [ scrollX, scrollY ];
  };

  // Horizontal auto scroll method.  @param {HTMLElement} so Window or DIV element (so - scroll object).
  autoScrollX = function (so) 
  {
    var pos,      // left style position
      old,      // old window scroll position (needed for window scrolling)
      scrollPosition, // define current scroll position
      maxsp,      // maximum scroll position
      edgeCrossed,  // crossed edge for window and scrollable container
      X = pointer.x,  // define pointer X position
      Y = pointer.y;  // define pointer Y position
    // if mouseup then stop handling "current cell"
    if (edge.flag.x > 0) {
      // calculate cell (autoscroll is working)
      calculateCells();
      // set current table row and table cell
      setTableRowColumn();
      // set current table, row and cell if mouse pointer is inside DIV id="redips-drag"
      if (X < divBox[1] && X > divBox[3] && Y < divBox[2] && Y > divBox[0]) {
        cellChanged();
      }
    }
    // save scroll object to the global variable for the first call from handlerOnMouseMove
    // recursive calls will not enter this code and reference to the scrollData.obj will be preserved
    if (typeof(so) === 'object') {
      scrollData.obj = so;
    }
    // window autoscroll (define current, old and maximum scroll position)
    if (scrollData.obj === window) {
      scrollPosition = old = getScrollPosition()[0];
      maxsp = scrollData.width - screen.width;
      edgeCrossed = edge.page.x;
    }
    // scrollable container (define current and maximum scroll position)
    else {
      scrollPosition = scrollData.obj.scrollLeft;
      maxsp = scrollData.obj.scrollWidth - scrollData.obj.clientWidth;
      edgeCrossed = edge.div.x;
    }
    // if scrolling is possible
    if (edge.flag.x > 0 && ((edgeCrossed < 0 && scrollPosition > 0) || (edgeCrossed > 0 && scrollPosition < maxsp))) {
      // if object is window
      if (scrollData.obj === window) {
        // scroll window
        window.scrollBy(edgeCrossed, 0);
        // get new window scroll position (after scrolling)
        // because at page top or bottom edgeY can be bigger then the rest of scrolling area
        // it will be nice to know how much was window scrolled after scrollBy command
        scrollPosition = getScrollPosition()[0];
        // get current object top style
        pos = parseInt(obj.style.left, 10);
        if (isNaN(pos)) {
          pos = 0;
        }
      }
      // or scrollable container
      else {
        scrollData.obj.scrollLeft += edgeCrossed;
      }
      // recursive autoscroll call
      setTimeout(autoScrollX, REDIPS.drag.scroll.speed);
    }
    // autoscroll is ended: element is out of the page edge or maximum position is reached (left or right)
    else {
      // return onscroll event handler (to window or div element)
      REDIPS.event.add(scrollData.obj, 'scroll', calculateCells);
      // reset auto scroll flag X
      edge.flag.x = 0;
      // reset current cell position
      currentCell = [0, 0, 0, 0];
    }
  };

  // Vertical auto scroll method.  @param {HTMLElement} so Window or DIV element (so - scroll object).
  autoScrollY = function (so) 
  {
    var pos,      // top style position
      old,      // old window scroll position (needed for window scrolling)
      scrollPosition, // define current scroll position
      maxsp,      // maximum scroll position
      edgeCrossed,  // crossed edge for window and scrollable container
      X = pointer.x,  // define pointer X position
      Y = pointer.y;  // define pointer Y position
    
    if (edge.flag.y > 0)                                                      // if mouseup then stop handling "current cell"
    {
      calculateCells();                                                       // calculate cell (autoscroll is working)
      setTableRowColumn();                                                    // set current table row and table cell
      
      if (X < divBox[1] && X > divBox[3] && Y < divBox[2] && Y > divBox[0])   // set current table, row and cell if mouse pointer is inside DIV id="redips-drag"
      {
        cellChanged();
      }
    }
    
    // save scroll object to the global variable for the first call from handlerOnMouseMove, recursive calls will not enter this code and reference to the scrollData.obj will be preserved
    if (typeof(so) === 'object') 
    {
      scrollData.obj = so;
    }
    
    if (scrollData.obj === window)                                            // window autoscroll (define current, old and maximum scroll position)
    {
      scrollPosition = old = getScrollPosition()[1];
      maxsp = scrollData.height - screen.height;
      edgeCrossed = edge.page.y;
    }
    else                                                                      // scrollable container (define current and maximum scroll position)
    {
      scrollPosition = scrollData.obj.scrollTop;
      maxsp = scrollData.obj.scrollHeight - scrollData.obj.clientHeight;
      edgeCrossed = edge.div.y;
    }
    
    // if scrolling is possible
    if (edge.flag.y > 0 && ((edgeCrossed < 0 && scrollPosition > 0) || (edgeCrossed > 0 && scrollPosition < maxsp))) 
    {
      if (scrollData.obj === window)                                          // if object is window
      {
        window.scrollBy(0, edgeCrossed);                                      // scroll window
        scrollPosition = getScrollPosition()[1];                              // get new window scroll position (after scrolling), because at page top or bottom edgeY can be bigger then the rest of scrolling area, it will be nice to know how much was window scrolled after scrollBy command
        pos = parseInt(obj.style.top, 10);                                    // get current object top style
        
        if (isNaN(pos)) 
        {
          pos = 0;
        }
      }
      else                                                                    // or scrollable container
      {
        scrollData.obj.scrollTop += edgeCrossed;
      }
      
      setTimeout(autoScrollY, REDIPS.drag.scroll.speed);                      // recursive autoscroll call
    }
    else                                                                      // autoscroll is ended: element is out of the page edge or maximum position is reached (top or bottom)
    {
      REDIPS.event.add(scrollData.obj, 'scroll', calculateCells);             // return onscroll event handler (to window or div element)
      edge.flag.y = 0;                                                        // reset auto scroll flag Y
      currentCell = [0, 0, 0, 0];                                             // reset current cell position
    }
  };

  /**
   * Method copies custom properties from source element to the cloned element and sets event handlers (onmousedown and ondblclick).
   * This action will be taken on DIV element itself and all child DIV elements.
   * Needed in case when DIV element is cloned or ROW is cloned (for dragging mode="row").
   * @param {HTMLElement} src Source element (DIV or TR element).
   * @param {HTMLElement} cln Cloned element (DIV or TR element).
   */
  copyProperties = function (src, cln) 
  {
    var copy = [];                                      // copy method
    var childs;                                         // copy properties for child elements (this method calls "copy" method)
    
    copy[0] = function (e1, e2)                         // define copy method for DIV elements (e1 source element, e2 cloned element), http://stackoverflow.com/questions/4094811/javascript-clonenode-and-properties
    {
      if (e1.redips)                                    // if redips property exists in source element, copy custom properties (redips.enabled,  redips.container ...)
      {
        e2.redips = {};
        e2.redips.enabled = e1.redips.enabled;
        e2.redips.container = e1.redips.container;
        
        if (e1.redips.enabled)                          // set onmousedown event handler if source element is enabled
        {
          registerEvents(e2);
        }
      }
    };
    
    copy[1] = function (e1, e2)                         // define copy method for TR elements 
    {
      if (e1.redips)                                    // if redips property exists in source element, copy custom properties (redips.emptyRow ...)
      {
        e2.redips = {};
        e2.redips.emptyRow = e1.redips.emptyRow;
      }
    };
    
    childs = function (e)                               // define method to copy properties for child elements (input parameter is element index 0 - DIV, 1 - TR)
    {
      var el1, el2;                                     // collection of DIV/TR elements in source and cloned element
      var tn = ['DIV', 'TR'];                           // tag name
      
      el1 = src.getElementsByTagName(tn[e]);            // collect child DIV/TR elements from the source element (possible if div element contains table)
      el2 = cln.getElementsByTagName(tn[e]);            // collect child DIV/TR elements from cloned element
      
      for (var i = 0; i < el2.length; i++)              // copy custom properties (redips.enabled,  redips.container ...) and set event handlers to child DIV elements
      {
        copy[e](el1[i], el2[i]);
      }
    };
    
    if (src.nodeName === 'DIV')                         // if source element is DIV element then copy custom properties for DIV element
    {
      copy[0](src, cln);
    }
    else if (src.nodeName === 'TR')                     // if source element is TR element then copy custom properties for TR element
    {
      copy[1](src, cln);
    }
    
    childs(0);                                          // copy properties for DIV child elements
    childs(1);                                          // copy properties for TR child elements
  };


  /**
   * Method updates climit1_X or climit2_X class name (X defines cloning limit).
   * <ul>
   * <li>climit1_X - after cloning X elements, last element will be normal drag-able element</li>
   * <li>climit2_X - after cloning X elements, last element will stay unmovable</li>
   * </ul>
   * @param {HTMLElement} el Element on which cname class should be updated.
   * @param {Integer} value Increment or decrement climit value.
   */
  cloneLimit = function (el, value) 
  {
    var matchArray;                                                                           // match array
    var limitType;                                                                            // limit type (1 - clone becomes "normal" drag element at last; 2 - clone element stays immovable)
    var limit;                                                                                // limit number
    var classes;                                                                              // class names of clone element
    
    classes = el.className;                                                                   // read class name from element
    matchArray = classes.match(/climit(\d)_(\d+)/);                                           // match climit class name
    
    if (matchArray !== null)                                                                  // if DIV class contains climit
    {
      limitType = parseInt(matchArray[1], 10);                                                // prepare limitType (1 or 2) and limit
      limit = parseInt(matchArray[2], 10);
      
      if (limit === 0 && value === 1)                                                         // if current limit is 0 and should be set to 1 then return "cloning" to the DIV element
      {
        classes += ' redips-clone';                                                           // add "redips-clone" class to class attribute
        
        if (limitType === 2)                                                                  // enable DIV element for climit2 type
        {
          enableDrag(true, el);
        }
      }
      
      limit += value;                                                                         // update limit value
      classes = classes.replace(/climit\d_\d+/g, 'climit' + limitType + '_' + limit);         // update climit class name with new limit value
      
      if (limit <= 0)                                                                         // test if limit drops to zero
      {
        classes = classes.replace('redips-clone', '');                                        // no more cloning, cut out "redips-clone" from class name
        
        if (limitType === 2)                                                                  // if limit type is 2 then disable clone element (it will stay in cell)
        {
          enableDrag(false, el);                                                              // disable source DIV element
          REDIPS.drag.event.clonedEnd2();                                                     // call event.clonedEnd2 handler
        }
        else 
        {
          REDIPS.drag.event.clonedEnd1();                                                     // call event.clonedEnd1 handler
        }
      }
      
      el.className = normalize(classes);                                                      // normalize spaces and return classes to the clone object
    }
  };

  /**
   * Method attaches / detaches onmousedown, ontouchstart and ondblclick events to DIV elements and attaches onscroll event to the scroll containers in initialization phase.
   * It also can be used for element initialization after DIV element was manually added to the table.
   * If class attribute of DIV container contains "redips-noautoscroll" class name then autoScroll option will be disabled.
   * @param {Boolean|String} enable_flag Enable / disable element (or element subtree like table, dragging container ...).
   * @param {HTMLElement|String} [el] HTML node or CSS selector to enable / disable. Parameter defines element reference or CSS selector of DIV elements to enable / disable.
   * @example
   * // enable element with id="id123" (element id should be a string according to DOM docs)
   * rd.enableDrag(true, '#id123');
   *
   * // or init manually added element with known id
   * REDIPS.drag.enableDrag(true, '#id234');
   *
   * // disable all DIV elements in drag1 subtree
   * rd.enableDrag(false, '#drag1 div')
   *
   * // init DIV elements in dragging area (including newly added DIV element)
   * // DIV initialization will work if table node stays intact (table is not generated dynamically)
   * REDIPS.drag.enableDrag('init');
   *
   * // init added element with reference myElement
   * REDIPS.drag.enableDrag(true, myElement);
   *
   * // disable all DIV elements within TD (td is reference to TD node)
   * REDIPS.drag.enableDrag(false, td);
   */
  enableDrag = function (enable_flag, el) 
  {
    var div = [];                                                                     // collection of div elements contained in tables or one div element
    
    if (el === undefined)                                                             // collect DIV elements inside current drag area (drag elements and scroll containers) e.g. enableDrag(true)
    {
      div = dragContainer.getElementsByTagName('div');
    }    
    else if (typeof(el) === 'string')                                                 // "el" is string (CSS selector) - it can collect one DIV element (like "#d12") or many DIV elements (like "#drag1 div")
    {
      div = document.querySelectorAll(el);
    }
    else if (typeof(el) === 'object' && (el.nodeName !== 'DIV' || el.className.indexOf('redips-drag') === -1))      // "el" is node reference to element that is not DIV class="redips-drag"
    {
      div = el.getElementsByTagName('div');
    }
    else                                                                              // none of above, el is DIV class="redips-drag", so prepare array with one DIV element
    {
      div[0] = el;
    }
    
    enableDivs(enable_flag, div);
  };
  
  
  enableDivs = function(enable_flag, div)
  {
     var i, j, k,    // local variables used in loop
      tbls = [],    // collection of tables inside scrollable container
      borderStyle,  // border style (solid or dotted)
      opacity,    // (integer) set opacity for enabled / disabled elements
      cursor,     // cursor style (move or auto)
      overflow,   // css value of overflow property
      autoscroll,   // boolean - if scrollable container will have autoscroll option (default is true)
      enabled,    // enabled property (true or false)
      cb,       // box offset for container box (cb)
      position,   // if table container has position:fixed then "page scroll" offset should not be added
      regexDrag = /\bredips-drag\b/i, // regular expression to search "redips-drag" class name
      regexNoAutoscroll = /\bredips-noautoscroll\b/i; // regular expression to search "redips-noautoscroll" class name   

    opacity = REDIPS.drag.style.opacityDisabled;                                      // set opacity for disabled elements from public property "opacityDisabled"
    
    if (enable_flag === true || enable_flag === 'init')                               // set styles for enabled DIV element
    {
      borderStyle = REDIPS.drag.style.borderEnabled;
      cursor = 'move';
      enabled = true;
    }
    else                                                                              // else set styles for disabled DIV element
    {
      borderStyle = REDIPS.drag.style.borderDisabled;
      cursor = 'auto';
      enabled = false;
    }    
    
    for (i = 0, j = 0; i < div.length; i++)                                           // main loop that goes through all DIV elements
    {    
      if (regexDrag.test(div[i].className))                                           // if DIV element contains "redips-drag" class name
      {
        if (enable_flag === 'init' || div[i].redips === undefined)                    // add reference to the DIV container (initialization or newly added element to the table) this property should not be changed in later element enable/disable
        {
          div[i].redips = {};                                                         // create a "property object" in which all custom properties will be saved
          div[i].redips.container = dragContainer;
        }
        else if (enable_flag === true && typeof(opacity) === 'number')                // remove opacity mask
        {
          div[i].style.opacity = '';
          div[i].style.filter = '';
        }
        else if (enable_flag === false && typeof(opacity) === 'number')               // set opacity for disabled elements
        {
          div[i].style.opacity = opacity / 100;
          div[i].style.filter = 'alpha(opacity=' + opacity + ')';
        }
        
        registerEvents(div[i], enabled);                                              // register event listener for DIV element
        
        div[i].style.borderStyle = borderStyle;                                       // set styles for DIV element
        div[i].style.cursor = cursor;
        div[i].redips.enabled = enabled;                                              // add enabled property to the DIV element (true or false)
      }
      else if (enable_flag === 'init')                                                // attach onscroll event to the DIV element in init phase only if DIV element has overflow other than default value 'visible' and that means scrollable DIV container
      {
        overflow = getStyle(div[i], 'overflow');                                      // ask for overflow style
        
        if (overflow !== 'visible')                                                   // if DIV is scrollable
        {
          REDIPS.event.add(div[i], 'scroll', calculateCells);                         // define onscroll event handler for scrollable container
          position = getStyle(div[i], 'position');                                    // set container box style position (to exclude page scroll offset from calculation if needed)
          cb = boxOffset(div[i], position, false);                                    // get DIV container offset with or without "page scroll" and excluded scroll position of the content
          autoscroll = !regexNoAutoscroll.test(div[i].className);                     // search for redips-noautoscroll option
          
          scrollData.container[j] =                                                   // prepare scrollable container areas
          {
            div : div[i],                 // reference to the scrollable container
            offset : cb,                  // box offset of the scrollable container
            midstX : (cb[1] + cb[3]) / 2, // middle X
            midstY : (cb[0] + cb[2]) / 2, // middle Y
            autoscroll : autoscroll       // autoscroll enabled or disabled (true or false)
          };
          
          tbls = div[i].getElementsByTagName('table');                                // search for tables inside scrollable container
          
          for (k = 0; k < tbls.length; k++)                                           // loop goes through found tables inside scrollable area
          {
            tbls[k].sca = scrollData.container[j];                                    // add a reference to the corresponding scrollable area
          }
          
          j++;                                                                        // increase scrollable container counter
        }
      }
    }   
  };

  //Method returns style value for requested HTML element and style name.
  getStyle = function (el, style_name) 
  {
    if (el && el.currentStyle) 
    {
      return el.currentStyle[style_name];
    }
    else if (el && window.getComputedStyle) 
    {
      return document.defaultView.getComputedStyle(el, null)[style_name];
    }
  };

  // find the first parent element of el with the tag name tag_name 
  findParent = function (tag_name, el) 
  {
    el = el.parentNode;                 // set "el" to the next node (to prevent finding node itself)
    
    while (el)                          // start loop
    {
      if (el.nodeName === tag_name)     // node is found
      {
          break;                        // node is found and loop can be ended
      }
      
      el = el.parentNode;               // move on to the parent node
    }
    
    return el;
  };

  //Function returns a string in which all of the preceding and trailing white space has been removed, and in which all internal sequences of white is replaced with one white space.
  normalize = function (str) 
  {
    if (str !== undefined) 
    {
      str = str.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ');
    }
    
    return str;                                                       // return normalized string (without preceding and trailing spaces)
  };

  /**
   * Method sets opacity to table row or deletes row content.
   * Input parameter "el" is reference to the table row or reference to the cloned mini table (when row is moved).
   * @param {HTMLElement|String} el Id of row handler (div class="redips-drag redips-row") or reference to element (source row or mini table).
   * @param {Integer|String} opacity Opacity level (from 0 to 100) or "empty" (then content of table cells in row will be deleted - in that case first parameter should be TR).
   * @param {String} [color] Background color.
   * @example
   * // set reference to the REDIPS.drag library
   * rd = REDIPS.drag;
   *
   * // make row semi-transparent
   * rd.rowOpacity(rowObj, 50);
   *
   * // set row as empty and white (content in table cells will be deleted)
   * rd.rowOpacity(rowObj, 'empty', 'White');
   */
  rowOpacity = function (el, opacity, color) 
  {
    var tdNodeList;                                               // table cells
    var i, j;                                                     // loop variables
    
    if (typeof(el) === 'string')                                  // if input parameter is string (this should be element id), then set element reference
    {
      el = document.getElementById(el);
      el = findParent('TABLE', el);                               // el could be reference of the DIV class="redips-drag redips-row" (row handler)
    }
    
    if (el.nodeName === 'TR')                                     // if el is TR, then set background color to each cell (if needed) and apply opacity
    {
      tdNodeList = el.getElementsByTagName('td');                 // collect table cell from the row
      
      for (i = 0; i < tdNodeList.length; i++)                     // set opacity for DIV element
      {
        tdNodeList[i].style.backgroundColor = color ? color : ''; // set background color to table cell if needed
        
        if (opacity === 'empty')                                  // if opacity is set to "empty" then delete cell content
        {
          tdNodeList[i].innerHTML = '';
        }
        else                                                      // otherwise set opacity to every child node in table cell
        {
          for (j = 0; j < tdNodeList[i].childNodes.length; j++)   // loop through child nodes of every table cell
          {
            // apply styles only to Element nodes (not text nodes, attributes ...), http://code.stephenmorley.org/javascript/dom-nodetype-constants/
            if (tdNodeList[i].childNodes[j].nodeType === 1) 
            {
              tdNodeList[i].childNodes[j].style.opacity = opacity / 100;
              tdNodeList[i].childNodes[j].style.filter = 'alpha(opacity=' + opacity + ')';
            }
          }
        }
      }
    }
    else                                                          // when row is moved then REDIPS.drag will create mini table with one row, all browsers (IE8, Opera11, FF3.6, Chrome10) can set opacity to the table
    {
      el.style.opacity = opacity / 100;                           // set opacity for FF, Chrome, Opera
      el.style.filter = 'alpha(opacity=' + opacity + ')';         // set opacity for IE
      el.style.backgroundColor = color ? color : '';              // set background color
    }
  };

  return {
    /* public properties */
    obj : obj,                  //Type: HTMLElement - Currently moved DIV element. Reference to the REDIPS.drag.obj (dragged DIV element) is visible and can be used in appropriate event handlers.
    objOld  : objOld,           //Type: HTMLElement - Previously moved DIV element (before clicked or cloned). In case when DIV element is cloned, obj is reference of current (cloned) DIV element while objOld is reference of bottom (origin) DIV element.
    /**
     * Object contains reference to previous, source, current and target table cell. Td references can be used in event handlers.
     * <ul>
     * <li>{HTMLElement} td.source - reference to source table cell (set in onmousedown)</li>
     * <li>{HTMLElement} td.previous - reference to previous table cell (set in onmousemove and autoscroll)</li>
     * <li>{HTMLElement} td.current - reference to current table cell (set in onmousemove and autoscroll)</li>
     * <li>{HTMLElement} td.target - reference to target table cell (target table cell is set in a moment of dropping element to the table cell)</li>
     * </ul>
     * @type Object
     */
    td : td,
    /**
     * Hover object contains 4 properties: colorTd, colorTr, borderTd and borderTr. colorTd and colorTr define hover color for DIV element and table row.
     * If borderTd is defined, then highlighted cell will have border. If borderTr is defined then highlighted row will have only top or bottom border.
     * Top border shows that row will be placed above current row, while bottom border shows that current row will be placed below current row.
     * Some browsers may have problem with "border-collapse:collapse" table style and border highlighting.
     * In that case try without collapsing TD borders (e.g set "border-spacing:0" and smaller "td.border-width").
     * @type Object
     * @name REDIPS.drag#hover
     * @example
     * // set "#9BB3DA" as hover color for TD
     * REDIPS.drag.hover.colorTd = '#9BB3DA';
     *
     * // or set "Lime" as hover color for TR
     * REDIPS.drag.hover.colorTr = 'Lime';
     *
     * // set red border for highlighted TD
     * REDIPS.drag.hover.borderTd = '2px solid red';
     */
    hover : hover,
    /**
     * Scroll object contains properties needed for autoscroll option.
     * <ul>
     * <li>{Boolean} scroll.enable - Enable / disable autoscroll option. By default autoscroll is enabled but it can be usefull in some cases to completely turn off autoscroll (if application doesn't need autoscrolling page nor autoscrolling DIV container). Turning off autoscroll will speed up application because extra calculations will be skipped. Default is true</li>
     * <li>{Integer} scroll.bound - Bound size for triggering page autoScroll or autoScroll of scrollable DIV container. Default value is 25 (px).</li>
     * <li>{Integer} scroll.speed - Autoscroll pause in milliseconds. Default value is 20 (milliseconds).</li>
     * </ul>
     * @type Object
     */
    scroll : scroll,
    /**
     * Object contains styles (colors, opacity levels) for DIV elements and table rows.
     * <ul>
     * <li>{String} style.borderEnabled - Border style for enabled DIV elements. Default is "solid".</li>
     * <li>{String} style.borderDisabled - Border style for disabled DIV elements. Default is "dotted".</li>
     * <li>{Integer} style.opacityDisabled - Opacity level for disabled elements. Default is empty string.</li>
     * <li>{String} style.rowEmptyColor - "Empty row" color. When last row from table is moved then this color will be set to "empty row". Default is "white".</li>
     * </ul>
     * @example
     * // define border style for disabled elements
     * REDIPS.drag.style.borderDisabled = 'dashed';
     * @type Object
     */
    style : style,
    /**
     * Object defines several rules related to cloning DIV elements like enable cloning with shift key, enable returning cloned DIV element to its source and so on.
     * Instead of moving, DIV element / row will be cloned and ready for dragging.
     * Just press SHIFT key and try to drag DIV element / row.
     * if clone.sendBack property set to true, cloned DIV element will be deleted when dropped to the cell containing its source clone element.
     * If exists, "climit" class will be updated (increased by 1).
     * clone.drop property defines placing cloned DIV element (dropped outside any table) to the last marked position.
     * If this property is set to true, the cloned DIV element will be always placed to the table cell.
     * <ul>
     * <li>{Boolean} clone.keyDiv - If set to true, all DIV elements on tables could be cloned with pressed SHIFT key. Default is false.</li>
     * <li>{Boolean} clone.keyRow - If set to true, table rows could be cloned with pressed SHIFT key. Default is false.</li>
     * <li>{Boolean} clone.sendBack - If set to true, cloned element can be returned to its source. Default is false.</li>
     * <li>{Boolean} clone.drop - If set to true, cloned element will be always placed to the table (to the last possible cell) no matter if is dropped outside the table. Default is false.</li>
     * </ul>
     * @type Object
     */
    clone : clone,
    /* public methods (documented in main code) */
    init : init,
    enableDrag : enableDrag,
    enableDivs : enableDivs,
    rowOpacity : rowOpacity,
    getScrollPosition : getScrollPosition,
    getStyle : getStyle,
    findParent : findParent,
    event : event
  };
}());


if (!REDIPS.event)                                              // if REDIPS.event isn't already defined (from other REDIPS file)
{
  REDIPS.event = (function () 
  {
    var add;
    var remove;

    add = function (obj, eventName, handler)                    // add event listener
    {
      if (obj.addEventListener) 
      {
        obj.addEventListener(eventName, handler, false);        // (false) register event in bubble phase (event propagates from from target element up to the DOM root)
      }
      else if (obj.attachEvent) 
      {
        obj.attachEvent('on' + eventName, handler);
      }
      else 
      {
        obj['on' + eventName] = handler;
      }
    };

    remove = function (obj, eventName, handler)                 // remove event listener
    {
      if (obj.removeEventListener) 
      {
        obj.removeEventListener(eventName, handler, false);
      }
      else if (obj.detachEvent) 
      {
        obj.detachEvent('on' + eventName, handler);
      }
      else 
      {
        obj['on' + eventName] = null;
      }
    };

    return { add: add, remove: remove };
  }());
}