$(function(){
    $('.top__slider').slick({
        arrows: false,
        autoplay:true,
        dots: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
                settings: {
                    dots: false,
            }  
            },    
        ]
    });

    $('.revevies__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1105,
                  settings: {
                    slidesToShow: 3,
              }  
            },
            {
                breakpoint: 825,
                  settings: {
                    slidesToShow: 2,
              }  
            },
            {
                breakpoint: 557,
                  settings: {
                    slidesToShow: 1,
              }  
            },    
        ]
    });


    $('.menu__burger-btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list-active');
    });
});


