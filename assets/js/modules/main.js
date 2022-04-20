var main = {
  init: function () {
    this.main();
  },
  main: function () {
    $("#menuToggle2").click(function () {
      if ($(".menu-principal").hasClass("expanded")) {
        $(".menu-principal.expanded").removeClass("expanded");
        $(this).removeClass("active");
      } else {
        $(".menu-principal").addClass("expanded");
        $(this).addClass("active");
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

    $('#menuToggle2').click(function(){
      $(this).toggleClass('open');
    });

    $(".audio").click(function () {
      if ($("audio").hasClass("expanded")) {
        $("audio.expanded").removeClass("expanded");
        $(this).removeClass("active");
      } else {
        $("audio").addClass("expanded");
        $(this).addClass("active");
      }
    });
  },
}
main.init();

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
