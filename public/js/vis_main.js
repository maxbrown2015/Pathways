/**x
 * This file holds the logic for drawing the graph and all the interactions with
 * the user.
 */

// container to hold the network
var container = document.getElementById('mynetwork');

var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  width: '100%',
  height: '100%',
  physics: {
    enabled: true,
    barnesHut: {
      avoidOverlap: .5
    }
  },
  edges: {
    width: 1,
    selectionWidth: 1,
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
    scaling: {
      min: 20,
      max: 20,
      label: {
        min: 20,
        max: 20,
        enabled: true 
      },
    },
    shape: 'circle',
    value: 20
  },
  layout: {
    randomSeed: 88145
  }
};


// initialize the network
var network = new vis.Network(container, data, options);

window.onresize = function() {network.fit();}

//set physics to false
var noPhysiscsOption = {
  physics: {
    enabled: false
  }
};
/**
 * If a node is clicked, populate lower half of page with list of courses that 
 * share the same pathways.
 */

$(document).ready(function () {
  setTimeout(function() {network.setOptions(noPhysiscsOption)}, 3000);
});

let firstTime = true;

network.on('selectNode', function (eventObj) {
  var nodeObj = nodes.get(eventObj.nodes[0]);
  if (firstTime) {
    startTour(nodeObj);
    firstTime = false;
    return;
  }
  onNodeSelect(nodeObj);
});

let onNodeSelect = function(nodeObj) {
  $('#course-area').css('display', 'block');
  $('#mynetwork').css('pointer-events', 'none');

  console.log(network.getSeed())
  var pathways = nodeObj.pathways;
  var numberOfPathways = Object.keys(pathways).length;

  //clear old text
  for (var i = 0; i < 3; i++) clearPathwayDivs(i + 1);
  //adjust bootstrap divs to fit number of pathways
  boldSelectedEdges(pathways);
  setTimeout(function() {
    for (var i = 0; i < 3; i++) {
      if (pathways[i]) {updateLegends(pathways[i], i + 1);}
    }
  }, 450);

  setTimeout(function() { 
    let description = nodeObj.courseDescription;
    if (nodeObj.courseDescription === 'missing course description') {
      description = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
    }
    showDescriptionAndTitle(nodeObj.title, description);
  //make the main thread wait 400ms for fadeOut (called in clearPathwayDivs) to finish
    setTimeout(function() {
      /*
      $('#course-type').html("Course Type: " + "  Lecture");
      $('#course-instructor').html("Instructor: " + "  Professor WhatsHisName");
      */
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
        //move to final third after being clicked
        $('#mynetwork').css('pointer-events', 'auto');
    }, 800);
  }, 200);
};

let updatePathwayCourseListings = function(pathway, currCol) {
  //console.log(pathway);
  var currPath = pathwaysObj[pathway];
  //console.log(currPath);
  var currSection = "#pathway-" + currCol;
  var currSectionHeader = "#pathway-header-" + currCol;
  var currGraphHeader = "#graph-header-" + currCol;
  var currLi = '#path-list-' + currCol;
  var currColor = currPath[0].color.highlight;

  $(currSectionHeader).css('color', currColor);
  //$(currSection).css('opacity', .5);
  $(currGraphHeader).css('color', currColor);
  //set hover in and out effects for pathway list Headers
  $(currSectionHeader).hover(hoverInHeader, hoverOutHeader);
  $(currSectionHeader).fadeOut(function() {
    $(this).html(currPath[0].name);
  }).fadeIn();

  updatePathwayLists(currLi, currPath);
};

let updatePathwayLists = function (pathway, currPath) {
  $(pathway).fadeOut(function () {
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


let updateLegends = function(pathway, currCol) {
  var currPath = pathwaysObj[pathway];
  var currLegend = '#pathway-legend-' + currCol;
  var currLegendIcon = '#pathway-legend-icon-' + currCol;
  var currColor = currPath[0].color.color;

  $(currLegend).css("color", currColor);
  $(currLegend).html(currPath[0].name); 
  $(currLegend).show({easing: 'linear', effect: "slide", direction: 'left', duration: 400, complete: function() {}});

  $(currLegendIcon).css("background-color", currColor);
  $(currLegendIcon).show({easing: 'linear', effect: "fade", direction: 'left', duration: 400, complete: function() {}});
  
}
/**
 * If an edge is clicked, highlight all edges from a similar pathway (make them
 * thicker and bolder)
 */
network.on('selectEdge', function (eventObj) {
  var edgeObj = edges.get(eventObj.edges[0]);
  onEdgeSelect(edgeObj);
});

let onEdgeSelect = function(edgeObj) {
  $('#mynetwork').css('pointer-events', 'none');
  var pathwayName = pathway_descriptions[edgeObj.type]
  network.setOptions({edges: {selectionWidth: 0}});;
  network.unselectAll();

  for (var i = 1; i < 4; i++) clearLegends(i);

  setTimeout(function() {

    $('#pathway-legend-1').css("color", edgeObj.color.highlight);
    $('#pathway-legend-1').html(pathwayName[0]['name']); 
    $('#pathway-legend-1').show({easing: 'linear', effect: "slide", direction: 'left', duration: 400, complete: function() {}});

    $('#pathway-legend-icon-1').css("background-color", edgeObj.color.highlight);
    $('#pathway-legend-icon-1').show({easing: 'linear', effect: "drop", direction: 'left', duration: 400, complete: function() {}});
    
  }, 500);
  //retrieve edgeIds of edges that have similar types
  var edgeItems = edges.getIds({
    filter: function (element) {
      return (element.type === edgeObj.type);
    }
  });
  //highlight edges
  fadeInEdges(edgeItems);
  setTimeout(function() {
    $('#mynetwork').css('pointer-events', 'auto');
  }, 800);
}

let boldSelectedEdges = function(pathways) {
  //retrieve edgeIds of edges that have similar types
  network.setOptions({edges: {selectionWidth: 0}});;
  network.unselectAll();

  var edgeItems = edges.getIds({
    filter: function (element) {
      //TODO ASK SHAD ABOUT BUG POSSIBILITY
      return (element.type === pathways[0] || element.type === pathways[1] || element.type === pathways[2]);
    }
  });
  //console.log(edgeItems);
  fadeInEdges(edgeItems);
};


//boolean to disable scrolling after first click

//handler to show the course description when a user clicks on a node
let showDescriptionAndTitle = function (courseHeader, courseDescription) {
  var header = courseHeader.split(':');
  var innerText = header[0] + ':<br>' + header[1] + '</br>';
  //console.log(courseDescription);
  fadeDivOutAndIn('#course-title', innerText.toUpperCase());
  fadeDivOutAndIn('#course-description-body', courseDescription);
};

let listItemShowDescription = function(e) {
  var header = $(this).data('title');
  var description = $(this).data('description');
  showDescriptionAndTitle(header, description);
};


let highlightEdge = function(singletonEdge) {
  network.setSelection(
  {
    edges: singletonEdge
  },
  {
    unselectAll: false,
    highlightEdges: true
  }
  );
}

/**
 * Function to get edgeIds of edges that correspond to the pathway
 * 
 * @argument pathwayName: the name of pathway to get objects
 * @returns edgeObjects: => Array
 */
let getPathwayEdges = function (pathwayName) {
  var edgeObjects = edges.getIds({
    filter: function (element) {
      return (element.type === pathwayName);
    }
  });
  return edgeObjects;
};

let fadeInEdges = function(edgeItems) {
  network.selectEdges(edgeItems);
  for (var i = 0; i < 6; i += .075  ) { 
    (function(i) {
      setTimeout(function() {
        network.setOptions({
          edges: {selectionWidth: i}
        });
      }, 10 * i);
    })(i) 
  };
};

//function to scroll to final third of page when a node is clicked

var scrollToThird = function () {
  var offsetValue = $('#course-area').offset().top ;
  $('html,body').delay(500).animate({
    scrollTop: offsetValue,
    duration: 1000,
    easing: 'linear'
  });
};

network.on('dragEnd', function() {
  network.unselectAll();
}); 

//
//function to scroll to final third of page when a node is clicked


/********** */

var pathway_descriptions = {
  law_society: [
    {name: 'Law and Society',
    color : {color: '#abc9a5b3', highlight: '#dcf0d833' },
    description: 'Laws form the foundation of every society, from Sumerian city-states to international empires. Courses in this pathway explore the historical context of legal systems, their genesis, evolutions, and impact on cultures.'
  }
  ],
  borders_migration: [
    {name: 'Borders, Migration and Immigration',
     color: {color: '#7fb4a6b3', highlight: '#cdf0e733'},
     description: 'What defines a border? From nomadic steppe tribes to Syrian refugees, humans have always been on the move, crossing real and imagined boundaries. These courses delve into the cultural and political impacts of migration, such as the diffusion of culture and ideas, changing demographics, and violence. '
    }
  ],
  intell_culture: [
    { name: 'Intellectual and Cultural Life',
      color : {color: '#ffbebeb3', highlight: '#ffe1e133'},
      description: 'Courses in this pathway investigates the history of human thought, culture, and expression— in short, the things that have allowed human beings, alone among the species, to mediate their relationship to the natural world with their minds and their media of communication'
    }
  ],
  econ_history: [
    { name: 'Economic History',
      color: {color: '#ffeaeab3', highlight: '#cff1b873'},
      description: 'Economic historians seek to try and understand historical events by appealing to our knowledge of economic processes. This pathway’s courses examine the writings of classical economists, the effects of both free and protected trade, and the societal consequences of different economic systems.'
    }
  ],
  war_peace: [
    { name: 'War, Peace and Diplomacy',
      color : {color: '#fff5d5b3', highlight: '#fdfaf033'},
      description: 'Whether it be religion, resources, or personal disputes, societies have always found reasons to fight. Courses in this pathway explore the complex relationships between polities, as well as the delicate balance between war and peace which has determined the course of much of human history.'
    }
  ],
  religious_comm: [
    { name: 'Religious Communities',
    color: {color: '#eddbffb3', highlight: '#f3e7ff33'},
      description: 'For much of history, religion has formed the cultural, moral, and legal foundation of many societies. This pathway analyzes the growth of these communities, how their cultures reflected their respective doctrines, and how they existed beside and within one another.'
    }
  ],
  human_rights: [
    { name: 'Human Rights/Humanitarianism',
    color: {color: '#3b4a39b3', highlight: '#6e856b33'},
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks'
    }
  ],
  historical_methods: [
    { name: 'Historical Methods',
      color: {color: '#3f417fb3', highlight: '#9193db33'},
      description: 'How reliable are historical sources? How can you identify biases? Which ones contain the most ‘truth’. These questions, the essence of historiography, are central to a critical understanding of the past.'
    }
  ],
  gender_sexuality: [
      { name: 'Gender and Sexuality',
       color : {color: '#e77878b3', highlight: '#f9cfcf33' },
       description: 'This pathway\’s courses explore how gender varied over time and cross-culturally as a key component of politics, economics, social relations, and culture, as well as investigating the shifting perceptions of sex and sexuality in societies around the globe.'
      }
  ],
  slavery_race: [
      { name: 'Slavery and Race',
       color : {color: '#61c0bfb3', highlight: '#b1f2f133' },
       description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks'
      }
    ],
  politics_rev: [
      { name: 'Politics and Revolution',
       color : {color: '#e7eaeeb3', highlight: '#ecf0f633' },
       description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks'
      }
    ],
    space_place: [
      { name: 'Space and Place',
       color : {color: '#ff9464b3', highlight: '#ffc7ad33' },
       description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks'
      }
    ]
};