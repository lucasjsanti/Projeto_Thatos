Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: false,
  animated: true,
  dragToClose: false,

  showClass: false,
  hideClass: false,

  closeButton: "top",

  Image: {
    click: "false",
    wheel: "slide",
    zoom: false,
    fit: "contain",
  },

  Thumbs: {
    minScreenHeight: 0,
  },
});

Fancybox.fromOpener('[data-fancybox="gallery"]', {
  startIndex: 1,
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function passaSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelector(".mySlideVideo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
