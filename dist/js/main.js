$(document).ready(function () {
  // Top-Screen Slider
  $(".top-screen-slider").slick({
    autuHeight: true,
    adaptiveHeight: true,
    infinite: true,
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
      payment: {
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
    invalidHandler: function () {
      setTimeout(function () {
        $("input, select").trigger("refresh");
      }, 1);
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
let headermenu = document.querySelectorAll(".header-info-link-title");
let arrow = document.querySelectorAll(".arrow");
// change possition for header
let headerabsolute = document.querySelector(".header");
// Button for mobile-catalog
let tocard = document.querySelectorAll(".col-hide");
let opencard = document.querySelector(".main-catalog-btn");

function changeHeader() {
  headerLogo.src = "./images/icon/ESPIREO-white.svg";
  headerShop.src = "./images/icon/header-shop-white.svg";
  magnifier.src = "./images/icon/header-search-white.svg";
  // change posittion of header
  headerabsolute.style.position = "absolute";
  headerabsolute.style.width = "100%";
  headerMob.style.marginBottom = "150px";
  headermenu.forEach((el) => {
    el.style.color = "#fff";
  });
  arrow.forEach((el) => {
    el.style.borderColor = "#FFF";
  });
}

if (document.querySelector(".top-screen")) {
  changeHeader();
  opencard.onclick = () => {
    tocard.forEach((el) => {
      el.style.display = "block";
    });
  };
}

// Form styler
(function ($) {
  $(function () {
    $("select").styler();
  });
})(jQuery);

// Iframe
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
      center: [53.931429, 27.650162],
      controls: [],
      zoom: 17,
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [53.931429, 27.650162],
      {
        hintContent: "Собственный значок метки с контентом",
        balloonContent: "Мы тут!",
        iconContent: "12",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "images/icon/ESPIRIO-map-icon.svg",
        // Размеры метки.
        iconImageSize: [106, 119],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
}

// Imask for checkout.html
if (document.getElementById("#tel")) {
  var element = document.getElementById("tel");
  var maskOptions = {
    placeholder: "+{000}(00)000-00-00",
    mask: "+{000}(00)000-00-00",
  };
  var mask = IMask(element, maskOptions);
}
