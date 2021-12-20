'use strict';
// FAQ-accordion

(function () {
  var accordionElements = document.querySelectorAll('.questions__item');

  if (accordionElements) {
    accordionElements.forEach(function (elem) {
      elem.classList.remove('questions__item--nojs');
      elem.addEventListener('click', function () {
        elem.classList.toggle('questions__item--active');
      });
      elem.addEventListener('keydown', onEnterKeydown);

      function onEnterKeydown(evt) {
        if (evt.key === 'Enter' || evt.keyCode === 13) {
          document.activeElement.classList.toggle('questions__item--active');
        }
      }
    });
  }
})();
'use strict';
// Filter-accordion

(function () {
  var accordionButtons = document.querySelectorAll('.filter h3');
  var accordionElements = document.querySelectorAll('.filter__block');

  if (accordionElements) {
    accordionElements.forEach(function (element) {
      element.classList.remove('filter__block--nojs');
    });
  }

  if (accordionButtons) {
    accordionButtons.forEach(function (button) {
      button.addEventListener('click', classToggle);
      button.addEventListener('keydown', onEnterKeydown);
    });
  }

  function classToggle(evt) {
    evt.target.parentNode.classList.toggle('filter__block--active');
  }

  function onEnterKeydown(evt) {
    if (evt.key === 'Enter' || evt.keyCode === 13) {
      document.activeElement.parentNode.classList.toggle('filter__block--active');
    }
  }
})();

// Show filter in tablet

(function () {
  var filter = document.querySelector('.catalog__filter');
  var filterOpenButton = document.querySelector('.filter__open-button');
  var filterCloseButton = document.querySelector('.filter__close-button');
  var overlay = document.querySelector('.overlay');

  if (filterOpenButton) {
    filterOpenButton.addEventListener('click', function () {
      filter.classList.add('catalog__filter--active');
      overlay.classList.remove('hidden');
      filterCloseButton.classList.remove('hidden');
      document.body.classList.add('no-scroll');
    });
  }

  if (filterCloseButton) {
    filterCloseButton.addEventListener('click', function () {
      filter.classList.remove('catalog__filter--active');
      overlay.classList.add('hidden');
      filterCloseButton.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    });
  }
})();

'use strict';

// Menu
(function () {
  var header = document.querySelector('.header__wrapper');
  var navMain = document.querySelector('.header__nav');
  var navToggle = document.querySelector('.header__nav-toggle');

  header.classList.remove('header__wrapper--nojs');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header__nav--closed')) {
        navMain.classList.remove('header__nav--closed');
        navMain.classList.add('header__nav--opened');
        header.classList.add('header__wrapper--active');
        document.body.classList.add('no-scroll');
      } else {
        navMain.classList.add('header__nav--closed');
        navMain.classList.remove('header__nav--opened');
        header.classList.remove('header__wrapper--active');
        document.body.classList.remove('no-scroll');
      }
    });
  }
})();
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
})();