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
    barnesHut: {
      avoidOverlap: 0.5,
    },
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
        enabled: true,
      },
    },
    shape: 'circle',
    value: 20,
  },
  layout: {
    randomSeed: 88145,
  },
};


// initialize the network
const network = new vis.Network(container, data, options);

window.onresize = () => { network.fit(); };

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

// handler to show the course description when a user clicks on a node

/**
 * If a node is clicked, populate lower half of page with list of courses that
 * share the same pathways.
 */

$(document).ready(() => {
  setTimeout(() => { network.setOptions(noPhysiscsOption); }, 3000);
});

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
};
/**
 * If an edge is clicked, highlight all edges from a similar pathway (make them
 * thicker and bolder)
 */
// boolean to disable scrolling after first click
const showDescriptionAndTitle = (courseHeader, courseDescription) => {
  const header = courseHeader.split(':');
  const innerText = `${header[0]}:<br>${header[1]}</br>`;
  fadeDivOutAndIn('#course-title', innerText);
  fadeDivOutAndIn('#course-description-body', courseDescription);
};

// handler for clicking on pathway lists in bottom area
const listItemShowDescription = function listItemShowDescription() {
  const header = $(this).data('title');
  const description = $(this).data('description');
  showDescriptionAndTitle(header, description);
};

const pathwayDescriptions = {
  law_society: [
    {
      name: 'Law and Society',
      color: { color: '#abc9a5b3', highlight: '#dcf0d833' },
      description: 'Laws form the foundation of every society, from Sumerian city-states to international empires. Courses in this pathway explore the historical context of legal systems, their genesis, evolutions, and impact on cultures.',
    },
  ],
  borders_migration: [
    {
      name: 'Borders, Migration and Immigration',
      color: { color: '#7fb4a6b3', highlight: '#cdf0e733' },
      description: 'What defines a border? From nomadic steppe tribes to Syrian refugees, humans have always been on the move, crossing real and imagined boundaries. These courses delve into the cultural and political impacts of migration, such as the diffusion of culture and ideas, changing demographics, and violence. ',
    },
  ],
  intell_culture: [
    {
      name: 'Intellectual and Cultural Life',
      color: { color: '#ffbebeb3', highlight: '#ffe1e133' },
      description: 'Courses in this pathway investigates the history of human thought, culture, and expression— in short, the things that have allowed human beings, alone among the species, to mediate their relationship to the natural world with their minds and their media of communication',
    },
  ],
  econ_history: [
    {
      name: 'Economic History',
      color: { color: '#ffeaeab3', highlight: '#cff1b873' },
      description: 'Economic historians seek to try and understand historical events by appealing to our knowledge of economic processes. This pathway’s courses examine the writings of classical economists, the effects of both free and protected trade, and the societal consequences of different economic systems.',
    },
  ],
  war_peace: [
    {
      name: 'War, Peace and Diplomacy',
      color: { color: '#fff5d5b3', highlight: '#fdfaf033' },
      description: 'Whether it be religion, resources, or personal disputes, societies have always found reasons to fight. Courses in this pathway explore the complex relationships between polities, as well as the delicate balance between war and peace which has determined the course of much of human history.',
    },
  ],
  religious_comm: [
    {
      name: 'Religious Communities',
      color: { color: '#eddbffb3', highlight: '#f3e7ff33' },
      description: 'For much of history, religion has formed the cultural, moral, and legal foundation of many societies. This pathway analyzes the growth of these communities, how their cultures reflected their respective doctrines, and how they existed beside and within one another.',
    },
  ],
  human_rights: [
    {
      name: 'Human Rights/Humanitarianism',
      color: { color: '#3b4a39b3', highlight: '#6e856b33' },
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks',
    },
  ],
  historical_methods: [
    {
      name: 'Historical Methods',
      color: { color: '#3f417fb3', highlight: '#9193db33' },
      description: 'How reliable are historical sources? How can you identify biases? Which ones contain the most ‘truth’. These questions, the essence of historiography, are central to a critical understanding of the past.',
    },
  ],
  gender_sexuality: [
    {
      name: 'Gender and Sexuality',
      color: { color: '#e77878b3', highlight: '#f9cfcf33' },
      description: 'This pathway’s courses explore how gender varied over time and cross-culturally as a key component of politics, economics, social relations, and culture, as well as investigating the shifting perceptions of sex and sexuality in societies around the globe.',
    },
  ],
  slavery_race: [
    {
      name: 'Slavery and Race',
      color: { color: '#61c0bfb3', highlight: '#b1f2f133' },
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks',
    },
  ],
  politics_rev: [
    {
      name: 'Politics and Revolution',
      color: { color: '#e7eaeeb3', highlight: '#ecf0f633' },
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks',
    },
  ],
  space_place: [
    {
      name: 'Space and Place',
      color: { color: '#ff9464b3', highlight: '#ffc7ad33' },
      description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks',
    },
  ],
};

/*
const getPathwayEdges = function getPathwayEdges(pathwayName) {
  const edgeObjects = edges.getIds({
    filter(element) {
      return (element.type === pathwayName);
    },
  });
  return edgeObjects;
};
*/
