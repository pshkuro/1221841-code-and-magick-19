'use strict';

// Модуль отрисовки 1 похожего волшебника
(function () {
  var similarWizardItemElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  // Добавляем в шаблон доп данные про wizard
  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardItemElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Отображаем wizard на странице - заполняем фрагмент
  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(createWizardElement(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();
