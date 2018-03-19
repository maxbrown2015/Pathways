/**
 * This file stores the names of the courses corresponding to the pathways. 
 * It's meant to facilitate quick lookup of courses and their descriptions when generating lists. 
 * It is an object that stores a mapping of pathways to their courses.
 * 
 * The first item in each Pathway's array is a simple object that stores the full name of the pathway
 */

//Remaining pathways to be added later. 
var pathwaysObj = {
  law_society: [
    {name: 'Law and Society'}
  ],
  gender_sexuality: [
    { name: 'Gender and Sexuality'},
    { label: 'HIST-011: Deciphering America',
      courseDescription: 'Deciphering America lorem ipsum'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
  ],
  borders_migration: [
    {name: 'Borders, Migration and Immigration'}
  ],
  intell_culture: [
    { name: 'Intellectual and Cultural Life'},
    { label: 'HIST-031: Making or Breaking European Hegemony',
      courseDescription: 'Making or Breaking European Hegemony'},
    { label: 'HIST-040: Early Modern Europe, 1450 - 1750',
      courseDescription: 'Early Modern Europe, 1450 - 1750'},
    { label: 'HIST-048: Rise and Fall of the Russian Empire, 1522 - 1917',
      courseDescription: 'Rise and Fall of the Russian Empire, 1522 - 1917'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
  ],
  econ_history: [
    { name: 'Economic History'},
    { label: 'HIST-030: Emergence of Modern Europe',
      courseDescription: 'Emergence of Modern Europe stuff'},
    { label: 'HIST-040: Early Modern Europe, 1450 - 1750',
      courseDescription: 'Early Modern Europe, 1450 - 1750'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
  ],
  war_peace: [
    { name: 'War, Peace and Diplomacy'},
    { label: 'HIST-030: Emergence of Modern Europe',
      courseDescription: 'Emergence of Modern Europe stuff'},
    { label: 'HIST-031: Making or Breaking European Hegemony',
      courseDescription: 'Making or Breaking European Hegemony'},
    { label: 'HIST-048: Rise and Fall of the Russian Empire, 1522 - 1917',
      courseDescription: 'Rise and Fall of the Russian Empire, 1522 - 1917'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
    
  ],
  religious_comm: [
    { name: 'Religious Communities'},
    { label: 'HIST-040: Early Modern Europe, 1450 - 1750',
      courseDescription: 'Early Modern Europe, 1450 - 1750'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
  ],
  human_rights: [
    { name: 'Human Rights/Humanitarianism'}
  ],
  historical_methods: [
    { name: 'Historical Methods'}
  ],
  slavery_race: [
    { name: 'Slavery and Race'},
    { label: 'HIST-011: Deciphering America',
      courseDescription: 'Deciphering America lorem ipsum'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
  ],
  space_place: [
    { name: 'Space and Place(urban, environmental history'}
  ],
  politics_rev: [
    { name: 'Politics and Revolution'},
    { label: 'HIST-011: Deciphering America',
      courseDescription: 'Deciphering America lorem ipsum'},
    { label: 'HIST-030: Emergence of Modern Europe',
      courseDescription: 'Emergence of Modern Europe stuff'},
    { label: 'HIST-031: Making or Breaking European Hegemony',
      courseDescription: 'Making or Breaking European Hegemony'},
    { label: 'HIST-048: Rise and Fall of the Russian Empire, 1522 - 1917',
      courseDescription: 'Rise and Fall of the Russian Empire, 1522 - 1917'},
    { label: 'HIST-999: CLOSER_NODE',
      courseDescription: 'NOT_A_COURSE'}
  ]
};