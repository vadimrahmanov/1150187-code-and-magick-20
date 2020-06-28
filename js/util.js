'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var setup = document.querySelector('.setup');

  window.util = {
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYE_COLORS: WIZARD_EYE_COLORS,
    setup: setup,
    setupWindowLeft: setup.style.left,
    setupWindowTop: setup.style.top,
    getRandomArrayElement: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === 'Enter') {
        action();
      }
    },
    isEscEvent: function (evt, action, dontCloseIfFocused) {
      if (dontCloseIfFocused !== document.activeElement && evt.key === 'Escape') {
        evt.preventDefault();
        action();
      }
    }
  };
})();
