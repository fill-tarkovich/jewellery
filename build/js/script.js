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
var filter = document.querySelector('.catalog__filter');
var wrapper = document.querySelector('.filter__wrapper');
var overlay = document.querySelector('.overlay');
var filterCloseButton = document.querySelector('.filter__close-button');
var opened = document.querySelector('filter__block--active');


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

  if (filterCloseButton || onOverlay) {
    filterCloseButton.addEventListener('click', function () {
      filter.classList.remove('catalog__filter--active');
      overlay.classList.add('hidden');
      filterCloseButton.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    });
  }
})();

function onOverlay() {
  overlay.addEventListener('click', function (evt) {
    if (evt.target !== wrapper) {
      filter.classList.remove('catalog__filter--active');
      overlay.classList.add('hidden');
      filterCloseButton.classList.add('hidden');
      document.body.classList.remove('no-scroll');
    }
  });
}

onOverlay();

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

(function () {
  var popupButton = document.querySelector('.header__link--login');
  var popupButtonTablet = document.querySelector('.header__tablet-login');
  var popup = document.querySelector('.popup');
  var popupWrapper = document.querySelector('.popup__wrapper');
  var popupCloseButton = document.querySelector('.popup__button-close');
  var userMail = document.querySelector('#user-mail');
  var navMain = document.querySelector('.header__nav');
  var header = document.querySelector('.header__wrapper');

  if (popupButton) {
    popupButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup();
      localStorage.setItem('mail', userMail.value);
      popupCloseButton.addEventListener('click', closePopup);
      onPopupEscKeydown();
      onOverlayClick();
    });
  }

  if (popupButtonTablet) {
    popupButtonTablet.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup();
      closeMenu();
      localStorage.setItem('mail', userMail.value);
      popupCloseButton.addEventListener('click', closePopup);
      onPopupEscKeydown();
      onOverlayClick();
    });
  }

  popupWrapper.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });

  function openPopup() {
    popup.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    userMail.focus();
  }

  function closePopup() {
    popup.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  }

  function onPopupEscKeydown() {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        closePopupHandler();
      }
    });
  }

  function onOverlayClick() {
    popup.addEventListener('click', function (evt) {
      if (evt.target !== popupWrapper) {
        closePopupHandler();
      }
    });
  }

  function closePopupHandler() {
    closePopup();
    window.removeEventListener('keydown', closePopupHandler);
    popupCloseButton.removeEventListener('click', closePopupHandler);
    popupButton.removeEventListener('click', closePopupHandler);
  }

  function closeMenu() {
    navMain.classList.add('page-header__nav--closed');
    navMain.classList.remove('page-header__nav--opened');
    header.classList.remove('page-header__wrapper--active');
  }

  /* Ловушка фокуса */

  function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), input[type="email"]:not([disabled]), input[type="password"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }

  if (popup) {
    trapFocus(popup);
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