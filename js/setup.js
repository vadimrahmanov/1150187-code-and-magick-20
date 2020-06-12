'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

var wizards = [
  {
    name: WIZARD_NAMES[randomInteger(0, 8)] + ' ' + WIZARD_SURNAMES[randomInteger(0, 7)],
    coatColor: WIZARD_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: WIZARD_EYE_COLORS[randomInteger(0, 4)]
  },

  {
    name: WIZARD_NAMES[randomInteger(0, 8)] + ' ' + WIZARD_SURNAMES[randomInteger(0, 7)],
    coatColor: WIZARD_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: WIZARD_EYE_COLORS[randomInteger(0, 4)]
  },

  {
    name: WIZARD_NAMES[randomInteger(0, 8)] + ' ' + WIZARD_SURNAMES[randomInteger(0, 7)],
    coatColor: WIZARD_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: WIZARD_EYE_COLORS[randomInteger(0, 4)]
  },

  {
    name: WIZARD_NAMES[randomInteger(0, 8)] + ' ' + WIZARD_SURNAMES[randomInteger(0, 7)],
    coatColor: WIZARD_COAT_COLORS[randomInteger(0, 5)],
    eyesColor: WIZARD_EYE_COLORS[randomInteger(0, 4)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizzardsElements = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

document.querySelector('.setup-similar').classList.remove('hidden');

renderWizzardsElements();
