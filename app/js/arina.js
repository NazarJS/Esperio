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
  $('.product-items').slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    dots: true,
    slidesToShow: 4,
    prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: block;"><i class="arrow up"></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;" aria-disabled="false"><i class="arrow down"></button>',
  });
});

// checking count of img slides
// if more than 5 then we show the button
slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  slick.$dots[0].style.display = 'none';

  if (slick.$dots[0].children.length > 4) {
    slick.$nextArrow[0].style.display = 'block';
    slick.$prevArrow[0].style.display = 'block';
  } else {
    slick.$nextArrow[0].style.display = 'none';
    slick.$prevArrow[0].style.display = 'none';
  }
});

// off jQuery form styler in product.html
if(product) {
  (function ($) {
    $(function () {
      $('input').styler('destroy');
    });
  })(jQuery);
}

if (matchMedia) {
  let screen576 = window.matchMedia("(max-width:576px)");
  screen576.addListener(accordionChanges);
  accordionChanges(screen576);
}

function accordionChanges(screen576) {
  if (screen576.matches) {
    console.log($(".aboutus-contact-item.address"))
    $(".aboutus-contact-item.social").after($(".aboutus-contact-item.address"));
  } else {
    $(".aboutus-contact-item.address").after($(".aboutus-contact-item.social"));
  }
}