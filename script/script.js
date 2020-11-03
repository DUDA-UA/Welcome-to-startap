$(document).ready(function() {
    var btn = $('.btn__home');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 100) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '1000');
    });

    $('.slider').slick({
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
      {
          breakpoint: 1160,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          }
      },
      {
          breakpoint: 900,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          }
      },
      {
          breakpoint: 620,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          }
      }
      ]
  });
  });