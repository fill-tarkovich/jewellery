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