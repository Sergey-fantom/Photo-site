jQuery(document).ready(function($) {

  var wWidth = $(window).width();
	$(".scroll").each(function() {
    var t = $(this),
        e = $(this).attr("data-animation");
    $(window).scroll(function() {
        var o = t.offset().top,
            i = t.height() + o;
        o -= $(window).height();
        var a = $(this).scrollTop();
        a > o && a < i && (t.hasClass("animated") || t.addClass("animated " + e))
    })
	});
  
  $('.other_tours .other_tours_wrapp').bxSlider({
    infiniteLoop: false,
    //hideControlOnEnd: true,
    preventDefaultSwipeY: true,
    minSlides:1,
    maxSlides: 3,   
    slideWidth: 400,
    infiniteLoop: false,
    prevText: '‹',
    nextText: '›',
  });


  $(".show_video").fancybox({
    type: 'iframe',
    maxWidth : 980,
    maxHeight : '90%',
    padding : 0,    
    helpers: {
      overlay: {
        locked: false
      }
    },    
  });
  $(".show_modal").fancybox({
    maxWidth : 380,
    padding : 0,    
    helpers: {
      overlay: {
        locked: false
      }
    },    
  });
  $('a.burger_icon').click(function() {
    if ($(this).hasClass('active_menu')) {
      $(this).removeClass('active_menu');
      $('.big_menu').removeClass('show_menu');
    } 
    else {
      $(this).addClass('active_menu');
      $('.big_menu').addClass('show_menu');
    }

    
    return false;
  });


});