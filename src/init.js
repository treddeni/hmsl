var scrollBarWidth;

$(document).ready(function()
{
  scrollBarWidth = getScrollBarWidth();                             //get the scrollbar width for the browser, to use later for sizing other elements
  document.onkeydown = checkKey; 
  hms.init();
});

var getScrollBarWidth = function() 
{
  var div, width;
  div = document.createElement('div');
  div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
  div = div.firstChild;
  document.body.appendChild(div);
  width = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return width;
};