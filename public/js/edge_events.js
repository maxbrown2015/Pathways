/* Handles Clicking on Edge event as well as edge behavior on node clicks */

const setSelectionWidth = function setSelectionWidth(step) {
  setTimeout(() => {
    network.setOptions({
      edges: { selectionWidth: step },
    });
  }, 10 * step);
};

const fadeInEdges = function fadeInEdges(edgeItems) {
  network.selectEdges(edgeItems);
  for (let i = 0; i < 6; i += 0.075) {
    setSelectionWidth(i);
  }
};

const onEdgeSelect = function onEdgeSelect(edgeObj) {
  $('#mynetwork').css('pointer-events', 'none');
  const pathwayName = pathwayDescriptions[edgeObj.type];
  network.setOptions({ edges: { selectionWidth: 0 } });
  network.unselectAll();

  for (let i = 1; i < 4; i += 1) clearLegends(i);
  setIconSizes();

  setTimeout(() => {
    updateLegends(edgeObj.type, 1);
  }, 500);


  // retrieve edgeIds of edges that have similar types
  const edgeItems = edges.getIds({
    filter(element) {
      return (element.type === edgeObj.type);
    },
  });
    // highlight edges
  fadeInEdges(edgeItems);
  setTimeout(() => {
    $('#mynetwork').css('pointer-events', 'auto');
  }, 800);
};

const boldSelectedEdges = function boldSelectedEdges(pathways) {
  // retrieve edgeIds of edges that have similar types
  network.setOptions({ edges: { selectionWidth: 0 } });
  network.unselectAll();

  const edgeItems = edges.getIds({
    filter(element) {
      return (element.type === pathways[0] || element.type === pathways[1] || element.type === pathways[2]);
    },
  });
    // console.log(edgeItems);
  fadeInEdges(edgeItems);
};

network.on('selectEdge', (eventObj) => {
  console.log('select');
  const edgeObj = edges.get(eventObj.edges[0]);
  onEdgeSelect(edgeObj);
});

network.on('click', (eventObj) => {
  console.log('ccik');
  const edgeObj = edges.get(eventObj.edges);
  if (edgeObj.length === 1) {
    onEdgeSelect(edgeObj[0]);
  }
});
