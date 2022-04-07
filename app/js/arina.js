const product = document.querySelector('.product-info-block');
const preview = document.querySelector('.product-img');
const btnCart = document.querySelector('.btn-cart');
const img = document.querySelectorAll('.img-gallery');
const slider = $(".product-items");

// product slider 
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function(e) {
    const thisPicture = e.target;
    const srcPicture = thisPicture.dataset.img;

    preview.setAttribute("src", srcPicture); 
  }
}

// slick slider
$(document).ready(function () {
  $('.product-items').slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    draggable: false,
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><div class="arrow arrow-slide"></div></button>'
  }); 
});

// Implementing navigation of slides using mouse scroll
slider.on('wheel', (function(e) {
  e.preventDefault();

  if(e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
}));

// off jQuery form styler in product.html
if(product) {
  (function ($) {
    $(function () {
      $('input').styler('destroy');
    });
  })(jQuery);
}