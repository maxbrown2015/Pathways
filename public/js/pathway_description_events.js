var pathway_descriptions = {
    "law-button": "law stuff",
    "gender-button": "gender stuff",
    "borders-button": "borders stuff",
    "intellec-button": "intellec stuff",
    "economic-button": "economic stuff",
    "war-button": "war stuff",
    "religious-button": "religious stuff",
    "human-button": "human stuff",
    "historical-button": "historical stuff",
    "slavery-button": "slavery stuff",
    "space-button": "space stuff",
    "politics-button": "politics stuff"
};

var dummy_text = "Laws form the foundation of every society, from Sumerian city-states to international empires. Courses in this pathway explore the historical context of legal systems, their genesis, evolutions, and impact on cultures. "

$('.pathway-button').click(function (e) {
    //get the ID of the selected 
    var eleId = $(this).attr("id");
    //get pathway description from the slected id
    //var text = pathway_descriptions[eleId];
    var text = dummy_text;
    //set text area to description value
    var pathwayDescriptionText = document.getElementById("pathway-description-text");
    fadeDivOutAndIn(pathwayDescriptionText, text);
    //change color to active
    toggleActiveColors(this);
});

/*
*/
let toggleActiveColors = function(selectedID) {
    //get keys from list to toggle all colors on or off
    let keys = Object.keys(pathway_descriptions);
    for (var i in keys) {
        var id = document.getElementById(keys[i]);
        //if id is the clicked on one
        if (id == selectedID) {
            $(id).toggleClass('active', true);
        }
        else {
            $(id).toggleClass('active', false);
        }
    }
};

let fadeDivOutAndIn = function(selector, text) {
    $(selector).fadeOut(500, function() {
        $(this).html(text)
    }).fadeIn(500);
}



