window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrusel__lista2'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        //draggable: true,
        dots: '.carrucel__indicadores',
        arrows: {
            prev: '.carrusel__anterior2',
            next: '.carrusel__next'
        },
        responsive: [

          {
            // screens greater than >= 775px
            breakpoint: 600,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 2,
       
            }
          },
            {
              // screens greater than >= 775px
              breakpoint: 700,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 2,
         
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              
              }
            }
          ]
    });
});