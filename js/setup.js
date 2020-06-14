'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

var setup = document.querySelector('.setup');
var setupSimilarBlock = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomArrayElement = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
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

var init = function () {
  setup.classList.remove('hidden');
  setupSimilarBlock.classList.remove('hidden');
  renderWizzardsElements();
};

init();
