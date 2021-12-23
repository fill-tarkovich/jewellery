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
