document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
      type   : 'loop',
      perPage: 1,
      autoplay: true,
      direction: 'rtl',
    }).mount();
  });