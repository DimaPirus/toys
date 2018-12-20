$('.sl').slick({
dots: true,
infinite: false,
speed: 1000,
slidesToShow: 4,
slidesToScroll: 4,
swipe: true,
TouchMove: true,
touchThreshold: 4,
verticalSwiping: true,
swipeToSlide: true,
//сколько слайдов за раз перелистнется
responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.sl-brand').slick({
dots: true,
infinite: false,
speed: 1000,
slidesToShow: 6,
slidesToScroll: 6,
swipe: true,
TouchMove: true,
touchThreshold: 4,
verticalSwiping: true,
swipeToSlide: true,
//сколько слайдов за раз перелистнется
responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});