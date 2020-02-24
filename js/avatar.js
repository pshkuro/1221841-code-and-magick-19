'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var preview = document.querySelector('.setup-user-pic');
  window.fileChooser = document.querySelector('.upload input[type=file]');

  window.fileChooseHandler = function () {
    var file = window.fileChooser.files[0]; // .file хранит псевдомассив загруженных файлов
    var fileName = file.name.toLowerCase();

    // проверка, нужного ли формата загружаемое изображение
    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader(); // берет содержимое загружаемого файла

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file); // получаем содержимое в виде dataurl
    }
  };
})();
