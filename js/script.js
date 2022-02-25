$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="/src/icons/catalog/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/src/icons/catalog/right.png"></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
    // Скрипт табов
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // Переключение Подробнее на Назад
    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click',function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #message').fadeOut('slow');
    });

    $('.button_btn').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //   rules: {
    //     name: "required",
    //     phone: "required",
    //     email: {
    //       required: true,
    //       email: true
    //     }
    //   },
    //   messages: {
    //     name: "Пожалуйста, введите свое имя",
    //     phone: "Пожалуйста, введите свой номер телефона", 
    //     email: {
    //       required: "Пожалуйста, введите электронную почту",
    //       email: "Введен неверный адрес электронной почты"
    //     }
    //   }
    // });
    // $('#order form').validate();

    function valedForm(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста, введите свое имя",
          phone: "Пожалуйста, введите свой номер телефона", 
          email: {
            required: "Пожалуйста, введите электронную почту",
            email: "Введен неверный адрес электронной почты"
          }
        }
      });
    };

    valedForm('#consultation-form');
    valedForm('#consultation form');
    valedForm('#order form');

    //Smooth scroll
    $(window).scroll(function() {
      if($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      }
      else {
        $('.pageup').fadeOut();
      }  
    });

    new WOW().init();
  });