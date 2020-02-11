'use strict';

(function () {
  // Загрузка данных на сервер
  var URL = 'https://js.dump.academy/code-and-magick';
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var TIMEOUT_IN_MS = 10000;
  var statusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    USER_NOT_AUTHORIZES: 401,
    NOT_FOUND: 404
  };

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL_LOAD);

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case statusCode.OK:
          onLoad(xhr.response);
          break;

        case statusCode.BAD_REQUEST:
          error = 'Неверный запрос';
          break;

        case statusCode.USER_NOT_AUTHORIZES:
          error = 'Пользователь не авторизован';
          break;

        case statusCode.NOT_FOUND:
          error = 'Ничего не найдено';
          break;

        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });


    xhr.send();
  };

  window.save = function (data, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
