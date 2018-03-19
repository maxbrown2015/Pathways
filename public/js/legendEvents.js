/**
 * to be reviewed
 */
$('#legend').click(function (e) {

  var $actualDiv = $(e.target).attr('data-pathway');
  var $childElement = $(e.target).parent().attr('data-pathway');

  //check if the div or the <p> within the div has been clicked
  if ($actualDiv !== undefined || $childElement !== undefined) {
    console.log('actual div is:' + $actualDiv);
    console.log('actual child is:' + $childElement);
  }
});
