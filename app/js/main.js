var mixer = mixitup('.burgers');
$(function () {
  $('.comments__inner').slick({
    dots: true,
    arrows: true,
    infinite: false,
    prevArrow: '<button class="slick-prev" type="button"><svg> <use xlink: href = "images/sprite.svg#slider-arrow" > < /use> </svg></button > ',
    nextArrow: '<button class="slick-next" type="button"><svg> <use xlink: href = "images/sprite.svg#slider-arrow" > < /use> </svg></button > ',
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
      }
    }]
  });

});


$(window).on('load resize', function () {
  if ($(window).width() < 576) {
    $('.best-restaurants__items').slick({
      centerMode: false,
      prevArrow: false,
      nextArrow: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".best-restaurants__items.slick-initialized").slick("unslick");
  }
});

$('.burger,.mobile-menu ').on('click', function () {
  $('.mobile-menu,.overlay').toggleClass('active');
  $('body').toggleClass('lock');
});