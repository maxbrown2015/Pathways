/* File Contains Logic and Code for handling when the user clicks on a Node (course) in the Vis.js network */

let firstTime = true;


const updatePathwayLists = function updatePathwayLists(pathway, currPath) {
  $(pathway).fadeOut(() => {
    $(pathway).empty();
    // for loop indexed at 1 to prevent access of pathway's name and color object
    for (let i = 1; i < currPath.length; i += 1) {
      const $li = $('<li></li>').text(currPath[i].label);

      // store course data for click handler
      $li.data('title', currPath[i].label);
      $li.data('description', currPath[i].courseDescription);

      // attach click handler.
      $li.click(listItemShowDescription);
      $li.hover(hoverInListItem, hoverOutListItem);
      // $(pathway).append($li);
      $($li).hide().appendTo(pathway).fadeIn();
    }
  }).fadeIn();
};


const updatePathwayCourseListings = function updatePathwayCourseListings(pathway, currCol) {
  // console.log(pathway);
  const currPath = pathwaysObj[pathway];
  const currSectionHeader = `#pathway-header-${currCol}`;
  const currGraphHeader = `#graph-header-${currCol}`;
  const currLi = `#path-list-${currCol}`;
  const currColor = currPath[0].color.highlight;

  $(currSectionHeader).css('color', currColor);
  $(currGraphHeader).css('color', currColor);

  // set hover in and out effects for pathway list Headers
  $(currSectionHeader).hover(hoverInHeader, hoverOutHeader);
  $(currSectionHeader).fadeOut(function fadeSection() {
    $(this).html(currPath[0].name);
  }).fadeIn();

  updatePathwayLists(currLi, currPath);
};


const onNodeSelect = function onNodeSelect(nodeObj) {
  $('#course-area').css('display', 'block');
  $('#mynetwork').css('pointer-events', 'none');

  const pathways = nodeObj.pathways;
  const numberOfPathways = Object.keys(pathways).length;

  // clear old text
  for (let i = 0; i < 3; i += 1) clearPathwayDivs(i + 1);
  // adjust bootstrap divs to fit number of pathways
  boldSelectedEdges(pathways);
  setTimeout(() => {
    for (let i = 0; i < 3; i += 1) {
      if (pathways[i]) { updateLegends(pathways[i], i + 1); }
    }
  }, 450);

  setTimeout(() => {
    let description = nodeObj.courseDescription;
    if (nodeObj.courseDescription === 'missing course description') {
      description = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
    }
    showDescriptionAndTitle(nodeObj.title, description);
    // make the main thread wait 400ms for fadeOut (called in clearPathwayDivs) to finish
    setTimeout(() => {
      /*
        $('#course-type').html("Course Type: " + "  Lecture");
        $('#course-instructor').html("Instructor: " + "  Professor WhatsHisName");
        */
      // adjust bootstrap classes based on the number of pathways
      setColumnSizes(numberOfPathways, 'pathway-');
      setColumnSizes(numberOfPathways, 'graph-header-');

      for (let i = 0; i < 3; i += 1) {
        // console.log(pathways[i]);
        // if pathway exists, replace the old list with the new pathway's courses
        if (pathways[i]) {
          // i+1 refers to the current column being set
          updatePathwayCourseListings(pathways[i], i + 1);
        }
      }
      // displaydescription and title
      $('#mynetwork').css('pointer-events', 'auto');
    }, 800);
  }, 200);
};

network.on('selectNode', (eventObj) => {
  const nodeObj = nodes.get(eventObj.nodes[0]);
  console.log(eventObj);
  if (firstTime) {
    startTour(nodeObj);
    firstTime = false;
    return;
  }
  onNodeSelect(nodeObj);
});

network.on('dragEnd', () => {
  network.unselectAll();
});
