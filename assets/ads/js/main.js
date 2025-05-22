

/**
 *
 *  sticky navigation
 *
 */

// let navbar = $(".navbar");

// $(window).scroll(function () {
//   // get the complete hight of window
//   let oTop = $(".section-2").offset().top - window.innerHeight;
//   if ($(window).scrollTop() > oTop) {
//     navbar.addClass("sticky");
//   } else {
//     navbar.removeClass("sticky");
//   }
// });


/* slider================ */

  
var $item = $('.carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight); 
$item.addClass('full-screen');

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$('.carousel img').each(function() {
  var $src = $(this).attr('src');

  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : 'black'
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: false,
  pause: "true",
	
});


$(function () {
  "use strict";
  $(".popup img").click(function () {
   
      var $src = $(this).attr("src");
      $(".show").fadeIn();
      $(".img-show img").attr("src", $src);
     
  });
  
  $("span, .overlay").click(function () {
      $(".show").fadeOut();
  });
  
});




// video 
$(".video-thumb").click(function() {
  $(this).children('a').addClass("active");
   $('.video-thumb > a').removeClass("active");
});

//$('div.video-thumb').click(function() {
 
 // $('.video-iframe iframe').attr('src', ($(this).children('iframe').attr('src').replace('iframe')));
  
//});

//$('input').on('change', function() {
  //$('body').toggleClass('blue');
//});


//  corousal 
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
 
  var captionText = document.getElementById("caption");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
    var myIndex = 0;
    carousel();
    
    function carousel() {
      var i;
      
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = 'block';  
      setTimeout(carousel, 2000); 
    }

             $(document).ready(function() {
           $('#owl-demo_1').owlCarousel({
            
                margin: 0,
                nav: false,
                loop: false,
                stopOnHover : true,
                responsive: {
                  0: {
                    nav:true,
                    loop:true,
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 2
                  }
                }
              })
        
            })
           // owl corousal 
            $(document).ready(function () {
    $(".carousel_se_02_carousel").owlCarousel({
      items: 4,
      autoplay: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
		 rewindNav : false,	
      loop: false,
      mouseDrag: true,
      responsiveClass: true,
      navText: [
        "<i class='fa fa-caret-left arrow-left'></i>",
        "<i class='fa fa-caret-right arrow-right'></i>"
      ],
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 2,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  });


// iifa fashion
  $('#showMore').click(function(){
  
    $("#boxs .box:hidden").slice(0,3).slideDown();
   
    if($("#boxs .box:hidden").length == 0){
     
      $("#showMore").fadeOut("slow");
    }
  
  })


	   // $(function(){
    
   //   $("img.lazy").lazyload();
  
    //})




    
    
   
   