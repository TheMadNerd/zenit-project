$(document).ready(function(){  //js-slider
    $('.js-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
                slidesToScroll: 1
              }
            }
        ]
    });
  });


  
window.onscroll = function() {myFunction()};  //sticky menu 

var navbar = document.getElementById("menu");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav-bar');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
})