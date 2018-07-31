

const pathwayButtons = [];
const buttonColorMap = {};

const setActiveColor = function setActiveColor(id, color) {
  const selector = document.getElementById(id);
  $(selector).css('background', color);
};

const setRestingColor = function setRestingColor(id, color, highlight, leftOrRight) {
  const selector = document.getElementById(id);
  if (leftOrRight) $(selector).css('background', `linear-gradient(to right, ${color} , ${highlight}`);
  else $(selector).css('background', `linear-gradient(to left, ${color} , ${highlight}`);
};


const setButtonColors = function setButtonColors(element) {
  const keys = Object.keys(buttonColorMap);
  keys.forEach((key) => {
    if (key) {
      const color = buttonColorMap[key].color;
      const highlight = buttonColorMap[key].highlight;
      const leftOrRight = buttonColorMap[key].leftOrRight;
      if (key === element) {
        setActiveColor(key, color);
      } else {
        setRestingColor(key, color, highlight, leftOrRight);
      }
    }
  });
};

const fadeDescriptionDiv = function (title, text, color) {
  $('#pathway-description-wrapper').hide({
    easing: 'linear',
    effect: 'fade',
    direction: 'up',
    duration: 400,
    complete() {
      $('#pathway-description-title').html(title);
      $('#pathway-description-title').css('color', color);
      $('#pathway-description-text').html(text);
      $(this).show({
        easing: 'linear', effect: 'fade', direction: 'down', duration: 400,
      });
    },
  });
};

const fadeDivOutAndIn = function (selector, text) {
  $(selector).fadeOut(400, function () {
    $(this).html(text);
  }).fadeIn(400);
};

const createNewPathwayDiv = function createNewPathwayDiv(pathway, height, marginTop,
  marginBottom, leftOrRight) {
  const divHeight = `${String(height)}%`;
  const marginTopHeight = `${String(marginTop)}%`;
  const marginBottomHeight = `${String(marginBottom)}%`;

  const currPathway = pathwaysObj[pathway];
  // pull data from pathways object
  const name = currPathway[0].name;
  // concatenate alpha values onto color for linear gradient
  const color = `${currPathway[0].color.color}DE`;
  const highlightColor = `${currPathway[0].color.highlight}8A`;
  // var description = currPathway[0].description;
  const description = pathwayDescriptions[pathway][0].description;

  const nameArray = name.split(' ');
  const id = `${nameArray[0].replace(',', '')}-button`;

  const newDiv = jQuery('<div/>', {
    html: name,
    id,
    class: 'pathway-button col-sm-12',
  });

  if (leftOrRight) {
    newDiv.css({
      background: `linear-gradient(to right, ${color} , ${highlightColor}`,
      height: `${divHeight}`,
      'margin-top': `${marginTopHeight}`,
      'margin-bottom': `${marginBottomHeight}`,
    });

    newDiv.appendTo('#pathway-column-left');
  } else {
    newDiv.css({
      background: `linear-gradient(to left, ${color} , ${highlightColor}`,
      height: `${divHeight}`,
      'margin-top': `${marginTopHeight}`,
      'margin-bottom': `${marginBottomHeight}`,
    });

    newDiv.appendTo('#pathway-column-right');
  }

  sr.reveal(newDiv);

  newDiv.click(() => {
    // CHANGE TO DESCRIPTION
    // $(pathwayDescriptionTitle).css("color", color);
    fadeDescriptionDiv(name, description, highlightColor);
    setButtonColors(id);
    $('body').css('pointer-events', 'none');
    for (let i = 1; i < 4; i += 1) clearLegends(i);
    setTimeout(() => {
      updateLegends(pathway, 1);
      setTimeout(() => {
        $('body').css('pointer-events', 'auto');
        boldSelectedEdges([pathway]);
      }, 500);
    }, 400);
  });

  pathwayButtons.push(newDiv);

  // mapping used to activate colors upon selection
  buttonColorMap[id] = {
    color,
    highlight: highlightColor,
    leftOrRight,
  };
};

const loadPathwayButtons = function loadPathwayButtons() {
  // load margin and div size based on number of pathways
  let numberOfPathways = Object.keys(pathwayDescriptions).length;
  if (numberOfPathways % 2 === 1) numberOfPathways += 1;

  const height = 100.0 / numberOfPathways;
  const margin = height * 1.5;
  // counting variable to place pathways on left or right columns
  const pathwayKeys = Object.keys(pathwaysObj);
  pathwayKeys.forEach((pathway, count) => {
    if (pathway) {
      // handle top margins for first two pathways, must be half the size
      if (count === 0 || count === 1) {
        createNewPathwayDiv(pathway, height, margin / 2.0, margin, count % 2 === 0);
      } else if (count === numberOfPathways - 2 || count === numberOfPathways - 1) {
        // handle bottom margins for bottom two pathways
        if (numberOfPathways % 2 === 1 && count === numberOfPathways - 2) {
          createNewPathwayDiv(pathway, height, margin, margin, count % 2 === 0);
        } else {
          createNewPathwayDiv(pathway, height, margin, margin / 2, count % 2 === 0);
        }
      } else {
        createNewPathwayDiv(pathway, height, margin, margin, count % 2 === 0);
      }
    }
  });
};

$('#shield-start').click(() => {
  $('#page-description-wrapper').toggle({
    effect: 'drop', direction: 'up', easing: 'swing', duration: 800,
  });
});


$(document).ready(() => {
  loadPathwayButtons();
  //$('#page-description-wrapper').hide();
});
