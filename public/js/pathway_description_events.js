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

$('.pathway-button').click(function (e) {
    //get the ID of the selected 
    var eleId = $(this).attr("id");
    //get pathway description from the slected id
    var text = pathway_descriptions[eleId];
    //set text area to description value
    var pathwayDescriptionText = document.getElementById("pathway-description-text");
    $(pathwayDescriptionText).text(text);
    //change color to active
    toggleActiveColors(this);
});

/*
*/
let toggleActiveColors = function(selectedID) {
    let keys = Object.keys(pathway_descriptions);
    for (var i in keys) {
        var id = document.getElementById(keys[i]);
        if (id == selectedID) {
            $(id).toggleClass('active', true);
        }
        else {
            $(id).toggleClass('active', false);
        }
    }
};



