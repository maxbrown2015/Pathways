/* File Contains Methods that add and remove bootstrap classes based on the number of pathways per selected node */

const clearLegends = function (currCol) {
  const currLegend = `#pathway-legend-${currCol}`;
  const currLegendIcon = `#pathway-legend-icon-${currCol}`;

  $(currLegendIcon).hide({
    easing: 'linear',
    effect: 'fade',
    direction: 'left',
    duration: 400,
    complete() {
      $(this).empty();
    },
  });

  $(currLegend).hide({
    easing: 'linear',
    effect: 'fade',
    direction: 'left',
    duration: 400,
    complete() {
      $(this).empty();
    },
  });
};


const clearPathwayDivs = function clearPathwayDivs(currCol) {
  const currSectionHeader = `#pathway-header-${currCol}`;
  const currGraphHeader = `#graph-header-${currCol}`;
  const currLi = `#path-list-${currCol}`;

  clearLegends(currCol);

  $(currSectionHeader).fadeOut(() => {
    $(this).empty();
  });
  $(currGraphHeader).fadeOut(() => {
    $(currGraphHeader).empty();
  });
  $(currLi).fadeOut(() => {
    $(this).empty();
  });
};


const setColumnSizes = function setColumnSizes(numberOfPathways, idString) {
  const path1 = document.getElementById(`${idString}1`);
  const path2 = document.getElementById(`${idString}2`);
  const path3 = document.getElementById(`${idString}3`);
  $(path1).removeClass();
  $(path2).removeClass();
  $(path3).removeClass();
  if (numberOfPathways === 1) {
    $(path1).addClass('col-lg-12');
  } else if (numberOfPathways === 2) {
    $(path1).addClass('col-lg-6');
    $(path2).addClass('col-lg-6');
  } else {
    $(path1).addClass('col-lg-4');
    $(path2).addClass('col-lg-4');
    $(path3).addClass('col-lg-4');
  }
};
// handler for clicking on pathway lists in bottom area

const hoverInListItem = function hoverInListItem() {
  // console.log("inlist called");
  $(this).css('font-size', '1.25em');
};

const hoverOutListItem = function hoverOutListItem() {
  // console.log("inlist hover out called");
  $(this).css('font-size', '1em');
};

const hoverInHeader = function hoverInHeader() {
  $(this).css('font-size', '1.5em');
};
  // hover out
const hoverOutHeader = function hoverOutHeader() {
  $(this).css('font-size', '1.25em');
};
