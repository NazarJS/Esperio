// product slider 
const preview = document.querySelector('.product-img');
const img = document.querySelectorAll('.img-gallery');

for (let i = 0; i < img.length; i++) {
  img[i].onclick = function(e) {
    const thisPicture = e.target;
    const srcPicture = thisPicture.dataset.img;

    console.log(thisPicture.dataset.img)

    preview.setAttribute("src", '/images/examples/' + srcPicture + '.png'); 
  }
}