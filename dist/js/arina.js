$(".aboutus-contact-item").eq(1).addClass('adress')
$(".aboutus-contact-item").eq(2).addClass('social')

const product = document.querySelector('.product-info-block');
const preview = document.querySelector('.product-img');
const img = document.querySelectorAll('.img-gallery');
const slider = $('.product-items');

// changing the preview img using data-img
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function(e) {
    const thisPicture = e.target;
    const srcPicture = thisPicture.dataset.img;

    preview.setAttribute('src', srcPicture);
  }
}

// init slick slider
$(document).ready(function () {
  $('.product-items img').wrap('<div class="product-items-slide"></div>');
  $('.product-items').append('<div class="product-items-slick"></div>');
  $(".product-items-slide").prependTo($('.product-items-slick'))
  $('.product-items-slick').slick({
    slidesToShow: 4,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="arrow up"></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="arrow down"></button>',
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  if(product) {
    $('input').styler('destroy');
    // (function ($) {
    //   $(function () {

    //   });
    // })(jQuery);
  }
});

// checking count of img slides
// if more than 5 then we show the button
// slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//   slick.$dots[0].style.display = 'none';

//   if (slick.$dots[0].children.length > 4) {
//     slick.$nextArrow[0].style.display = 'block';
//     slick.$prevArrow[0].style.display = 'block';
//   } else {
//     slick.$nextArrow[0].style.display = 'none';
//     slick.$prevArrow[0].style.display = 'none';
//   }
// });

// off jQuery form styler in product.html


if (matchMedia) {
  let screen576 = window.matchMedia("(max-width:576px)");
  screen576.addListener(accordionChanges);
  accordionChanges(screen576);
}

function accordionChanges(screen576) {
  if (screen576.matches) {
    $(".aboutus-contact-item.social").after($(".aboutus-contact-item.address"));
  } else {
    $(".aboutus-contact-item.address").after($(".aboutus-contact-item.social"));
  }
}