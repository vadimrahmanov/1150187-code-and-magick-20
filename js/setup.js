'use strict';

(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupSimilarBlock = document.querySelector('.setup-similar');
  var setupForm = document.querySelector('.setup-wizard-form');
  var setupCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupEye = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var coatField = setupForm.querySelector('input[name="coat-color"]');
  var eyeField = setupForm.querySelector('input[name="eyes-color"]');
  var fireballField = document.querySelector('input[name="fireball-color"]');

  setupSimilarBlock.classList.remove('hidden');

  setupCoat.addEventListener('click', function () {
    setupCoat.style.fill = window.util.getRandomArrayElement(window.util.WIZARD_COAT_COLORS);
    coatField.value = setupCoat.style.fill;
  });
  setupEye.addEventListener('click', function () {
    setupEye.style.fill = window.util.getRandomArrayElement(window.util.WIZARD_EYE_COLORS);
    eyeField.value = setupEye.style.fill;
  });
  setupFireball.addEventListener('click', function () {
    var randomBgColor = window.util.getRandomArrayElement(WIZARD_FIREBALL_COLORS);
    setupFireball.style.backgroundColor = randomBgColor;
    fireballField.value = randomBgColor;
  });
})();
