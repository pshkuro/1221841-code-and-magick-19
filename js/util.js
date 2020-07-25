'use strict';

(function () {

  window.getRandomArrayItem = function (arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  // Функция генерации массива случайных элементов заданной длины
  window.getRandomArray = function (arr, number) {
    for (var i = 0; i < arr.length; i++) {
      var r = Math.floor(Math.random() * (arr.length - i)) + i;
      var data = arr[r];
      arr[r] = arr[i];
      arr[i] = data;
    }
    return arr.slice(0, number);
  };
})();

