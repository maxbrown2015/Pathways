/** x
 * This file holds the logic for drawing the graph and all the interactions with
 * the user.
 */

// container to hold the network
const container = document.getElementById('mynetwork');

const data = {
  nodes,
  edges,
};

const options = {
  width: '100%',
  height: '100%',
  physics: {
    enabled: true,
  },
  edges: {
    width: 0,
    selectionWidth: 4,
  },
  interaction: {
    zoomView: false,
    selectConnectedEdges: false,
    dragView: false,
  },
  nodes: {
    font: {
      color: '#FFFFFF',
    },
    shape: 'dot',
  },
  layout: {
    randomSeed: undefined,
    improvedLayout: true,
  },
};


// initialize the network
const network = new vis.Network(container, data, options);

// set physics to false
const noPhysiscsOption = {
  physics: {
    enabled: false,
  },
};

// function to scroll to final third of page when a node is clicked
/**
 * POTENTIAL SOURCE OF ERROR DOUBLE FUNCTIONS LINE 264!!
 */
const scrollToThird = function () {
  let offsetValue = $('#course-area').offset().top;
  $('html,body').delay(500).animate({
    scrollTop: offsetValue,
    duration: 1000,
    easing: 'linear',
  });
};
//
// function to scroll to final third of page when a node is clicked

/**
 * If a node is clicked, populate lower half of page with list of courses that
 * share the same pathways.
 */
let isBusy = false;


network.on('selectNode', (eventObj) => {

  network.setOptions(noPhysiscsOption);
  if (!isBusy) {
    console.log(isBusy);
    isBusy = true;
  $('#course-area').css('display', 'block');

  var nodeObj = nodes.get(eventObj.nodes[0]);
  var pathways = nodeObj.pathways;
  var numberOfPathways = Object.keys(pathways).length;

  //clear old text
  for (var i = 0; i < 3; i++) clearPathwayDivs(i + 1);
  //adjust bootstrap divs to fit number of pathways
  boldSelectedEdges(pathways);
  //make the main thread wait 400ms for fadeOut (called in clearPathwayDivs) to finish
  setTimeout(function() {
  //adjust bootstrap classes based on the number of pathways
  setColumnSizes(numberOfPathways, "pathway-");
  setColumnSizes(numberOfPathways, "graph-header-");

  for (var i = 0; i < 3; i++) {
    //console.log(pathways[i]);
    //if pathway exists, replace the old list with the new pathway's courses
    if (pathways[i]) {
      //i+1 refers to the current column being set
      updatePathwayCourseListings(pathways[i], i + 1)
    }
  };

  //dispaly description and title
  showDescriptionAndTitle(nodeObj.title, nodeObj.courseDescription);
  //move to final third after being clicked
  isBusy = false;
    }, 800);
  }
});


let updatePathwayCourseListings = function (pathway, currCol) {
  // console.log(pathway);
  let currPath = pathwaysObj[pathway];
  // console.log(currPath);
  let currSection = '#pathway-' + currCol;
  let currSectionHeader = '#pathway-header-' + currCol;
  let currGraphHeader = '#graph-header-' + currCol;
  let currLi = `#path-list-${  currCol}`;
  let currLegend = `#pathway-legend-${  currCol}`;
  let currColor = currPath[0].color.color;

  $(currLegend).css('background-color', currColor);
  // todo add easing
  $(currLegend).show({
    easing: 'swing',
    direction: 'left',
    duration: 400,
    complete() {
      $(this).html(currPath[0].name);
     },
  },);

  $(currSectionHeader).css('color', currColor);
  // $(currSection).css('opacity', .5);
  $(currGraphHeader).css('color', currColor);
  // set hover in and out effects for pathway list Headers
  $(currSectionHeader).hover(hoverInHeader, hoverOutHeader);
  $(currSectionHeader).fadeOut(function () {
    $(this).html(currPath[0].name);
  }).fadeIn();

  updatePathwayLists(currLi, currPath);
};


/**
 * Function to get edgeIds of edges that correspond to the pathway
 *
 * @argument pathwayName: the name of pathway to get objects
 * @returns edgeObjects: => Array
 */
let getPathwayEdges = function (pathwayName) {
  let edgeObjects = edges.getIds({
    filter (element) {
      return (element.type === pathwayName);
    },
  });
  return edgeObjects;
};


var updatePathwayLists = function (pathway, currPath) {
  $(pathway).fadeOut(() => {
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

var clearPathwayDivs = function (currCol) {
  let currSectionHeader = '#pathway-header-' + currCol;
  let currGraphHeader = '#graph-header-' + currCol;
  let currLi = `#path-list-${  currCol}`;
  let currLegend = '#pathway-legend-' + currCol;

  // todo add easing
  $(currLegend).hide({
 direction: 'left',
duration: 400,
complete() {
    $(this).empty();
  }
});
  $(currSectionHeader).fadeOut(function () {
    $(this).empty();
  });
  $(currGraphHeader).fadeOut(() => {
    $(currGraphHeader).empty();
  });
  $(currLi).fadeOut(function () {
    $(this).empty();
  });
};

let activatePathwayLegends = function () {

};

/**
 * If an edge is clicked, highlight all edges from a similar pathway (make them
 * thicker and bolder)
 */
network.on('selectEdge', (eventObj) => {
  var edgeObj = edges.get(eventObj.edges[0]);
  var pathwayName = edgeObj.type;
  //retrieve edgeIds of edges that have similar types
  var edgeItems = edges.getIds({
    filter: function (element) {
      return (element.type === pathwayName);
    }
  });
  //highlight edges
  network.selectEdges(edgeItems);
});

let boldSelectedEdges = function (pathways) {
  // retrieve edgeIds of edges that have similar types

  let edgeItems = edges.getIds({
    filter (element) {
      //TODO ASK SHAD ABOUT BUG POSSIBILITY
      return (element.type === pathways[0] || element.type === pathways[1] || element.type === pathways[2]);
    },
  });

  network.selectEdges(edgeItems);
};


let setColumnSizes = function (numberOfPathways, idString) {
  const path1 = document.getElementById(`${idString  }1`);
  const path2 = document.getElementById(`${idString  }2`);
  const path3 = document.getElementById(`${idString  }3`);
  $(path1).removeClass();
  $(path2).removeClass();
  $(path3).removeClass();
  if (numberOfPathways === 1) {
    $(path1).addClass('col-md-12');
  } else if (numberOfPathways === 2) {
    $(path1).addClass('col-md-6');
    $(path2).addClass('col-md-6');
  } else {
    $(path1).addClass('col-md-4');
    $(path2).addClass('col-md-4');
    $(path3).addClass('col-md-4');
  }
};
/**
 * potential source of error!!
 * TODO refer to code block above
 */
var scrollToThird = function () {
  let offsetValue = $('#course-area').offset().top;
  $('html,body').delay(500).animate({
    scrollTop: offsetValue,
    duration: 1000,
    easing: 'linear',
  });
};

// boolean to disable scrolling after first click
let firstTime = true;

// handler to show the course description when a user clicks on a node
var showDescriptionAndTitle = function (courseHeader, courseDescription) {
  let header = courseHeader.split(':');
  let innerText = `${header[0]  }:<br>${  header[1]  }</br>`;
  fadeDivOutAndIn('#course-title', innerText);
  fadeDivOutAndIn('#course-description-body', courseDescription);
};

// handler for clicking on pathway lists in bottom area
var listItemShowDescription = function (e) {
  let header = $(this).data('title');
  let description = $(this).data('description');
  showDescriptionAndTitle(header, description);
};

var hoverInListItem = function () {
  // console.log("inlist called");
  $(this).css('font-size', '1.25em');
};

var hoverOutListItem = function () {
  // console.log("inlist hover out called");
  $(this).css('font-size', '1em');
};

var hoverInHeader = function () {
  $(this).css('font-size', '1.5em');
};
// hover out
var hoverOutHeader = function () {
  $(this).css('font-size', '1.25em');
};
