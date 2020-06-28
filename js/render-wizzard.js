'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_AMOUNT = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizzard = function () {
    var wizards = [];
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      wizards.push({
        name: [window.util.getRandomArrayElement(WIZARD_NAMES), window.util.getRandomArrayElement(WIZARD_SURNAMES)].join(' '),
        coatColor: window.util.getRandomArrayElement(window.util.WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomArrayElement(window.util.WIZARD_EYE_COLORS)
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

  renderWizzardsElements();
})();
