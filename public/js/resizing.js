/*File Contains Methods that add and remove bootstrap classes based on the number of pathways per selected node*/

var clearPathwayDivs = function(currCol) {
    var currSectionHeader = "#pathway-header-" + currCol;
    var currGraphHeader = "#graph-header-" + currCol;
    var currLi = '#path-list-' + currCol;

    clearLegends(currCol);
    
    $(currSectionHeader).fadeOut(function(){
      $(this).empty();
    });
    $(currGraphHeader).fadeOut(function() {
      $(currGraphHeader).empty();
    });
    $(currLi).fadeOut(function() {
      $(this).empty();
    });
  }


let setColumnSizes = function(numberOfPathways, idString) {

    let path1 = document.getElementById(idString + "1");
    let path2 = document.getElementById(idString + "2");
    let path3 = document.getElementById(idString + "3");
    $(path1).removeClass();
    $(path2).removeClass();
    $(path3).removeClass();
      if (numberOfPathways === 1) {
        $(path1).addClass("col-lg-12");
      }
      else if (numberOfPathways === 2) {
        $(path1).addClass("col-lg-6");
        $(path2).addClass("col-lg-6");
      }
      else {
        $(path1).addClass("col-lg-4");
        $(path2).addClass("col-lg-4");
        $(path3).addClass("col-lg-4");
      }
  };

  let clearLegends = function(currCol) {
    var currLegend = "#pathway-legend-" + currCol;
    var currLegendIcon = "#pathway-legend-icon-" + currCol;

    $(currLegendIcon).hide({easing: "linear", effect: "fade", direction: 'left', duration: 400, complete: function() {
        $(this).empty();
      }});

    $(currLegend).hide({easing: "linear", effect: "fade", direction: 'left', duration: 400, complete: function() {
        $(this).empty();
      }});
  }

  //handler for clicking on pathway lists in bottom area
  
  var hoverInListItem = function() {
    //console.log("inlist called");
    $(this).css("font-size", "1.125em");
  };
  
  var hoverOutListItem = function () {
    //console.log("inlist hover out called");
    $(this).css("font-size", "1em");
  };
  
  var hoverInHeader = function() {
    $(this).css("font-size", "1.5em");
  };
  //hover out
  var hoverOutHeader = function() {
    $(this).css("font-size", "1.25em");
  };