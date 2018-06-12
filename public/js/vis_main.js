/**x
 * This file holds the logic for drawing the graph and all the interactions with
 * the user.
 */

// container to hold the network
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
  },
  edges: {
    width: 2,
    selectionWidth: 4
  },
  interaction: {
    zoomView: false
  },
  nodes: {
    font: {
      color: '#FFFFFF'
    },
    shape: 'dot'
  }
};


// initialize the network
var network = new vis.Network(container, data, options);


//function to scroll to final third of page when a node is clicked
var scrollToThird = function () {
  var offsetValue = $('#course-area').offset().top ;
  $('html,body').delay(500).animate({
    scrollTop: offsetValue,
    duration: 1000,
    easing: 'linear'
  });
};

//boolean to disable scrolling after first click
var firstTime = true;

//handler to show the course description when a user clicks on a node
var showDescriptionAndTitle = function (courseHeader, courseDescription) {
  var header = courseHeader.split(':');
  var innerText = header[0] + ':<br>' + header[1] + '</br>';
  fadeDivOutAndIn('#course-title', innerText);
  fadeDivOutAndIn('#course-description-body', courseDescription);
};

//handler for clicking on pathway lists in bottom area
var listItemShowDescription = function(e) {
  var header = $(this).data('title');
  var description = $(this).data('description');
  showDescriptionAndTitle(header, description);
};

var hoverInListItem = function() {
  $(this).css("font-size", "1.25em");
};

var hoverOutListItem = function () {
  $(this).css("font-size", "1em");
};

var updatePathwayLists = function(pathway, currPath) {
  $(pathway).fadeOut(function() {
    $(pathway).empty();
    //for loop indexed at 1 to prevent access of pathway's name and color object
    for (var i = 1; i < currPath.length; i++) {
      var $li = $('<li></li>').text(currPath[i].label);
      //store course data for click handler
      $li.data('title', currPath[i].label);
      $li.data('description', currPath[i].courseDescription);
      //attach click handler.
      $li.click(listItemShowDescription);
      $li.hover(hoverInListItem, hoverOutListItem);
      //$(pathway).append($li);
      $($li).hide().appendTo(pathway).fadeIn();
    }
  }).fadeIn();
};

/**
 * If a node is clicked, populate lower half of page with list of courses that 
 * share the same pathways.
 */
network.on('selectNode', function (eventObj) {
  $('#course-area').css('display', 'block');

  var nodeObj = nodes.get(eventObj.nodes[0]);
  var pathways = nodeObj.pathways;
  var currCol = 1;

  //clear data in columns and create new lists
  //clearDescription();
  pathways.forEach(function (element) {
    var currPath = pathwaysObj[element];
    var currSection = "#pathway-" + currCol;
    var currSectionHeader = "#pathway-header-" + currCol;
    var currLi = '#path-list-' + currCol;
    var currColor = currPath[0].color.color;

    $(currSection).css('color', currColor);
    $(currSectionHeader).hover(function() {
      $(this).css("font-size", "1.75em");
    }, 
    //hover out
    function() {
      $(this).css("font-size", "1.25em");
    });
    
    fadeDivOutAndIn(currSectionHeader, currPath[0].name);
    updatePathwayLists(currLi, currPath);
    currCol++;

  });

  //dispaly description and title
  showDescriptionAndTitle(nodeObj.title, nodeObj.courseDescription);
  //move to final third after being clicked
  if (firstTime) {
    scrollToThird();
    firstTime = false;
  }
});

/**
 * If an edge is clicked, highlight all edges from a similar pathway (make them
 * thicker and bolder)
 */
network.on('selectEdge', function (eventObj) {
  //get the clicked edge's object to obtain the type
  var edgeObj = edges.get(eventObj.edges[0]);
  var pathwayName = edgeObj.type;

  //retrieve edgeIds of edges that have similar types
  var edgeItems = edges.getIds({
    filter: function (element) {
      return (element.type === pathwayName);
    }
  });
  console.log(edgeItems);
  //highlight edges
  network.selectEdges(edgeItems);
});
