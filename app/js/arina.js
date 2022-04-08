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

  }); 
});

// checking count of img slides 
// if more than 5 then we show the button 
slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  console.log(slick)
  if (slick.$dots[0].children.length > 5) {
    slick.$nextArrow[0].style.display = 'block';
    slick.$prevArrow[0].style.display = 'block';
  } else {
    slick.$nextArrow[0].style.display = 'none';
    slick.$prevArrow[0].style.display = 'none';
  }
});

// implementing navigation of slides using mouse scroll
slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
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