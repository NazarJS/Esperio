$(document).ready(function () {
  // Top-Screen Slider
  $(".top-screen-slider").slick({
    autuHeight: true,
    infinite: true,
    dots: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
  // Form validation
  $("#commentForm").validate({
    errorElement: "div",
    errorClass: "upload-error",
    rules: {
      name: {
        lettersonly: true,
      },
    },
    messages: {
      name: {
        required: "Пожалуйста, введите своё имя",
        lettersonly: "Введите корректное имя",
      },
    },
  });
});

//
let menu = document.querySelectorAll(".footer-info");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});
