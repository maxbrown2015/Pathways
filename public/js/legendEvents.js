/**
 * This file contains code that handles the click events from the legend row. 
 * This click handler will pick events from the div and then highlight the nodes 
 * and edges that correspond to the selected pathway
 */

$('#legend-row').click(function (e) {
  
  //variables to get data from the text or the div once clicked
  var $actualDiv = $(e.target).attr('data-pathway');
  var $childElement = $(e.target).parent().attr('data-pathway');

  if ($actualDiv || $childElement ) {
    var pathway = $actualDiv || $childElement;
    var wantedNodes = pathwaysObj[pathway];
    var nodeIDs = [];
    var re1 = /\d{3}-\d{3}/;
    var re2 = /\d{3}/;

    clearDescription();

    $('#pathway1').html('<h4>' + wantedNodes[0].name + '</h4>');

    for (var i = 1; i < wantedNodes.length; i++) {
      var currentNode = wantedNodes[i];
      var type1 = currentNode.label.match(re1);
      var type2 = currentNode.label.match(re2);
      
      var $li = $('<li></li>').text(currentNode.label);
      $li.data('description', currentNode.courseDescription);
      
      //show description of courses when clicked.
      $li.click(showDescription);
      $('#pathway1').append($li);
      
      //check structure of node/course ID. xxx or xxx-xxx
      if (type1) {
        nodeIDs.push(type1[0]);
      } else if (type2) {
        nodeIDs.push(type2[0]);
      }
    }
  }
  network.selectNodes(nodeIDs);
});