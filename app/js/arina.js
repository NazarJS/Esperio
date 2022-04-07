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
    dots: true,
    prevArrow: false,
    nextArrow: false,
    vertical: true,
    verticalSwiping: true,
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