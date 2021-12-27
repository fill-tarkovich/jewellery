'use strict';

// Slider

(function () {
  var slider = document.querySelector('.slider');

  if (slider) {
    new Swiper('.swiper', {
      mousewheel: true,
      spaceBetween: 30,
      navigation: {
        prevEl: '.swiper-button-custom-prev',
        nextEl: '.swiper-button-custom-next',
      },
      slidesPerView: 4,
      slidesPerGroup: 4,
      breakpoints: {
        1024: {
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class=" ${className} "> ${index + 1} </span>`;
            },
          },
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return `${current} of ${total}`;
            },
          },
        },
      },
    });
  }

  if(slider.querySelector('.swiper-pagination')) {
    slider.querySelector('.swiper-pagination').addEventListener('click' ,(evt) => {
      evt.preventDefault();
      if(evt.target.classList.contains('swiper-pagination-bullet')) {
        evt.target.click();
      }
    });
  }
})();
