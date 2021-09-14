$(document).ready(function () {

$('.service-links li').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index('.service-links li');
    console.log(index);

    $('.service-links li').removeClass('active');
    $(this).addClass('active');

    $('.service-info').removeClass('service-info-visible');
    $('.service-info').eq(index).addClass('service-info-visible');
  });

});