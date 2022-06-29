
window.onscroll = function showHeader() {
  var header = document.querySelector('.header__top');

  if (window.pageYOffset > 500) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }

}


$(function () {
  $('.burger').on('click', function () {
    if ($('.menu').hasClass('menu--active')) {
      $('.menu').removeClass('menu--active')
      $('.burger').removeClass('burger--active')
    } else {
      $('.menu').addClass('menu--active')
      $('.burger').addClass('burger--active')
    }
  });

  $('.menu__list-link').on('click', function () {
    $('.menu').removeClass('menu--active')
    $('.burger').removeClass('burger--active')
  })



  $('.slider__items').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 639,
        settings: {
          variableWidth: true,
        }
      }
    ]
  });

  $('.gallery__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,

    dots: false,
    asNavFor: '.gallery__thumb',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev-arrow-white.svg" alt=""></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next-arrow-white.svg" alt=""></button>',
        }
      },
    ]
  });

  $('.gallery__thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    // arrows: false,
    // dots: false,
    focusOnSelect: true,
    vertical: true,

    asNavFor: '.gallery__big',
  });

  $(".s16__link").on('click', function (e) {
    e.preventDefault();
    $('.s15__popup').addClass('s15__popup--active');
  });

  $(".s15__popup-close").on('click', function () {
    $('.s15__popup').removeClass('s15__popup--active');
  })



  $(".header__content-button, .s17__link, .menu__list-link, .menu__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__link, .menu__list-link').on('click', function () {
    $('.burger').removeClass('burger--active');
    $('.menu').removeClass('menu--active');
  });


  $('#name, #name2').keypress(function (e) {
    if (e.keyCode == 32) return false;
    if (this.value.length == 1) {
      this.value = this.value.toUpperCase();
    }
  });

  $('#phone, #phone2').inputmask({ "mask": "+7(999) 999-99-99" });

  $('.thank__close').on('click', function () {
    $('.thank').removeClass('thank--active');
  });
});


const registrationForm = document.querySelector('#form')

const registrationInputs = Array.from(registrationForm.querySelectorAll('.page__input'));

const registrationSubmitButton = registrationForm.querySelector('.form__btn')


function checkForm() {
  var valid = registrationForm.checkValidity();
  registrationInputs.forEach(input => {
    const error = input.closest('.page__item').querySelector('.page__error');
    const border = input.closest('.page__item').querySelector(".page__border");

    if (input.id == 'phone') {
      input.addEventListener('keypress', () => {
        if (input.validity.valid) {
          error.classList.add('page__error_hidden')
          border.classList.remove('error-red')
        } else {
          error.classList.remove('page__error_hidden')
          border.classList.add('error-red')
        }
      })
    }

    input.addEventListener('input', () => {
      if (input.validity.valid) {
        error.classList.add('page__error_hidden')
        border.classList.remove('error-red')
      } else {
        error.classList.remove('page__error_hidden')
        border.classList.add('error-red')
      }
    })

    input.addEventListener('invalid', () => {
      error.classList.remove('page__error_hidden');
      border.classList.add('error-red')
    })
  })

  return valid
}

