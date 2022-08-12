$('.count').counterUp();


// ======barfiler part start ======
$(document).ready(function(){
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
});
// ======barfiler part end ======

// ====work part start ====
$('.venobox').venobox()
// ====work part end ====

// ======client part start =======

$('.client_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid fa-angle-left prevarrow"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right nextarrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
        }
      }
    ]
  });
// ======client part end =======

// ====logo slider part start =====
$('.logo_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ====logo slider part end =====

 // =========sticky menu part ========
 var main_menu = document.getElementById("main_menu");
 window.addEventListener("scroll",function(){
 main_menu.classList.toggle("sticky",window.scrollY > 100);
 })
 // =========sticky menu part ========

  // ========back to top part ======
  var back_to_top = document.querySelector(".back_to_top")

  window.addEventListener("scroll",function(){
  
    back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
  })
  // ========back to top part ======