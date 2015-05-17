function showMenu(e, fieldName)
{
  if($('#fieldMenu').length === 0)
  {
    $(getFieldMenuMarkup(fieldName, e.clientX, e.clientY)).appendTo('body');
    $('#fieldMenu').mouseleave(function() { $('#fieldMenu').remove(); });
  }
}