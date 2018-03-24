/**
 * This file holds the logic for drawing the graph and all the interactions with the user.
 */


// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis Dataset format
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  width: '100%',
  height: '100%',
  physics: {
    enabled: false
  }
};

// initialize the network!
var network = new vis.Network(container, data, options);


//handler to show the course description when a user clicks on a course
var showDescription = function () {
  var courseDetail = $(this).data('description');
  $('#course-description').html('<h4>Course Description</h4>');
  $('#course-description').append('<p>' + courseDetail + '</p>');
};

var clearDescription = function () {
  $('#pathway1').html('<ul id="path1"></ul>');
  $('#pathway2').html('<ul id="path2"></ul>');
  $('#pathway3').html('<ul id="path3"></ul>');
  $('#course-description').html('<h4>Course Description</h4>');
};


/*
*If a node is clicked, populate lower half of page with list of courses
*that share the same pathways.
*
*/
network.on('click', function (eventObj) {

  //differenciate events from nodes
  if (eventObj.nodes.length !== 0) {
    var nodeObj = nodes.get(eventObj.nodes[0]);
    var pathways = nodeObj.pathways;
    var currCol = 1;

    //clear data in columns and create new lists
    clearDescription();

    pathways.forEach(function (element) {
      var currPath = pathwaysObj[element];
      var currSection = '#pathway' + currCol;

      var currLi = '#path' + currCol;
      var $pathName = $('<h4></h4>').text(currPath[0].name);
      $(currSection).prepend($pathName);

      //for loop indexed at 1 to prevent access of pathway's name object
      for (var i = 1; i < currPath.length; i++) {
        var $li = $('<li></li>').text(currPath[i].label);
        $li.data('description', currPath[i].courseDescription);
        //attach click handler.
        $li.click(showDescription);
        $(currLi).append($li);
      }
      currCol++;
    });
  }
});
