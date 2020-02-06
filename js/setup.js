'use strict';

(function () {

  // Функция создания 1 wizard
  function createWizard() {
    var name = window.getRandomArrayItem(window.data.NAMES) + ' ' + window.getRandomArrayItem(window.data.SURNAMES);
    var coatColor = window.getRandomArrayItem(window.data.COAT_COLORS);
    var eyesColor = window.getRandomArrayItem(window.data.EYES_COLORS);

    return {
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  }

  // Функция создания нескольких wizard
  function createWizards(num) {
    var wizards = [];

    for (var i = 0; i < num; i++) {
      var wizard = createWizard();
      wizards.push(wizard);
    }

    return wizards;
  }

  // Переменная содержит массив объектов нужных нам wizard
  var wizardsData = createWizards(4);

  // показываем блок, где будут располагаться наши похожие wizard
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list'); // элемент, в кот будем вставлять wizard
  var similarWizardItemElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Добавляем в шаблон доп данные про wizard
  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardItemElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Отображаем wizard на странице - заполняем фрагмент
  window.renderWizards = function (data) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(createWizardElement(data[i]));
    }

    similarListElement.appendChild(fragment);
  };

  window.renderWizards(wizardsData);

  // Реализовываем выбор цвета характеристик персонажа по нажатию
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var color = window.getRandomArrayItem(window.data.COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.getRandomArrayItem(window.data.EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
  });

  fireballColor.addEventListener('click', function () {
    var color = window.getRandomArrayItem(window.data.FIREBALL_COLORS);
    fireballColor.style.background = color;
    fireballColorInput.value = color;
  });

})();

