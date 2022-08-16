$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    responsive: {
      // breakpoint from 0 up
      loop: true,
      0: {
        items: 2,
        margin: 32,
        loop: true,
        dots: false,
      },
      // breakpoint from 480 up
      601: {
        items: 3,
        margin: 32,
        loop: true,
        dots: false,
      },
      // breakpoint from 768 up
      1001: {
        items: 3,
        margin: 48,
        dots: false,
        loop: true,
      },
    },
  });
});
