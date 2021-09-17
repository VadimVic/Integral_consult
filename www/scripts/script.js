$(document).ready(function () {

$('.service-links a').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index('.service-links a');
    console.log(index);

    $('.service-links a').removeClass('active');
    $(this).addClass('active');

    $('.service-info').removeClass('service-info-visible');
    $('.service-info').eq(index).addClass('service-info-visible');
  });

});

