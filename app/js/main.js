$(function () {

  $('.product-catalog__name,.product-catalog__number').styler();

  $('.catalog-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.catalog-price__from').text(data.from);
      $('.catalog-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.catalog-price__from').text(data.from);
      $('.catalog-price__to').text(data.to);
    },
  });

  $('.burger,.mobile-menu ').on('click', function () {
    $('.mobile-menu,.overlay').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.product-catalog__btn,.mobile-catalog').on('click', function () {
    $('.mobile-catalog,.overlay').toggleClass('active');
    $('body').toggleClass('lock');
  });

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
    $('.best-restaurants__items,.discounts__items').slick({
      centerMode: false,
      prevArrow: false,
      nextArrow: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".best-restaurants__items.slick-initialized,.discounts__items").slick("unslick");
  }
});



var mixer = mixitup('.popular-categories__burgers');