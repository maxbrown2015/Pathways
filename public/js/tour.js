
      var tour = new Tour({
        steps: [
        {
          element: "#tour-start",
          title: "Welcome to Pathways!",
          content: "Below is a guide to the History Department's course offerings for the Spring and Fall Semesters. The points represent the courses and the edges connecting the courses are the 'pathways'",
        },
        {
          backdrop: true,
          element: "#Religious-Icon",
          title: "Pathway Legend",
          content: "This legend shows the 12 different pathways. The color of the edge denotes which pathway connects two courses."
        },
        {
          backdrop: true,
          element: "#test-node",
          title: "Courses",
          content: "When a course is clicked, the edges connecting the course to others in the same pathways will appear. The course description will appear along with all of the courses that share the same pathway."
        },
        {
          backdrop: true,
          element: "#course-description",
          title: "Changing the Description",
          content: "You can also view the course descriptions of related courses by clicking on the course titles. Play around with different courses to see what the History Department has to offer!"
        }
      ]});
      tour.init();

$("#tour-start").click(function () {
    tour.restart();
});
