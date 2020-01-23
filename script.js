$(function() {
$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $(‘body’).addClass(‘colorChange’)
      $(‘header’).addClass(‘displayNone’)
      $(‘nav’).removeClass(‘navBackgroundStart’)
      $(‘nav ul’).addClass(‘addBlackBackground’)
   } 
   if ($(this).scrollTop() < 50) {
      $(‘body’).removeClass(‘colorChange’)
      $(‘header’).removeClass(‘displayNone’)
      $(‘nav’).addClass(‘navBackgroundStart’)
      $(‘nav ul’).removeClass(‘addBlackBackground’)
   } 
});
});
