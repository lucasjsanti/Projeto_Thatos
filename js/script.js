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
