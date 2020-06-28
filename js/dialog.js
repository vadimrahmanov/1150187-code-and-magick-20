'use strict';

(function () {
  var setupCloseButton = document.querySelector('.setup-close');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupIcon = document.querySelector('.setup-open-icon');
  var setupForm = document.querySelector('.setup-wizard-form');
  var nameInput = setupForm.querySelector('.setup-user-name');

  var setupWindowDefPosition = function () {
    var setupWindowTop = window.util.setupWindowTop;
    var setupWindowLeft = window.util.setupWindowLeft;
    window.util.setup.style.top = setupWindowTop;
    window.util.setup.style.left = setupWindowLeft;
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupWindowDefPosition();
  };
  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    setupWindowDefPosition();
    document.removeEventListener('keydown', onPopupEscPress);
  };
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup, nameInput);
  };
  var onPopupEnterPress = function (evt) {
    if (window.util.setup.classList.contains('hidden')) {
      window.util.isEnterEvent(evt, openPopup);
    } else {
      window.util.isEnterEvent(evt, closePopup);
    }
  };
  setupOpenButton.addEventListener('click', function () {
    openPopup();
  });
  setupCloseButton.addEventListener('click', function () {
    closePopup();
  });
  setupIcon.addEventListener('keydown', onPopupEnterPress);
  setupCloseButton.addEventListener('keydown', onPopupEnterPress);
})();
