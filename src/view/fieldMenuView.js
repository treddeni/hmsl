var fieldMenuView = 
{
  render: function(fieldMenu, x, y)
  {
    var markup = '<div id="fieldMenu" style="left:' + (x-10) + 'px;top:' + (y-10) + 'px;">';
    
    markup += this.renderMenu(fieldMenu);
    
    markup += '</div>';
    
    $('body').append($(markup));
    $('#fieldMenu').mouseleave(function() { $('#fieldMenu').remove(); });  
  },
  renderMenu: function(menu)
  {
    var markup = '<ul>';
    
    menu.items.forEach(function(menuItem)
    {
      markup += '<li onclick="fieldMenuController.handleClick(' + menuItem.id + ');">';
  
      var checkMarkClass = 'uncheckedFieldMenuItem';
      if(menuItem.field && menuItem.checked)
      {
        checkMarkClass = 'checkedFieldMenuItem';
      }
      
      markup += '<img id="FieldMenuItem' + menuItem.id + '" src="' + CHECK_MARK_IMAGE_PATH + '" class="' + checkMarkClass + '"/>';
      markup += menuItem.display;
      
      if(menuItem.items && menuItem.items.length > 0)
      {
        markup += '<div class="arrowRight"></div>';
        markup += fieldMenuView.renderMenu(menuItem);
      }
      
      markup += '</li>';      
    });
    
    return markup + '</ul>';    
  },
  setCheckmarks: function(menuItemID, siblings)
  {
    siblings.forEach(function(sibling) { $('#FieldMenuItem' + sibling.id).removeClass('checkedFieldMenuItem').addClass('uncheckedFieldMenuItem'); });  //clear the checkmarks for all item on the same menu level
  
    $('#FieldMenuItem' + menuItemID).removeClass('uncheckedFieldMenuItem').addClass('checkedFieldMenuItem');      
  }
};