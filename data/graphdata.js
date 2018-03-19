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
    type: 'Gender_and_Sexuality',
    from: '011',
    to: '999',
    color : {color: '#ffff66', highlight: '#ffff66' }
  },

  {
    id: '1',
    type: 'Slavery_and_Race',
    from: '011',
    to: '999',
    color : {color: '#c4a464', highlight: '#c4a464'}
  },

  {
    id: '2',
    type: 'Politics_and_Revolution',
    from: '011',
    to: '030',
    color : {color: '#FF6666', highlight: '#FF6666'}
  },

  {
    id: '3',
    type: 'Economic_History',
    from: '030',
    to: '040',
    color : {color: '#00FF33', highlight: '#00FF33'}
  },
  {
    id: '4',
    type: 'War_Peace_and_Diplomacy',
    from: '030',
    to: '031',
    color : {color: '#ffc0cb', highlight: '#ffc0cb'}
  },
  {
    id: '5',
    type: 'Politics_and_Revolution',
    from: '030',
    to: '031',
    color : {color: '#FF6666', highlight: '#FF6666'}
  },
  {
    id: '6',
    type: 'Intellectual_and_Cultural_Life',
    from: '031',
    to: '040',
    color : {color: '#ffa500', highlight: '#ffa500'}
  },
  {
    id: '7',
    type: 'War_Peace_and_Diplomacy',
    from: '031',
    to: '048',
    color : {color: '#ffc0cb', highlight: '#ffc0cb'}
  },
  {
    id: '8',
    type: 'Politics_and_Revolution',
    from: '031',
    to: '048',
    color : {color: '#FF6666', highlight: '#FF6666'}
  },
  {
    id: '9',
    type: 'Intellectual_and_Cultural_Life',
    from: '040',
    to: '048',
    color : {color: '#ffa500', highlight: '#ffa500'}
  },
  {
    id: '10',
    type: 'Economic_History',
    from: '040',
    to: '999',
    color : {color: '#00FF33', highlight: '#00FF33'}
  },
  {
    id: '11',
    type: 'Religious_Communities',
    from: '040',
    to: '999',
    color : {color: '#40e0d0', highlight: '#40e0d0'}
  },
  {
    id: '12',
    type: 'Intellectual_and_Cultural_Life',
    from: '048',
    to: '999',
    color : {color: '#ffa500', highlight: '#ffa500'}
  },
  {
    id: '13',
    type: 'War_Peace_and_Diplomacy',
    from: '048',
    to: '999',
    color : {color: '#ffc0cb', highlight: '#ffc0cb'}
  },
  {
    id: '14',
    type: 'Politics_and_Revolution',
    from: '048',
    to: '999',
    color : {color: '#FF6666', highlight: '#FF6666'}
  }
]);

var nodes = new vis.DataSet([
  {
    id: '011',
    label: 'Hist-011: Deciphering America',
    courseDescription: 'Deciphering America lorem ipsum',
    pathways: ['gender_sexuality', 'slavery_race', 'politics_rev']
  },
  {
    id: '030',
    label: 'Hist-030: Emergence of Modern Europe',
    courseDescription: 'Emergence of Modern Europe stuff',
    pathways: ['politics_rev', 'econ_history', 'war_peace']
  },
  {
    id: '031',
    label:'Hist-031: Making or Breaking European Hegemony',
    courseDescription: 'Making or Breaking European Hegemony',
    pathways: ['war_peace', 'politics_rev', 'intell_culture']
  },
  {
    id: '040',
    label:'Hist-040: Early Modern Europe, 1450 - 1750',
    courseDescription: 'Early Modern Europe, 1450 - 1750',
    pathways: ['econ_history', 'intell_culture', 'religious_comm']
  },
  {
    id: '048',
    label:'HIST-048: Rise and Fall of the Russian Empire, 1522 - 1917',
    courseDescription: 'Rise and Fall of the Russian Empire, 1522 - 1917',
    pathways: ['war_peace', 'politics_rev', 'intell_culture']
  },
  {
    id: '999',
    label:'CLOSER_NODE',
    courseDescription: 'NOT_A_COURSE',
    pathways: ['Gender and Sex', 'war_peace', 'Slavery and Race', 'religious_comm', 'politics_rev']
  }
]);

  