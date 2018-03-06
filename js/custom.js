;$(document).ready(function() {
/*========================
 slider
 =======================*/
  $('.comments-slider').slick({
    dots: true,
    arrows: true,    
    prevArrow: '<i class="fa fa-chevron-left feedback-slider-arrows arrow-left"></i>',
    nextArrow: '<i class="fa fa-chevron-right feedback-slider-arrows arrow-right"></i>'
  });
    $('.modal-slider').slick({
    dots: true,
    arrows: true,    
    prevArrow: '<i class="fa fa-chevron-left feedback-slider-arrows arrow-left_mob"></i>',
    nextArrow: '<i class="fa fa-chevron-right feedback-slider-arrows arrow-right_mob"></i>'
  });
/*==================================
 Smooth scroll to Plans Block
====================================
*/
    $('.map-box_pic__link, .map-object__content, .format-map__link').on('click', function(e) {

        e.preventDefault();
        var plansOffset = $('#map').offset().top;

        $('html, body').animate({
            scrollTop: plansOffset
        }, 500);

    });
/*========================
tabs
 =======================*/
$(function() {
	var tab = $('a[data-toggle="tab"]');

	tab.on('click', function() {
		event.preventDefault();
		$('.active').removeClass('active');
		$(this).parent().toggleClass('active');
		var target = $(this).attr('href');
		$(target).toggleClass('active');
	});
});
/*========================
 map
 =======================*/
    // ymaps.ready(init);
    // var myMap;
    
    // function init(){  
    // // myMap.behaviors.disable('scrollZoom');   
    //     myMap = new ymaps.Map("map", {
    //         center: [51.6754966, 39.20888230000003],
    //         zoom: 7,

    //     });

    //     myMap = new ymaps.Map("mapModal1", {
    //         center: [51.6754966, 39.20888230000003],
    //         zoom: 7,

    //     });

    //     myMap = new ymaps.Map("mapModal2", {
    //         center: [51.6754966, 39.20888230000003],
    //         zoom: 7,

    //     });
    // }
ymaps.ready(init);
    var myMap,
        myMap1,
        myMap2


    function init(){     
        myMap = new ymaps.Map("map", {
            center: [51.67204, 39.1843],
            zoom: 13
        });

        myMap2 = new ymaps.Map("mapModal1", {
            center: [51.67204, 39.1843],
            zoom: 13
        });

        myMap2 = new ymaps.Map("mapModal2", {
            center: [51.67204, 39.1843],
            zoom: 13
        });
    }

/*========================
 mask input phone
 =======================*/
    $('.phone').mask('+7 (999) 999-99-99');
/*========================
 fixed header
 =======================*/

    var screenHight = $('.screen-1').height();
    
    $(document).on('scroll', function() {
        var documentScroll = $(this).scrollTop();

        if(documentScroll > screenHight) {
            $('.main-head').addClass('main-head-fix');
            $('.time p').addClass('head-fix_color');
            $('.adress p').addClass('head-fix_color');
            $('.phone a').addClass('head-fix_color');
            $('.logo span').addClass('head-fix_color');
            // $('.screen-1').css({
            //     "paddingTop": screenHight
            // }); 
         } else {
            $('.main-head').removeClass('main-head-fix');
            $('.time p').removeClass('head-fix_color');
            $('.adress p').removeClass('head-fix_color');
            $('.phone a').removeClass('head-fix_color');
            $('.logo span').removeClass('head-fix_color');
            $('.screen-1').removeAttr('style');
        }
    })
/*========================
 modal
 =======================*/
    $('.modal-btn').on('click', function() {
        $('.overlay').fadeIn();
        $('.popup').fadeIn();

    })
    $('.popup-close').on('click', function() {
        $('.popup').fadeOut();
        $('.overlay').fadeOut();
    })
    $('.overlay').on('click', function() {
        $('.overlay').fadeOut();
        $('.popup').fadeOut();
    })
/*========================
 modal karta
 =======================*/
    $('.search-box_btn').on('click', function() {
        // $('.overlay').fadeIn();
        $('.popup-karta').fadeIn();
    })
    $('.popup-close_karta').on('click', function() {
        $('.popup-karta').fadeOut();
        // $('.overlay').fadeOut();
    })
    $('.overlay').on('click', function() {
        // $('.overlay').fadeOut();
       $('.popup-karta').fadeOut();
    })

    $('.btn-mob').on('click', function() {
        $('.format-item').removeClass('format-item_mob');
    })
/*========================
modal-feedback
 =======================*/
    $('.head-modal-phone').on('click', function() {
        $('.overlay').fadeIn();
        $('.modal-feedback').fadeIn();
    })
    $('.popup-close').on('click', function() {
        $('.modal-feedback').fadeOut();
        $('.overlay').fadeOut();
    })
    $('.overlay').on('click', function() {
        $('.overlay').fadeOut();
       $('.modal-feedback').fadeOut();
    })
/*========================
object-modal
 =======================*/
    $('.object-calc-link_city').on('click', function() {
        $('.object-modal').fadeIn(200);
    });
    $('.popup-close_karta').on('click', function() {
        $('.object-modal').fadeOut(200);
    });

    $('.object-calc-link_direction').on('click', function() {
        $('.direction-modal').fadeIn(200);
    });

    $('.popup-close_karta').on('click', function() {
        $('.direction-modal').fadeOut(200);
    });

        $('.object-calc-link_format').on('click', function() {
        $('.format-modal').fadeIn(200);
    });

    $('.popup-close_karta').on('click', function() {
        $('.format-modal').fadeOut(200);
    });


/*========================
map-modal
=======================*/
    $('.btn-box_popup-karta__popup').on('click', function() {
        $('.overlay').fadeIn();
        $('.map-modal').fadeIn();
    })
    $('.popup-close_karta').on('click', function() {
        $('.map-modal').fadeOut();
        $('.overlay').fadeOut();
    })
    $('.overlay').on('click', function() {
        $('.overlay').fadeOut();
       $('.map-modal').fadeOut();
    })
 /*========================
btn-box_mob
 =======================*/

    $('.btn-box_mob').on('click', function() {
        $('.format-item_mob').removeClass();
        $('.btn-box_mob').fadeOut();
    })
    $('.object-btn-box_mob').on('click', function() {
        $('.object-content_mob').removeClass();
        $('.object-btn-box_mob').fadeOut();
    })
/*========================
valid form
 =======================*/
$('.form').validate ({
    rules: {
        name: "required",
        name: {
            required: true,
        },
        phone: "required",
        phone: {
            required: true,
        },
        pass: "required",
        pass: {
            required: true,
            minlength: 5
        },
        email: "required",
        email: {
            required: true,
            email: true
        },
        adress: "required",
        adress: {
            required: true,
            adress: true
        },
        checkbox: "required",
        checkbox: {
            required: true,
            checkbox: true
        },
        
        agree: "required"
    },
    messages: {
        name: {
            required: "Пожалуйста, введите Ваше имя",
            minlength: "Не менее 2 символов"
        },
        phone: {
            required: "Заполните поле телефон"
        },
        pass: {
            required: "Пожалуйста, введите Ваш пароль",
            minlength: "Пароль не менее 5 символов"
        },
        adress: {
            required: "Пожалуйста, введите адрес",
        },
        checkbox: {
            required: "Вы должны согласиться с обработкой персональных данных",
        },

    }
});





/*========================
 parallax
 =======================*/
// $(window).scroll(function() {
//      var st = $(this).scrollTop();
//      $('.screen-2').css({
//         "transform" : "translate(0%, " + st / 20 + "%"
//      })
// });
    // $('.parallax-window-1').parallax({imageSrc: '../img/bg/bg-1.jpg'});
    $('.parallax-window-2').parallax({imageSrc: '../img/bg/bg-2.jpg'});
    $('.parallax-window-3').parallax({imageSrc: '../img/bg/bg-3.jpg'});
    $('.parallax-window-4').parallax({imageSrc: '../img/bg/bg-4.jpg'});
    // $('.parallax-window-5').parallax({imageSrc: '../img/bg/bg-5.jpg'});
    $('.parallax-window-6').parallax({imageSrc: '../img/bg/bg-6.jpg'});
});

/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *  http://www.mohi.me
 *  @mohiuddinparekh   
 */


// $(document).ready(function(){
//     // Кешируем объект окна
//     $window = $(window);
                
//    $('section[data-type="background"]').each(function(){
//      var $bgobj = $(this); // Назначаем объект
                    
//       $(window).scroll(function() {
                    
//         // Прокручиваем фон со скоростью var.
//         // Значение yPos отрицательное, так как прокручивание осуществляется вверх!
//         var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        
//         // Размещаем все вместе в конечной точке
//         var coords = '50% '+ yPos + 'px';

//         // Смещаем фон
//         $bgobj.css({ backgroundPosition: coords });
        
//     }); 

//  });    

// }); 
/* 
 * Создаем элементы HTML5 для IE
 */

// document.createElement("article");
// document.createElement("section");