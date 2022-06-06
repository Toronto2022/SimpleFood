var mixer = mixitup('.burgers');
$(function () {
  $('.comments__inner').slick({
    dots: true,
    arrows: true,
    infinite: false,
    prevArrow: '<button class="slick-prev" type="button"><svg> <use xlink: href = "images/sprite.svg#slider-arrow" > < /use> </svg></button > ',
    nextArrow: '<button class="slick-next" type="button"><svg> <use xlink: href = "images/sprite.svg#slider-arrow" > < /use> </svg></button > '
  });
});