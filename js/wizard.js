'use strict';

// Модуль настройки главного персонажа
(function () {

  // Реализовываем выбор цвета характеристик персонажа по нажатию
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name="eyes-color"]');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  var wizard = {
    eyesChangeHandler: function () {},
    coatChangeHandler: function () {}
  };

  wizardCoat.addEventListener('click', function () {
    var color = window.getRandomArrayItem(window.data.COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardCoatInput.value = color;
    wizard.coatChangeHandler(color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.getRandomArrayItem(window.data.EYES_COLORS);
    wizardEyes.style.fill = color;
    wizardEyesInput.value = color;
    wizard.eyesChangeHandler(color);
  });

  fireballColor.addEventListener('click', function () {
    var color = window.getRandomArrayItem(window.data.FIREBALL_COLORS);
    fireballColor.style.background = color;
    fireballColorInput.value = color;
  });

  window.wizard = wizard;
})();
