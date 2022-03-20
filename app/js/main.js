$(document).ready(function () {
  // Top-Screen Slider
  $(".top-screen-slider").slick({
    autuHeight: true,
    adaptiveHeight: true,
    infinite: true,
    slideperview: 1,
    dots: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
  // Form validation

  jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-zA-ZА-Яа-я,ё\s]+$/i.test(value);
    },
    "Incorrect format"
  );

  jQuery.validator.addMethod(
    "telephone",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
      );
    },
    "Incorrect format"
  );

  $("#commentForm").validate({
    errorElement: "span",
    errorClass: "upload-error",
    rules: {
      lastname: {
        lettersonly: true,
        required: true,
      },
      name: {
        lettersonly: true,
        required: true,
      },
      secondname: {
        lettersonly: true,
        required: true,
      },
      email: {
        email: true,
        required: true,
      },
      tel: {
        telephone: true,
        required: true,
      },
      country: {
        lettersonly: true,
        required: true,
      },
      city: {
        lettersonly: true,
        required: true,
      },
      index: {
        number: true,
        required: true,
      },
      street: {
        lettersonly: true,
        required: true,
      },
      house: {
        number: true,
        required: true,
      },
    },
    messages: {
      lastname: {
        required: "Пожалуйста, введите свою фамилию",
        lettersonly: "Введите корректную фамилию",
      },
      name: {
        required: "Пожалуйста, введите свое имя",
        lettersonly: "Введите корректное имя",
      },
      secondname: {
        required: "Пожалуйста, введите свое отчество",
        lettersonly: "Введите корректное отчество",
      },
      email: {
        required: "Пожалуйста, введите email",
        email: "Введите корректный email",
      },
      tel: {
        required: "Пожалуйста, введите свой телефон",
        telephone: "Введите корректный номер",
      },
      country: {
        required: "Пожалуйста, введите свою страну",
        lettersonly: "Введите корректное название",
      },
      city: {
        required: "Пожалуйста, введите свой город",
        lettersonly: "Введите корректное название",
      },
      index: {
        required: "Пожалуйста, введите свой почтоый индекс",
        number: "Введите корректный индекс",
      },
      street: {
        required: "Пожалуйста, введите свою улицу",
        lettersonly: "Введите корректное улицу",
      },
      house: {
        required: "Пожалуйста, введите номер дома",
        number: "Введите корректный номер дома",
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


// let headerShop = document.getElementById("header_shop");
// let headerSearch = document.getElementById("header_search");
let headermenu = document.querySelectorAll(".header-info-link-title");
let arrow = document.querySelectorAll(".arrow");

let pastName = window.location.pathname === "/main.html";

function changeHeader() {
  
  headerLogo.src = "./images/icon/ESPIREO-white.svg";
  headerShop.src = "./images/icon/header-shop-white.svg";
  magnifier.src = "./images/icon/header-search-white.svg";
  headermenu.forEach((el) => {
    console.log("for")
    el.style.color = "#fff";
  });
  arrow.forEach((el) => {
    el.style.borderColor = "#FFF";
  });
}

if (pastName == true) {
  changeHeader();
}

// Scroll title

// const animateProgressBar = () => {
//   let scrollDistance = -section.getBoundingClientRect().top;
//   let progressWidth =
//     (scrollDistance /
//       (section.getBoundingClientRect().height -
//         document.documentElement.clientHeight)) *
//     100;
//   let value = Math.floor(progressWidth);
//   console.log(scrollDistance);
//   progressBar.style.width = value + "%";

//   if (value < 0) {
//     progressBar.style.width = "0%";
//   }
// };

// window.addEventListener("scroll", animateProgressBar);

// section.onscroll = function () {
//   var scrolled = window.pageYOffset;
//   console.log("Позиция скрола: " + scrolled);
// };
let section = document.querySelector(".checkout-data");
let titleOne = document.querySelector(".titleOne");
// titleOne.addEventListener("scroll", function () {
//   console.log("Pozicia titleOne - " + this.getBoundingClientRect());
// });

section.addEventListener("scroll", function () {
  console.log(this.scrollTop);
  if (this.scrollTop >= 623) {
    titleOne.innerHTML = "Адрес доставки";
  } else {
    titleOne.innerHTML = "Данные покупателя";
  }
});
