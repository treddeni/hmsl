var resizeColumnLeft = 0;
var resizeField = '0';
var MIN_COLUMN_WIDTH = 70;
var GRIPS_WIDTH = 16;

var startResize = function(e, grip)
{
  $(document).bind('touchmove.resizeColGrip mousemove.resizeColGrip', resizeDrag).bind('touchend.resizeColGrip mouseup.resizeColGrip', resizeEnd);

  document.getElementById('resizeLine').style.visibility = 'visible';
  document.getElementById('resizeLine').style.left = e.pageX + 'px';

  resizeColumnLeft = $(grip.parentNode).position().left;                    //save the left position of the column being resized
  resizeField = grip.parentNode.id.replace('colHeader', '');                //save the field of the column being resized
};

var resizeEnd = function(e)
{
  $(document).unbind('touchmove.resizeColGrip mousemove.resizeColGrip', resizeDrag).unbind('touchend.resizeColGrip mouseup.resizeColGrip', resizeEnd);
  document.getElementById('resizeLine').style.visibility = 'hidden';

  var newWidth = e.pageX - resizeColumnLeft - GRIPS_WIDTH;

  if(newWidth < MIN_COLUMN_WIDTH)
  {
    newWidth = MIN_COLUMN_WIDTH;
  }

  document.getElementById('colHeaderInput' + resizeField).style.width = newWidth + 'px';    //resize the width of the column header

  //resize the width of every cell in the column
  var columnCells = document.querySelectorAll('.fieldInput' + resizeField);

  for(var i = 0; i < columnCells.length; i++)
  {
    columnCells[i].style.width = (newWidth + 8) + 'px';
  }
};

var resizeDrag = function(e)
{
  if(e.pageX > resizeColumnLeft + MIN_COLUMN_WIDTH + GRIPS_WIDTH)
  {
    document.getElementById('resizeLine').style.left = e.pageX + 'px';      //move the resize line as the user drags it
  }
};