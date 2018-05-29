/**
 * This file stores the data required to construct the graph i.e the edges and the nodes.
 * The edges are stored as an array of objects, whereby the objects store the properties of the edge.
 * The nodes are stored in a similar manner with the same logic.
 *
 * To add a new node simply create a new object with the relevant properties and append it to the array(make
 * sure to AVOID SYNTAX ERRORS!!). The same process should be followed when adding new edges.
 *
 * Creating a new edge, the format is as follows:
 * {
 *  id: (this is a unique number represented as a string),
 *  type: (the edges link course in the same pathway, the type is simply the Pathway that the nodes
 *        to be connected belong to. This disitinction is useful when coloring the edges to indicate different pathways),
 *  from: (this is the ID of the node to be connected)
 *  to: (this is the ID of the other node to be connected)
 *  color: {
 *    {color: (the color of the edge. Each pathway has it's own unique color. See key below for the color mappings)
 *     highlight: (same as above, this is just for the color when the edge has been clicked by a user)
 *    }
 *  }
 *
 */

var edges = new vis.DataSet ([
  {
    id: '0',
    type: 'gender_sexuality',
    from: '011',
    to: '145',
    color : {color: '#ffff66', highlight: '#ffff66' }
  },

  {
    id: '1',
    type: 'slavery_race',
    from: '011',
    to: '070',
    color : {color: '#c4a464', highlight: '#c4a464'}
  },

  {
    id: '2',
    type: 'politics_rev',
    from: '011',
    to: '030',
    color : {color: '#FF6666', highlight: '#FF6666'}
  },

  {
    id: '3',
    type: 'econ_history',
    from: '030',
    to: '040',
    color : {color: '#00FF33', highlight: '#00FF33'}
  },
  {
    id: '4',
    type: 'war_peace',
    from: '030',
    to: '031',
    color : {color: '#ffc0cb', highlight: '#ffc0cb'}
  },
  {
    id: '5',
    type: 'politics_rev',
    from: '030',
    to: '031',
    color : {color: '#FF6666', highlight: '#FF6666'}
  },
  {
    id: '6',
    type: 'intell_culture',
    from: '031',
    to: '040',
    color : {color: '#ffa500', highlight: '#ffa500'}
  },
  {
    id: '7',
    type: 'war_peace',
    from: '031',
    to: '048',
    color : {color: '#ffc0cb', highlight: '#ffc0cb'}
  },
  {
    id: '8',
    type: 'politics_rev',
    from: '031',
    to: '048',
    color : {color: '#FF6666', highlight: '#FF6666'}
  },
  {
    id: '9',
    type: 'intell_culture',
    from: '040',
    to: '048',
    color : {color: '#ffa500', highlight: '#ffa500'}
  },
  {
    id: '10',
    type: 'econ_history',
    from: '040',
    to: '049',
    color : {color: '#00FF33', highlight: '#00FF33'}
  },
  {
    id: '11',
    type: 'religious_comm',
    from: '040',
    to: '050',
    color : {color: '#40e0d0', highlight: '#40e0d0'}
  },
  {
    id: '12',
    type: 'intell_culture',
    from: '048',
    to: '049',
    color : {color: '#ffa500', highlight: '#ffa500'}
  },
  {
    id: '13',
    type: 'war_peace',
    from: '048',
    to: '051',
    color : {color: '#ffc0cb', highlight: '#ffc0cb'}
  },
  {
    id: '14',
    type: 'politics_rev',
    from: '048',
    to: '049',
    color : {color: '#FF6666', highlight: '#FF6666'}
  }
]);

var nodes = new vis.DataSet([
  {
    id: '011',
    title:'HIST-011: Deciphering America',
    label: 'HIST-011',
    courseDescription: 'This course examines American history from the first contacts of the indigenous peoples of North America with European settlers to our own times by focusing on a few telling moments in this history. The course treats twelve of these moments. Each unit begins with a specific primary document, historical figure, image, location, year, or cultural artifact to commence the delving into the American past. Some of these icons are familiar, but the ensuing deciphering will render them as more complicated; some are unfamiliar, but they will emerge as absolutely telling. The course meets each week for two 50-minute team-taught lectures and once recitation session. Course requirements include: in-class midterm and final exams; three short paper assignments; and punctual attendance and participation in recitations.',
    pathways: ['gender_sexuality', 'slavery_race', 'politics_rev']
  },
  {
    id: '030',
    title:'HIST-030: Emergence of Modern Europe',
    label: 'HIST-030',
    courseDescription: 'This course traces the formation of European society, politics and culture from its earliest days through the era of the Reformation, ca. 1000-1600 CE. Major themes will include: politics and power; law and the state; economics and trade; religion; learning and the rise of universities; social organization; everyday life. The reading and analysis of primary sources from each era will be important in understanding Europe\'s key features and development.',
    pathways: ['politics_rev', 'econ_history', 'war_peace']
  },
  {
    id: '031',
    title:'HIST-031: Making or Breaking European Hegemony',
    label:'HIST-031',
    courseDescription: 'Hist 031 will trace the dramatic rise and fall of Europe\'s global hegemony during the period roughly from 1450 to 1950. Among the major themes we will examine are: states and power, borders and resistance, race and genocide, economies and oppression, ideas and revolution, the building and change of hierarchies of gender and power. Truly, a dramatic story. The objectives of the course are: 1) To serve as an introduction to the study of history for majors and non-majors alike, and to teach the critical analysis of historical sources; 2) to teach substantive knowledge of European history; 3) to provide a foundation for further study of the European past. No previous background in European or World history is required.',
    pathways: ['war_peace', 'politics_rev', 'intell_culture']
  },
  {
    id: '040',
    title:'HIST-040: Early Modern Europe, 1450 - 1750',
    label:'HIST-040',
    courseDescription: 'This course examines those European developments which contributed to the world we understand as modern. Special emphasis will be placed on the transformation of Europe through the advent of new technologies, the creation of a global economy, the consolidation of territorial states, the rise of effective, central governments, the dissolution of religious unity, and the dialect between modern and traditional world views.',
    pathways: ['econ_history', 'intell_culture', 'religious_comm']
  },
  {
    id: '048',
    title: 'HIST-048: Rise and Fall of the Russian Empire, 1522 - 1917',
    label: 'HIST-048',
    courseDescription: 'Russian Description Goes Here',
    pathways: ['war_peace', 'politics_rev', 'intell_culture']
  },
  {
    id: '049',
    title: 'HIST-049: The Soviet Century, 1917-1991',
    label: 'HIST-049',
    courseDescription: 'Out of an obscure, backward empire, the Soviet Union emerged to become the great political laboratory of the twentieth century. This course will trace the roots of the world\'s first socialist society and its attempts to recast human relations and human nature itself. Topics include the origins of the Revolution of 1917, the role of ideology in state policy and everyday life, the Soviet Union as the center of world communism, the challenge of ethnic diversity, and the reasons for the USSR\'s sudden implosion at the end of the century.Focusing on politics, society, culture, and their interaction, we will examine the rulers (from Lenin to Gorbachev) as well as the ruled (peasants, workers, and intellectuals; Russians and non-Russians). The course will feature discussions of selected texts, including primary sources in translation.',
    pathways: ['econ_history', 'politics_rev', 'intell_culture']
  },
  {
    id: '050',
    title: 'HIST-050: British Isles',
    label: 'HIST-050',
    courseDescription: 'British Isles Description Goes Here',
    pathways: ['econ_history', 'politics_rev', 'intell_culture']
  },
  {
    id: '051',
    title: 'HIST-051: Modern Britain',
    label: 'HIST-051',
    courseDescription: 'This course surveys British history from the eighteenth century to the present. In the first two centuries we\'ll study, Britain built an empire that ruled over a quarter of the globe and became the world\'s leading economy. In 2016, the Empire is gone, but coincident with its loss, Britain gained a welfare state and retained a role as a powerhouse of culture and finance. Themes emphasized in the course include national identity, class, political reform, war, and imperialism. How did Britain come to dominate the global economy and what did this dominance look like? How should we understand its role in the world today? Do the Beatles, the Royal Family, and Amy Winehouse add up to a "Cool Britannia" that has somehow "made up" for the loss of the Empire? How will the recent Brexit vote shape Britain\'s status in the future? Using written and visual primary sources, we\'ll look at all of these questions as we study the birth and development of modern Britain.',
    pathways: ['war_peace', 'politics_rev', 'intell_culture']
  },
  {
    id: '070',
    title: 'HIST-070: Colonial Latin America',
    label: 'HIST-070',
    courseDescription: 'Colonial Latin America Description',
    pathways: ['slavery_race', 'politics_rev', 'intell_culture']
  },
  {
    id: '145',
    title: 'HIST-145: Discover the Middle Ages',
    label: 'HIST-145',
    courseDescription: 'Vikings Description goes here !',
    pathways: ['gender_sexuality', 'politics_rev', 'intell_culture']
  }
]);
