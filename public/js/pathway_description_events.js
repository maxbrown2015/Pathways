
var dummy_text = 
"Laws form the foundation of every society, from Sumerian city-states to international empires. Courses in this pathway explore the historical context of legal systems, their genesis, evolutions, and impact on cultures. "

$(document).ready(function () {
    loadPathwayButtons();
    firstTime = true;
    //todo remove 
    /*
    setTimeout(function() {
      $("#page-description-wrapper").toggle({effect: "drop", direction: "up", easing: 'swing', duration: 800});
    }, 3000);
    */
});


let pathway_buttons = [];

var loadPathwayButtons = function() {
    //load margin and div size based on number of pathways
    var numberOfPathways = Object.keys(pathway_descriptions).length;
    if (numberOfPathways % 2 == 1) numberOfPathways = numberOfPathways + 1;

    var height = 100.0 / numberOfPathways;
    var margin = height * 1.5;
    //counting variable to place pathways on left or right columns
    var count = 0;
    for (var pathway in pathwaysObj) {
        var currPathway = pathwaysObj[pathway];
        //pull data from pathways object
        var name = currPathway[0].name;
        //concatenate alpha values onto color for linear gradient
        var color = currPathway[0].color.color + "DE";
        var highlightColor = currPathway[0].color.highlight + "8A";
        //var description = currPathway[0].description;
        var description = pathway_descriptions[pathway][0]['description'];

        //handle top margins for first two pathways, must be half the size
        if (count == 0 || count == 1) {
            createNewPathwayDiv(name, color, highlightColor, description, height, margin / 2.0, margin, count % 2 == 0);
        }
        //handle bottom margins for bottom two pathways
        else if (count == numberOfPathways - 2 || count == numberOfPathways - 1) {
            //if number of pathways is odd, handle the left side's bottom margin and treat the right div normal
            if (numberOfPathways % 2 == 1 && count === numberOfPathways - 2) {
                createNewPathwayDiv(name, color, highlightColor, description, height, margin, margin, count % 2 == 0);
            }
            //else adjust both divs
            else {
                createNewPathwayDiv(name, color, highlightColor, description, height, margin, margin / 2, count % 2 == 0);
            }
        }
        else {
            createNewPathwayDiv(name, color, highlightColor, description, height, margin, margin, count % 2 == 0);
        }
        count++;
    }
};

let buttonColorMap = {};

let createNewPathwayDiv = function(name, color, highlightColor, description, height, marginTop, 
    marginBottom, leftOrRight) {
    let divHeight = String(height) + "%";
    let marginTopHeight = String(marginTop) + "%";
    let marginBottomHeight = String(marginBottom) + "%";
    
    var nameArray = name.split(" ");
    var id = nameArray[0].replace(",", "") + "-button";

    var newDiv = jQuery('<div/>', {
      html: name,
      id: id,
      class: 'pathway-button col-sm-12',  
    });

    if (leftOrRight) {
        newDiv.css({"background": `linear-gradient(to right, ${color} , ${highlightColor}`, "height": `${divHeight}`, 
        "margin-top": `${marginTopHeight}`, "margin-bottom": `${marginBottomHeight}`});
        newDiv.click(function() {

          //CHANGE TO DESFRIPTION 
          fadeDescriptionDiv(name, description, highlightColor);
          setButtonColors(id);
        });
        sr.reveal(newDiv);
        newDiv.appendTo('#pathway-column-left');
    }
    else {

        newDiv.css({"background": `linear-gradient(to left, ${color} , ${highlightColor}`, "height": `${divHeight}`, 
        "margin-top": `${marginTopHeight}`, "margin-bottom": `${marginBottomHeight}`});
        newDiv.click(function() {
          //CHANGE TO DESCRIPTION
         // $(pathwayDescriptionTitle).css("color", color);
          fadeDescriptionDiv(name, description, highlightColor);
          setButtonColors(id);
        });
        sr.reveal(newDiv);
        newDiv.appendTo('#pathway-column-right');
    }

    pathway_buttons.push(newDiv);

    //mapping used to activate colors upon selection
    buttonColorMap[id] = {
      color: color,
      highlight: highlightColor,
      leftOrRight: leftOrRight
    };
};

let setButtonColors = function(element) {
  for (var key in buttonColorMap) {
    let color = buttonColorMap[key].color;
    let highlight = buttonColorMap[key].highlight;
    let leftOrRight = buttonColorMap[key].leftOrRight;
    if (key === element) {
      setActiveColor(key, color);
    }
    else {
      setRestingColor(key, color, highlight, leftOrRight);
    }
  }
};

$("#shield-start").click(function() {
  $("#page-description-wrapper").toggle({effect: "drop", direction: "up", easing: 'swing', duration: 800});
});

let fadeDescriptionDiv = function(title, text, color) {
  $('#pathway-description-wrapper').hide({easing: "linear", effect: "fade", direction: 'up', duration: 400, complete: function() {
    $('#pathway-description-title').html(title);
    $('#pathway-description-title').css("color", color);
    $('#pathway-description-text').html(text);
    $(this).show({easing: 'linear', effect: "fade", direction: 'down', duration: 400, complete: function() {}});
  }});
}

let fadeDivOutAndIn  = function(selector, text) {
  $(selector).fadeOut(400, function() {
      $(this).html(text);
  }).fadeIn(400);
}

let setActiveColor = function(id, color) {
  var selector = document.getElementById(id);
  $(selector).css("background", color);
};

let setRestingColor = function(id, color, highlight, leftOrRight) {
  var selector = document.getElementById(id);
  if (leftOrRight) $(selector).css("background", `linear-gradient(to right, ${color} , ${highlight}`);
  else $(selector).css("background", `linear-gradient(to left, ${color} , ${highlight}`);
};



