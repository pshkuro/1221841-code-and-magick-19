'use strict';
(function () {
  // Перемещение диалога
  var dialogHandle = window.dialogUser.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function onMouseDown(evt) {
    evt.preventDefault();

    // Координаты курсора в момент клика относительно окна, для событий мыши.
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      // Расстояние на которое двигается курсор от начального положения (где он был по щелчку) до опускания кнопки мышки
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.dialogUser.style.top = (window.dialogUser.offsetTop - shift.y) + 'px';
      window.dialogUser.style.left = (window.dialogUser.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

    };

    // Обработчики события передвижения мыши и отпускания кнопки мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
