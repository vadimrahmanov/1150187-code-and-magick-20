'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_AMOUNT = 4;

var setup = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = document.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
var setupForm = document.querySelector('.setup-wizard-form');
var setupCoat = document.querySelector('.setup-wizard .wizard-coat');
var setupEye = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var similarListElement = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var nameInput = setupForm.querySelector('.setup-user-name');
var coatField = setupForm.querySelector('input[name="coat-color"]');
var eyeField = setupForm.querySelector('input[name="eyes-color"]');
var fireballField = document.querySelector('input[name="fireball-color"]');

var randomArrayElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var setupOpenAndCloseElements = function () {
  var onPopupEscPress = function (evt) {
    if (nameInput !== document.activeElement) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closePopup();
      }
    }
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  setupOpenButton.addEventListener('click', function () {
    openPopup();
  });
  setupIcon.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });
  setupCloseButton.addEventListener('click', function () {
    closePopup();
  });
  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      closePopup();
    }
  });
};

var createWizzard = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards.push({
      name: [randomArrayElement(WIZARD_NAMES), randomArrayElement(WIZARD_SURNAMES)].join(' '),
      coatColor: randomArrayElement(WIZARD_COAT_COLORS),
      eyesColor: randomArrayElement(WIZARD_EYE_COLORS)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizzardsElements = function () {
  var wizards = createWizzard();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var setupWizard = function () {
  setupCoat.addEventListener('click', function () {
    setupCoat.style.fill = randomArrayElement(WIZARD_COAT_COLORS);
    coatField.value = setupCoat.style.fill;
  });
  setupEye.addEventListener('click', function () {
    setupEye.style.fill = randomArrayElement(WIZARD_EYE_COLORS);
    eyeField.value = setupEye.style.fill;
  });
  setupFireball.addEventListener('click', function () {
    var randomBgColor = randomArrayElement(WIZARD_FIREBALL_COLORS);
    setupFireball.style.backgroundColor = randomBgColor;
    fireballField.value = randomBgColor;
  });
};

var init = function () {
  setupSimilarBlock.classList.remove('hidden');
  setupOpenAndCloseElements();
  setupWizard();
  renderWizzardsElements();
};

init();
