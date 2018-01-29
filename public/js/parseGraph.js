/**
 * This script parses through the graph object to populate the bottom div
 */
var graphdata; //= require('../../data/graph_data.json');

$.getJSON('/data/graph_data.json', function(data){
    graphdata = data;
});


console.log(graphdata);
console.log(graphdata.nodes);


//test function 
var testPathways = function () {
    var graphNode = graphdata.nodes;
    var pathway1 = [];
    var pathway2 = [];
    var pathway3 = [];

    graphNode.forEach(function (element) {
        if (element.courseDescription === "Emergence of Modern Europe stuff") {
            pathway1.push(element);
        } else if (element.courseDescription ===  "Rise and Fall of the Russian Empire, 1522 - 1917") {
            pathway2.push(element);
        } else if (element.courseDescription === "Early Modern Europe, 1450 - 1750") {
            pathway3.push(element);
        }
    });
    return [pathway1, pathway2, pathway3];
};


