'use strict';

var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rg(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Переменная содержит массив объектов нужных нам wizard
var wizardsData = createWizards(4);

// Функция генерации случ эл заданного массива
function getRandomArrayItem(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Функция создания 1 wizard
function createWizard() {
  var name = getRandomArrayItem(NAMES) + ' ' + getRandomArrayItem(SURNAMES);
  var coatColor = getRandomArrayItem(COAT_COLORS);
  var eyesColor = getRandomArrayItem(EYES_COLORS);

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

// показываем общий блок для выбора wizard
var dialogUser = document.querySelector('.setup');

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
var renderWizards = function (data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    fragment.appendChild(createWizardElement(data[i]));
  }

  similarListElement.appendChild(fragment);
};

renderWizards(wizardsData);

// Работаем над интерфейсом окна dialogUser
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setupOpen = document.querySelector('.setup-open');
var setupClose = dialogUser.querySelector('.setup-close');
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

var openPopup = function () {
  dialogUser.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
  setupSumbit.addEventListener('click', setupSubmitHandler);
  setupSumbit.addEventListener('keydown', setupSubmitEnterHandler);
};

var closePopup = function () {
  dialogUser.classList.add('hidden');
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

// Реализовываем выбор цвета характеристик персонажа по нажатию
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

function setRandomFillColor(element, arr) {
  element.style.fill = getRandomArrayItem(arr);
}

wizardCoat.addEventListener('click', function () {
  setRandomFillColor(wizardCoat, COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  setRandomFillColor(wizardEyes, EYES_COLORS);
});

fireballColor.addEventListener('click', function () {
  fireballColor.style.background = getRandomArrayItem(FIREBALL_COLORS);
});


