'use strict';

var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rg(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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
dialogUser.classList.remove('hidden');

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


