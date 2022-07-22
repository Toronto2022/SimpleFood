$(function () {

  $('.product-catalog__name,.product-catalog__number,.product__input').styler();


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


  $('.burger').on('click', function () {
    $('.mobile-menu,.overlay').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.product-catalog__btn,.mobile-catalog').on('click', function () {
    $('.mobile-catalog,.overlay').toggleClass('active');
    $('body').toggleClass('lock');
  });

  const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    preload: 2,
  });

  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    closeButton: "top",

    Carousel: {
      Dots: true,
      on: {
        change: (that) => {
          myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });



  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const bodyLock = document.querySelector('body');
  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      bodyLock.classList.remove('lock');
    }
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


  $('.product__items').slick({
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: '<button class="slide-prev" type="button"><svg> <use xlink: href = "images/sprite.svg#product-arrow" > < /use> </svg></button > ',
    nextArrow: '<button class="slide-next" type="button"><svg> <use xlink: href = "images/sprite.svg#product-arrow" > < /use> </svg></button > ',
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      }
    }]
  });

  $('.interest__slide').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: '<button class="interest-prev" type="button"><svg> <use xlink: href = "images/sprite.svg#slider-arrow" > < /use> </svg></button > ',
    nextArrow: '<button class="interest-next" type="button"><svg> <use xlink: href = "images/sprite.svg#slider-arrow" > < /use> </svg></button > ',
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
      }
    }]
  });


  $('.star').rateYo({
    starWidth: "16",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    readOnly: true,
    spacing: "6px",
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


  $(window).on('load resize', function () {
    if ($(window).width() < 576) {
      $('.discounts__items').slick({
        centerMode: false,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    } else {
      $(".discounts__items").slick("unslick");
    }
  });

  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });

});
var mixer = mixitup('.popular-categories__burgers');