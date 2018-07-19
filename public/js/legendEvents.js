/**
 * This file contains code that handles the click events from the legend row.
 * This click handler will pick events from the div and then highlight the nodes
 * and edges that correspond to the selected pathway
 */

/*
$('#legend-row').click((e) => {
  // variables to get data from the text or the div once clicked
  const $actualDiv = $(e.target).attr('data-pathway');
  const $childElement = $(e.target).parent().attr('data-pathway');

  if ($actualDiv || $childElement) {
    const pathway = $actualDiv || $childElement;
    const wantedNodes = pathwaysObj[pathway];
    var nodeIDs = [];
    const re1 = /\d{3}-\d{3}/;
    const re2 = /\d{3}/;

    clearDescription();

    $('#pathway1').html(`<h4>${wantedNodes[0].name}</h4>`);

    for (let i = 1; i < wantedNodes.length; i++) {
      const currentNode = wantedNodes[i];
      const type1 = currentNode.label.match(re1);
      const type2 = currentNode.label.match(re2);

      const $li = $('<li></li>').text(currentNode.label);
      $li.data('description', currentNode.courseDescription);

      // show description of courses when clicked.
      $li.click(showDescription);
      $('#pathway1').append($li);

      // check structure of node/course ID. xxx or xxx-xxx
      if (type1) {
        nodeIDs.push(type1[0]);
      } else if (type2) {
        nodeIDs.push(type2[0]);
      }
    }
  }
  // TODO see when this change first occured
  network.selectNodes(nodeIDs);
});
*/
