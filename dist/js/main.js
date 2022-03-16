<<<<<<< HEAD

$(document).ready(function(){
   $('.top-screen-slider').slick({
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
   });
 });

 
// const topScreen= document.querySelector(".top-screen").classList.contains("top-screen");
// const HeaderStyle = document.querySelectorAll('.header-info-link');

// if (topScreen == true) {
//    HeaderStyle.forEach(element => {
//       element.style.color = 'red'
//    });
// }
// console.log(topScreen)
=======
let menu = document.querySelectorAll(".footer-info");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});
>>>>>>> main
