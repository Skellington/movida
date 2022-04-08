var main = {
  init: function () {
    this.main();
  },
  main: function () {
    $("a.header__btn, #menuToggle2").click(function () {
      if ($(".menu-reservation").hasClass("expanded")) {
        $(".menu-reservation.expanded").removeClass("expanded");
        $("a.header__btn, #menuToggle2").removeClass("active");
      } else {
        $(".menu-reservation").addClass("expanded");
        $("a.header__btn, #menuToggle2").addClass("active");
      }
    });

    $("a.open-submenu, .submenu").mouseover(function(){
      if ($(".submenu-list").hasClass("active")) {
        $(this).parent().removeClass("active");
      } else {
        $(this).parent().addClass("active");
      }
    });
    $("a.open-submenu, .submenu").mouseout(function(){
        $(this).parent().removeClass("active");
    });

    $('a.header__btn, #menuToggle2').click(function(){
      $("a.header__btn, #menuToggle2").toggleClass('open');
    });

    $("#menuToggle").click(function () {
      if ($(".menu-principal").hasClass("expanded")) {
        $(".menu-principal.expanded").removeClass("expanded");
        $(this).removeClass("active");
        $("a.header__btn").removeClass("disabled");
      } else {
        $(".menu-principal").addClass("expanded");
        $(this).addClass("active");
        $("a.header__btn").addClass("disabled");
      }
    });

    $('#menuToggle').click(function(){
      $(this).toggleClass('open');
    });
  },
}
main.init();

$(document).ready(function(){
  var owl1 = $('.owl-carousel1');
  $(window).load(function(){
    owl1.owlCarousel({
      items: 1,
      margin:0,
      center:false,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
      lazyLoad: true,
      smartSpeed: 800,
      mouseDrag: false,
      dots: true,
      dotsData: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    });
  });
});

$(document).ready(function(){
  var owl2 = $('.owl-carousel2');
  $(window).load(function(){
    owl2.owlCarousel({
      items: 1,
      margin:0,
      center:false,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
      lazyLoad: true,
      smartSpeed: 800
    });
  });
});

$(document).ready(function(){
  var owl3 = $('.owl-carousel3');
  $(window).load(function(){
    owl3.owlCarousel({
      items: 7,
      margin:20,
      center:false,
      nav: true,
      dots: false,
      loop: false,
      autoplay: true,
      smartSpeed: 400,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          767:{
              items:2
          },
          992:{
              items:3
          },
          1200:{
              items:7
          }
        }
    });
  });
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() < 1) {
    $('header').removeClass("fixed");
    $('.menu-reservation, .menu-principal').removeClass("fixed");
  } else {
    $('header').addClass("fixed");
    $('.menu-reservation, .menu-principal').addClass("fixed");
  }
});

$(document).ready(function(){
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 80
    }, 500);
  });
 });
