$(document).ready(function () {

$('.team-links a').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index('.team-links a');
    console.log(index);

    $('.team-links a').removeClass('active');
    $(this).addClass('active');

    $('.team-info').removeClass('team-info-visible');
    $('.team-info').eq(index).addClass('team-info-visible');
  });

});