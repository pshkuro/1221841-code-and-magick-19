'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 15;
var FONT_GAP = 15; // междустрочный интервал
var HELLO_HEIGHT = 50; // высота блока верхнего текста
var TEXT_HEIGHT = 20; // высота текста
var BAR_WIDTH = 40; // ширина колонки
var BAR_GAP = 50; // расстояние между колонками
var barHeight = CLOUD_HEIGHT - GAP - HELLO_HEIGHT - TEXT_HEIGHT - TEXT_HEIGHT - GAP; // высота колонки

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var calculateAvailableSpace = function (maxHeight, time, maxTime) {
  return (maxHeight - (maxHeight * time / maxTime));
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var AVAILABLE_SPACE = calculateAvailableSpace(barHeight, times[i], maxTime);

    // Время игроков
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP + HELLO_HEIGHT + AVAILABLE_SPACE + TEXT_HEIGHT);

    // Имена игроков
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP + HELLO_HEIGHT + TEXT_HEIGHT + TEXT_HEIGHT + barHeight);

    // Гистограмма
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'blue';
    }

    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + HELLO_HEIGHT + TEXT_HEIGHT + AVAILABLE_SPACE + TEXT_HEIGHT, BAR_WIDTH, (barHeight * times[i] / maxTime));
  }


};

