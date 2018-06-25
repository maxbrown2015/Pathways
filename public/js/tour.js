/**
 * This file holds the logic for the tour/walkthrough of the page
 */
var tour = new Tour({
  steps: [
    {
      element: '#tour-start',
      title: 'Welcome to Pathways!',
      content: ""
    },
  ]});
tour.init();

$().click(function () {
  tour.restart();
});


/****Showing Description On Shield Click****/