'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_X = 140;
var BAR_Y = 240;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_GAP = 50;
var TEXT_WIDTH = 40;
var TEXT_Y = 260;
var SCORE_Y = 80;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  ctx.font = '16px "PT Mono"';

  var maxTime = getMaxElement(times);

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_X + (TEXT_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), BAR_X + (TEXT_WIDTH + BAR_GAP) * i, SCORE_Y / (times[i] / maxTime));
    ctx.fillStyle = (players[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(240,' + randomInteger(40, 100) + '%, 60%)';
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};
