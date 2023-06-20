
$(document).ready(function () {
  $('#banner-slider').slick({
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn')
  });
  $('#img-slider').slick({
    prevArrow: $('.btn-prev'),
    nextArrow: $('.btn-next'),
    vertical: true,
    slidesToShow: 3,
    arrows: true,
  });

  $('.select__item').click(function () {
    $('.select__item').removeClass('active');
    $(this).addClass('active');

    let color = $(this).attr('class').split(' ')[1];

    $('.card__img').removeClass('active');
    $('.card__img.' + color).addClass('active');
  });

});