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