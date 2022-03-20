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

//Footer drop
let menu = document.querySelectorAll(".footer-info");
menu.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("open");
  });
});

//Change color for Header

let headerLogo = document.getElementById("header_logo");
let headerShop = document.getElementById("header_shop");
let headerSearch = document.getElementById("header_search");
let headermenu = document.querySelectorAll(".header-info-link-title");
let arrow = document.querySelectorAll(".arrow");

let pastName = window.location.pathname === "/main.html";

function changeHeader() {
  headerLogo.src = "./images/icon/ESPIREO-white.svg";
  headerShop.src = "./images/icon/header-shop-white.svg";
  headerSearch.src = "./images/icon/header-search-white.svg";
  headermenu.forEach((el) => {
    el.style.color = "#fff";
  });
  arrow.forEach((el) => {
    el.style.borderColor = "#FFF";
  });
}

console.log(headermenu);

if (pastName == true) {
  changeHeader();
}
