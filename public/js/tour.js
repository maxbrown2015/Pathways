/**
 * This file holds the logic for the tour/walkthrough of the page
 */
let tour = new Tour({
  steps: [
    {
      element: '#tour-start',
      title: 'Welcome to Pathways!',
      content: '',
    },
  ] 
});
tour.init();

$().click(() => {
  tour.restart();
});


/****Showing Description On Shield Click*** */
