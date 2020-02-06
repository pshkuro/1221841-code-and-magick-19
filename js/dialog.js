'use strict';

(function () {

  // Работаем над интерфейсом окна dialogUser

  // общий блок для выбора wizard dialog
  window.dialogUser = document.querySelector('.setup');

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.dialogUser.querySelector('.setup-close');
  var setupSumbit = document.querySelector('.setup-submit');

  // Отправка формы на сервер через кнопку Сохранить
  var setupSubmitHandler = function () {
    setupSumbit.submit();
  };

  var setupSubmitEnterHandler = function (evt) {
    if (evt.key === ENTER_KEY) {
      setupSumbit.submit();
    }
  };

  // Открытие/закрытие окна
  var popupEscPressHandler = function (evt) {
    if (evt.key === ESC_KEY && evt.target.tagName !== 'INPUT') {
      closePopup();
    }
  };

  // при повторном открытии/закрытии диалога, положение диалога должно сбрасываться на изначальное
  var initialTop = window.dialogUser.style.top;
  var initialLeft = window.dialogUser.style.left;

  function restoreDialogPosition() {
    window.dialogUser.style.top = initialTop;
    window.dialogUser.style.left = initialLeft;
  }

  var openPopup = function () {
    window.dialogUser.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    setupSumbit.addEventListener('click', setupSubmitHandler);
    setupSumbit.addEventListener('keydown', setupSubmitEnterHandler);
    restoreDialogPosition();

  };

  var closePopup = function () {
    window.dialogUser.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
    setupSumbit.removeEventListener('click', setupSubmitHandler);
    setupSumbit.removeEventListener('keydown', setupSubmitEnterHandler);
  };


  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      closePopup();
    }
  });
})();
