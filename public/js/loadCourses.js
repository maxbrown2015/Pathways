$(function () {

  var loadPathway = function (pathWay) {
    $('#pathway1').append('<ul>');
    pathWay[0].forEach(function (item) {
      $('#pathway1').append('<li class="courseL">' + item.title + '</li>');
    });
    $('#pathway1').append('</ul>');

    $('#pathway2').append('<ul>');
    pathWay[1].forEach(function (item) {
      $('#pathway2').append('<li class="courseL">' + item.title + '</li>');
    });
    $('#pathway2').append('</ul>');

    $('#pathway3').append('<ul>');
    pathWay[2].forEach(function (item) {
      $('#pathway3').append('<li class="courseL">' + item.title + '</li>');
    });
    $('#pathway3').append('</ul>');

    $('.courseL').click(function (e) {
      console.log(e.get(0));
    });
  };

});