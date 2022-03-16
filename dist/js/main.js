
$(document).ready(function(){
   $('.top-screen-slider').slick({
      autuHeight: true,
      infinite: true,
      dots: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
   });
 });


let menu = document.querySelectorAll(".footer-info");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});
