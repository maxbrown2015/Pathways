/**
 * This file holds the logic for the tour/walkthrough of the page
 */

const startTour = function startTour(node) {
  const tour = new Tour({
    steps: [
      {
        element: '#tour-invisible-start',
        title: 'Course Area',
        content: 'This network contains the courses offered by the Penn History Department. The lines between the points represent the various pathways that connect the courses together. ',
        backdrop: true,
        onNext() {
          onNodeSelect(node);
        },
      },
      {
        element: '#tour-invisible-node',
        title: 'Clicking On A Course',
        content: 'Clicking on a course will cause its pathways to illuminate and further information about the course, as well as the other courses in its pathways, will be displayed below the network',
        backdrop: false,
      },
      {
        element: '#tour-invisible-description',
        title: 'Course Network',
        content: 'In this area, go ahead and click on the course lists to find out more information about the courses in a specific pathway.',
        backdrop: false,
        onNext() {
          onEdgeSelect(edges.get(3));
        },
      },
      {
        element: '#tour-invisible-start',
        title: 'Clicking On An Edge',
        content: 'Finally, clicking on an line will show that single pathway. Play around with the network to see how the pathways connect the course offerings of the Department.',
        backdrop: false,
      },
    ],
  });
  tour.restart();
};

/** **Showing Description On Shield Click*** */
