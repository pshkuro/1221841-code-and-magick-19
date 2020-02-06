'use strict';

(function () {

  // Функция генерации случ эл заданного массива
  window.getRandomArrayItem = function (arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };
})();

