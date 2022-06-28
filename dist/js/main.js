$(document).ready(function () {
  // Top-Screen Slider
  $(".top-screen-slider").slick({
    autuHeight: true,
    adaptiveHeight: true,
    infinite: true,
    dots: true,
	autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
  // Aboutus slider

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
      billing_last_name: {
        lettersonly: true,
        required: true,
      },
      billing_first_name: {
        lettersonly: true,
        required: true,
      },
      billing_email: {
        email: true,
        required: true,
      },
      billing_phone: {
        telephone: true,
        required: true,
      },
      country: {
        lettersonly: true,
        required: true,
      },
      billing_city: {
        lettersonly: true,
        required: true,
      },
      billing_postcode: {
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
      payment_method: {
        required: true,
      },
    },
    messages: {
      billing_last_name: {
        required: "Пожалуйста, введите свою фамилию",
        lettersonly: "Введите корректную фамилию",
      },
      billing_first_name: {
        required: "Пожалуйста, введите свое имя",
        lettersonly: "Введите корректное имя",
      },
      billing_email: {
        required: "Пожалуйста, введите email",
        email: "Введите корректный email",
      },
      billing_phone: {
        required: "Пожалуйста, введите свой телефон",
        telephone: "Введите корректный номер",
      },
      country: {
        required: "Пожалуйста, введите свою страну",
        lettersonly: "Введите корректное название",
      },
      billing_city: {
        required: "Пожалуйста, введите свой город",
        lettersonly: "Введите корректное название",
      },
      billing_postcode: {
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
   /* submitHandler: function(form){
      disable_button('.cart-info .ui-basket','true', 'Товар добавляется');
    }*/
  });
});



$(document).ready(function () {
  $(".aboutus-slider").slick({
    slidesToShow: 3,
    autuHeight: true,
    adaptiveHeight: true,
    infinite: true,
    dots: false,
    variableWidth: true,
    prevArrow: $(".aboutus-prev"),
    nextArrow: $(".aboutus-next"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
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
  headerLogo.src = template_data.template_path+"/assets/images/icon/ESPIREO-white.svg";
  headerShop.src = template_data.template_path+"/assets/images/icon/header-shop-white.svg";
  magnifier.src = template_data.template_path+"/assets/images/icon/header-search-white.svg";
  burgerImg.src = template_data.template_path+"/assets/images/icon/header-burger-white.svg";
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

$(window).scroll(function () {

  // if ($(window).width() > '800'){
  scrol_top=$(window).scrollTop();
  var of = $('#header').outerHeight(true);
  var isMain = $('#top_screen');
  if(scrol_top > of) {
    $('body').addClass('fixed_header');
    if (!isMain.length) {
      $('body').css('paddingTop',$('#header').outerHeight(true)+'px')
    }

    if($('body').hasClass('home')) {

      headerLogo.src = template_data.template_path+"/assets/images/icon/ESPIREO.svg";
      headerShop.src = template_data.template_path+"/assets/images/icon/header-shop.svg";
      magnifier.src = template_data.template_path+"/assets/images/icon/header-magnifier.svg";
      burgerImg.src = template_data.template_path+"/assets/images/icon/header-mobile-menu.svg";

    }

  }else {
    $('body').removeClass('fixed_header');
    $('body').css('paddingTop',0)
    if (!isMain.length) {
      $('body').css('paddingTop',0)
    }

    if($('body').hasClass('home')) {
      headerLogo.src = template_data.template_path+"/assets/images/icon/ESPIREO-white.svg";
      headerShop.src = template_data.template_path+"/assets/images/icon/header-shop-white.svg";
      magnifier.src = template_data.template_path+"/assets/images/icon/header-search-white.svg";
      burgerImg.src = template_data.template_path+"/assets/images/icon/header-burger-white.svg";
    }
  }
  // }

});


// Form styler
(function ($) {
  $(function () {
    $("select").styler();
  });
})(jQuery);

// Iframe




// Imask for checkout.html
if (document.getElementById("#tel")) {
  var element = document.getElementById("tel");
  var maskOptions = {
    placeholder: "+{000}(00)000-00-00",
    mask: "+{000}(00)000-00-00",
  };
  var mask = IMask(element, maskOptions);
}
/*window.onload = function () {
  if (location.hash) {
    window.scrollTo(0, 0);
  }
};
*/




var scrollToAnchor = function(hash) {

  if (!hash) return;
  var term = $(hash);
  if (!term) return;

  var navHeigth = $('#header').innerHeight();

  var scrollto = term.offset().top - navHeigth - 10;
  $('html, body').stop().animate({scrollTop:scrollto}, 150);
  // console.log(scrollto, term.offset().top, navHeigth);

  // var id = term.attr('id');

  // var name = term.attr('name');

  // term.removeAttr('id').removeAttr('name');

  // $('html, body').animate({scrollTop:scrollto}, 0);


  // setTimeout(function() {
  //   term.attr('id', id).attr('name', name);
  // }, 500);

};

// $(window).load(function () {
//   console.log('asdas')
//   if (location.hash) {
//     scrollToAnchor(location.hash);
//   }
// });

$(window).on('load', function(){
  if (location.hash) {
    scrollToAnchor(location.hash);
  }
});


$('a[href*="#"]').click(function(e) {
  e.preventDefault();

  current_href=location.href.substr(0,location.href.indexOf("#"));
  target_href=this.href.substr(0,this.href.indexOf("#"));

  if(target_href!=current_href) {
    location=this.href;

  }else {

    var hash = this.href.substr(this.href.indexOf("#"));
    scrollToAnchor(hash);
  }

});
