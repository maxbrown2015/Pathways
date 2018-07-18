/**
 * This file holds the logic for the tour/walkthrough of the page
 */
<<<<<<< HEAD

=======
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
>>>>>>> master

let startTour = function(node) {
  var tour = new Tour({
    steps: [
      {
        element: '#tour-invisible-start',
        title: 'Course Network',
        content: "This network contains the courses offered by the Penn History Department. The edges between the points represent the various pathways that connect the courses together. ",
        backdrop: true,
        onNext: function() {
          onNodeSelect(node);
        }
      },
      {
        element: '#tour-invisible-node',
        title: 'Course Network',
        content: "Clicking on a course will cause its pathways to illuminate and further information about the course, as well as the other courses in its pathways, will be displayed below the network",
        backdrop: false
      },
      {
        element: '#tour-invisible-description',
        title: 'Course Network',
        content: "In this area, go ahead and click on the course lists to find out more information about courses in a specific pathway.",
        backdrop: false,
        onNext: function() {
          onEdgeSelect(edges.get(116));
        }
      },
      {
        element: '#tour-invisible-start',
        title: 'Course Network',
        content: "Finally, clicking on an edge will show that single pathway. Play around with the network to see how the pathways connect the course offerings of the Department.",
        backdrop: false
      }
      
    ]});
    tour.restart();
}

/****Showing Description On Shield Click*** */
