var edges = [
  {
    id: '0',
    type: 'Gender_and_Sexuality',
    from: '011',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  },

  {
    id: '1',
    type: 'Slavery_and_Race',
    from: '011',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  },

  {
    id: '2',
    type: 'Politics_and_Revolution',
    from: '011',
    to: '030',
    color : 'rgb(255, 255, 255, .9)'
  },

  {
    id: '3',
    type: 'Economic_History',
    from: '030',
    to: '040',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '4',
    type: 'War_Peace_and_Diplomacy',
    from: '030',
    to: '031',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '5',
    type: 'Politics_and_Revolution',
    from: '030',
    to: '031',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '6',
    type: 'Intellectual_and_Cultural_Life',
    from: '031',
    to: '040',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '7',
    type: 'War_Peace_and_Diplomacy',
    from: '031',
    to: '048',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '8',
    type: 'Politics_and_Revolution',
    from: '031',
    to: '048',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '9',
    type: 'Intellectual_and_Cultural_Life',
    from: '040',
    to: '048',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '10',
    type: 'Economic_History',
    from: '040',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '11',
    type: 'Religious_Communities',
    from: '040',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '12',
    type: 'Intellectual_and_Cultural_Life',
    from: '048',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '13',
    type: 'War_Peace_and_Diplomacy',
    from: '048',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  },
  {
    id: '14',
    type: 'Politics_and_Revolution',
    from: '048',
    to: '999',
    color : 'rgb(255, 255, 255, .9)'
  }
];
var nodes = [
  {
    id: '011',
    label: 'Hist-011: Deciphering America',
    courseDescription: 'Deciphering America lorem ipsum',
    x: 0,
    y: 0
  },
  {
    id: '030',
    label: 'Hist-030: Emergence of Modern Europe',
    courseDescription: 'Emergence of Modern Europe stuff',
    x: 1,
    y: -1
  },
  {
    id: '031',
    label:'Hist-031: Making or Breaking European Hegemony',
    courseDescription: 'Making or Breaking European Hegemony',
    x:2,
    y:-2
  },
  {
    id: '040',
    label:'Hist-040: Early Modern Europe, 1450 - 1750',
    courseDescription: 'Early Modern Europe, 1450 - 1750',
    x:3,
    y:-3
  },
  {
    id: '048',
    label:'HIST-048: Rise and Fall of the Russian Empire, 1522 - 1917',
    courseDescription: 'Rise and Fall of the Russian Empire, 1522 - 1917',
    x:4,
    y:-4
  },
  {
    id: '999',
    label:'CLOSER_NODE',
    courseDescription: 'NOT_A_COURSE',
    x:5,
    y:-5
  }
];

