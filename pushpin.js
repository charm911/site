$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');

    }

  });
});
