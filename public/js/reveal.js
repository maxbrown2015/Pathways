
window.sr = ScrollReveal({opacity: 1, reset: true});

sr.reveal('#pathway-explanation');
sr.reveal('#network-header')
sr.reveal('#mynetwork', {viewFactor: .1});
sr.reveal('#course-information-header');
sr.reveal('#course-title-row');
sr.reveal('#course-description-row');
sr.reveal('#pathway-1');
sr.reveal('#pathway-2');
sr.reveal('#pathway-3');

 
$('#help-button').click(function(){
    startTour(nodes.get(144));
});