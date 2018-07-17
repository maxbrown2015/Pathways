const pathway_descriptions = {
  law_society: [
    {
      name: 'Law and Society',
      color: { color: '#8b4789b3', highlight: '#ebd1ea33' },
      description: 'Lorem Ipsum',
    },
  ],
  borders_migration: [
    {
      name: 'Borders, Migration and Immigration',
      color: { color: '#00abffb3', highlight: '#dbf3ff33' },
      description: 'Lorem Ipsum',
    },
  ],
  intell_culture: [
    {
      name: 'Intellectual and Cultural Life',
      color: { color: '#ffa500b3', highlight: '#f1debb73' },
      description: 'Lorem Ipsum',
    },
  ],
  econ_history: [
    {
      name: 'Economic History',
      color: { color: '#00ff33b3', highlight: '#cff1b873' },
      description: 'Lorem Ipsum',
    },
  ],
  war_peace: [
    {
      name: 'War, Peace and Diplomacy',
      color: { color: '#ffc0cbb3', highlight: '#ffeaee4d' },
      description: 'Lorem Ipsum',
    },
  ],
  religious_comm: [
    {
      name: 'Religious Communities',
      color: { color: '#40e0d0b3', highlight: '#cffffa4d' },
      description: 'Lorem Ipsum',
    },
  ],
  human_rights: [
    {
      name: 'Human Rights/Humanitarianism',
      color: { color: '#a52a2ab3', highlight: '#ffb9b933' },
      description: 'Lorem Ipsum',
    },
  ],
  historical_methods: [
    {
      name: 'Historical Methods',
      color: { color: '#a52a2ab3', highlight: '#ffb9b933' },
      description: 'Lorem Ipsum',
    },
  ],
  gender_sexuality: [
    {
      name: 'Gender and Sexuality',
      color: { color: '#ffff66b3', highlight: '#f5f5d173' },
      description: 'Lorem Ipsum',
    },
  ],
  slavery_race: [
    {
      name: 'Slavery and Race',
      color: { color: '#7563c4b3', highlight: '#d4caff33' },
      description: 'Lorem Ipsum',
    },
  ],
  politics_revolution: [
    {
      name: 'Politics and Revolution',
      color: { color: '#ff6666b3', highlight: '#f7b7b733' },
      description: 'Lorem Ipsum',
    },
  ],
  spaece_place: [
    {
      name: 'Space and Place',
      color: { color: '#c792c7b3', highlight: '#ffdaff4d' },
      description: 'Lorem Ipsum',
    },
  ],
  er_sexlity: [
    {
      name: 'er and Sexuality',
      color: { color: '#ffff66', highlight: '#ffff66' },
      description: 'Lorem Ipsum',
    },
  ],
  der_uality: [
    {
      name: 'r and Sexuality',
      color: { color: '#ffff66', highlight: '#ffff66' },
      description: 'Lorem Ipsum',
    },
  ],
  der_ality: [
    {
      name: 'and Sexuality',
      color: { color: '#ffff66', highlight: '#ffff66' },
      description: 'Lorem Ipsum',
    },
  ],
};


const dummy_text = 'Laws form the foundation of every society, from Sumerian city-states to international empires. Courses in this pathway explore the historical context of legal systems, their genesis, evolutions, and impact on cultures. ';


const pathway_buttons = [];

let loadPathwayButtons = () => {
  // load margin and div size based on number of pathways
  let numberOfPathways = Object.keys(pathway_descriptions).length;
  if (numberOfPathways % 2 == 1) numberOfPathways += 1;

  const height = 100.0 / numberOfPathways;
  const margin = height * 2;
  // counting variable to place pathways on left or right columns
  let count = 0;
  for (const pathway in pathway_descriptions) {
    const currPathway = pathway_descriptions[pathway];
    // pull data from pathways object
    const name = currPathway[0].name;
    const color = currPathway[0].color.color;
    const highlightColor = currPathway[0].color.highlight;
    const description = currPathway[0].description;

    // handle top margins for first two pathways, must be half the size
    if (count == 0 || count == 1) {
      createNewPathwayDiv(name, color, highlightColor, description, height, margin / 2.0, margin, count % 2 == 0);
    }
    // handle bottom margins for bottom two pathways
    else if (count == numberOfPathways - 2 || count == numberOfPathways - 1) {
      // if number of pathways is odd, handle the left side's bottom margin and treat the right div normal
      if (numberOfPathways % 2 == 1 && count === numberOfPathways - 2) {
        createNewPathwayDiv(name, color, highlightColor, description, height, margin, margin, count % 2 == 0);
      }
      // else adjust both divs
      else {
        createNewPathwayDiv(name, color, highlightColor, description, height, margin, margin / 2, count % 2 == 0);
      }
    } else {
      createNewPathwayDiv(name, color, highlightColor, description, height, margin, margin, count % 2 == 0);
    }
    count++;
  }
};

$(document).ready(() => {
  loadPathwayButtons();
  $('#page-description-wrapper').hide();
});



const buttonColorMap = {};

let createNewPathwayDiv = (name, color, highlightColor, description, height, marginTop,
  marginBottom, leftOrRight) => {
  const divHeight = `${String(height)}%`;
  const marginTopHeight = `${String(marginTop) }%`;
  const marginBottomHeight = `${String(marginBottom)}%`;

  const nameArray = name.split(' ');
  const id = `${nameArray[0].replace(',', '')}-button`;

  const newDiv = jQuery('<div/>', {
    html: name,
    id,
    class: 'pathway-button col-sm-12',
  });

  const pathwayDescriptionText = document.getElementById('pathway-description-text');
  const pathwayDescriptionTitle = document.getElementById('pathway-description-title');

  if (leftOrRight) {
    newDiv.css({
      background: `linear-gradient(to right, ${color} , ${highlightColor}`,
      height: `${divHeight}`,
      'margin-top': `${marginTopHeight}`,
      'margin-bottom': `${marginBottomHeight}`,
    });
    newDiv.click(() => {
      $(pathwayDescriptionTitle).css('color', color);
      // CHANGE TO DESFRIPTION
      fadeDivOutAndIn(pathwayDescriptionTitle, name);
      fadeDivOutAndIn(pathwayDescriptionText, dummy_text);
      setButtonColors(id);
    });
    newDiv.appendTo('#pathway-column-left');
  } else {
    newDiv.css({
      background: `linear-gradient(to left, ${color} , ${highlightColor}`,
      height: `${divHeight}`,
      'margin-top': `${marginTopHeight}`,
      'margin-bottom': `${marginBottomHeight}`,
    });
    newDiv.click(() => {
      // CHANGE TO DESCRIPTION
      $(pathwayDescriptionTitle).css('color', color);
      fadeDivOutAndIn(pathwayDescriptionTitle, name);
      fadeDivOutAndIn(pathwayDescriptionText, dummy_text);
      setButtonColors(id);
    });

    newDiv.appendTo('#pathway-column-right');
  }

  // mapping used to activate colors upon selection
  buttonColorMap[id] = {
    color,
    highlight: highlightColor,
    leftOrRight,
  };
};

let setButtonColors = (element) => {
  for (const key in buttonColorMap) {
    const color = buttonColorMap[key].color;
    const highlight = buttonColorMap[key].highlight;
    const leftOrRight = buttonColorMap[key].leftOrRight;
    if (key === element) {
      setActiveColor(key, color);
    } else {
      setRestingColor(key, color, highlight, leftOrRight);
    }
  }
};

$('#shield-start').click(() => {
  $('#page-description-wrapper').toggle({ easing: 'linear', duration: 800 });
});

let fadeDivOutAndIn = function (selector, text) {
  $(selector).fadeOut(function () {
    $(this).html(text);
  }).fadeIn();
};

let setActiveColor = (id, color) => {
  const selector = document.getElementById(id);
  $(selector).css('background', color);
};

let setRestingColor = (id, color, highlight, leftOrRight) => {
  const selector = document.getElementById(id);
  if (leftOrRight) $(selector).css('background', `linear-gradient(to right, ${color} , ${highlight}`);
  else $(selector).css('background', `linear-gradient(to left, ${color} , ${highlight}`);
};
