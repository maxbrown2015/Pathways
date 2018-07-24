/* Handles click events for the dynamically appearing legends in the  */

const growIcon = function growIcon(icon) {
  if (!($(icon).hasClass('.active'))) {
    $(icon).animate({
      height: '+=.50em',
      width: '+=.50em',
    }, 300);
  }
};

const shrinkIcon = function shrinkIcon(icon) {
  if ($(icon).hasClass('.active')) {
    $(icon).animate({
      height: '-=.50em',
      width: '-=.50em',
    }, 300);
  }
};

const setIconSizes = function setIconSizes(selected) {
  for (let i = 1; i < 4; i += 1) {
    const currLegendIcon = `#pathway-legend-icon-${i}`;
    if (currLegendIcon === selected) {
      growIcon(currLegendIcon);
      $(currLegendIcon).addClass('.active');
    } else {
      shrinkIcon(currLegendIcon);
      $(currLegendIcon).removeClass('.active');
    }
  }
};

const updateLegends = function updateLegends(pathway, currCol) {
  const currPath = pathwaysObj[pathway];
  const currLegend = `#pathway-legend-${currCol}`;
  const currLegendIcon = `#pathway-legend-icon-${currCol}`;
  const currColor = currPath[0].color.color;

  $(currLegend).css('color', currColor);
  $(currLegend).html(currPath[0].name);
  $(currLegend).show({
    easing: 'linear', effect: 'slide', direction: 'left', duration: 400, complete() {},
  });

  $(currLegendIcon).css('background-color', currColor);
  $(currLegendIcon).show({
    easing: 'linear', effect: 'fade', direction: 'left', duration: 400, complete() {},
  });

  $(currLegendIcon).click(() => {
    boldSelectedEdges([pathway]);
    setTimeout(() => { setIconSizes(currLegendIcon); }, 200);
  });
};
