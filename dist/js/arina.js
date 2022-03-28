const product = document.querySelector('.product-info-block');
const preview = document.querySelector('.product-img');
const img = document.querySelectorAll('.img-gallery');

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
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  }); 
});

// off jQuery form styler in product.html
if(product) {
  (function ($) {
    $(function () {
      $('input').styler('destroy');
    });
  })(jQuery);
}
