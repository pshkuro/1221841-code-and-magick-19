'use strict';

(function () {

  // // Функция создания 1 wizard
  // function createWizard() {
  //   var name = window.getRandomArrayItem(window.data.NAMES) + ' ' + window.getRandomArrayItem(window.data.SURNAMES);
  //   var coatColor = window.getRandomArrayItem(window.data.COAT_COLORS);
  //   var eyesColor = window.getRandomArrayItem(window.data.EYES_COLORS);

  //   return {
  //     name: name,
  //     coatColor: coatColor,
  //     eyesColor: eyesColor
  //   };
  // }

  // // Функция создания нескольких wizard
  // function createWizards(num) {
  //   var wizards = [];

  //   for (var i = 0; i < num; i++) {
  //     var wizard = createWizard();
  //     wizards.push(wizard);
  //   }

  //   return wizards;
  // }

  // // Переменная содержит массив объектов нужных нам wizard
  // var wizardsData = createWizards(4);

  var coatColor;
  var eyesColor;
  var wizards = [];

  // Функция определения ранга волшебника (их отличности дру от друга)
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  // Указываем, что делать, если маги равны (Сортируем в алфавитном порядке)
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  // Фильтруем wizards в соответствии с выбором характеристик гл персонажа (плащ/глаза)
  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  // Перезаписываем обработчики-пустышки,
  // объявленные в wizard.js
  window.wizard.eyesChangeHandler = function (color) {
    eyesColor = color;
    updateWizards();
  };

  // И обработчик на смену цвета мантии
  window.wizard.coatChangeHandler = function (color) {
    coatColor = color;
    updateWizards();
  };

  // Загрузка данных на страницу
  function successHandler(data) {
    wizards = data;
    updateWizards();
  }

  window.load(successHandler, window.errorHandler);

  // Обработчик ошибок
  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
})();

