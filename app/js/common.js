$(function() {
	// Custom JS

    //MainMenu
    $('#navigation').slimmenu(
        {
            resizeWidth: '992',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: 'linear',
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });

    var $MobailBtn = $('.collapse-button');
    $MobailBtn.click(function () {
       $(this).toggleClass('active-btn-close');
    });

    $(window).resize(function () {
       $MobailBtn.removeClass('active-btn-close');
    });
    $(window).on('orientationchange', function () {
        $MobailBtn.removeClass('active-btn-close');
    });
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(window).unbind('resize');
    };



    //Carousel - what-do-we-offer
    $('.our-offer').owlCarousel({
        loop:true,
        margin:30,

        responsive:{
            0:{
                items:1,
                nav:false
            },
            640:{
              nav:false,
              items:2
            },
            820:{
                items:2,
                nav:true
            },
            1135:{
                items:3,
                nav:true
            }
        }
    });

    //Carousel - brewers-slider
    $('.brewers-slider').owlCarousel({
        loop:true,
        margin:60,
        nav:false,

        responsive:{
            0:{
                items:1
            },
            640:{
                items:2
            },
            1050:{
                items:3
            }
        }
    });

    //Carousel - our-gallery-slider
    $('.our-gallery-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,

        responsive:{
            0:{
                items:1
            },
            480:{
              items:2
            },
            580:{
               items:3
            },
            768:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    //Magnifig-popup - our-gallery-slider
    var Slider = $('.popup-gallery');
    $(Slider).each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            disableOn: function() {
                if( $(window).width() < 480 ) {
                    return false;
                }
                return true;
            },

            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });

    $('.overlay').click(function () {
       $(this).siblings('a').click();
    });

    $('.popup-gallery .item a').click(function(e) {
        e.preventDefault();
    });


    //events-description
    $('.events .details').click(function () {
        $('.description-event').fadeOut(200);
        $('.map').removeClass('active-map');
        $('.close-map').fadeOut(200);
        $(this).parent().siblings('.description-event').fadeIn(200);
    });

    $('.description-event .close').click(function () {
        $('.description-event').fadeOut(200);
    });

    $('.events .btn-map').click(function () {
        $('.description-event').fadeOut(200);
        $(this).parent().siblings('.map').addClass('active-map');
        $(this).parent().siblings('.close-map').fadeIn(200);
    });

    $('.close-map').click(function () {
        $(this).fadeOut(200);
        $('.map').removeClass('active-map');
    });

    //scroll
    $("#navigation, .menu-foot").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});
