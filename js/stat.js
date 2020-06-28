'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var BAR_X = 140;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var FONT_SIZE = 16;
  var TEXT_GAP = 7;
  var TEXT_WIDTH = 40;
  var TEXT_Y = 40;

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

  var randomInteger = function (min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', 120, TEXT_Y);
    ctx.fillText('Список результатов:', 120, TEXT_Y + FONT_SIZE + TEXT_GAP);
    ctx.font = '16px "PT Mono"';

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var proportion = times[i] / maxTime;
      var columnHeight = BAR_HEIGHT * proportion;
      var columnYSpace = FONT_SIZE * 2 + TEXT_GAP * 3 + BAR_HEIGHT;
      var columnLeftOffset = BAR_X + (TEXT_WIDTH + BAR_GAP) * i;
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), columnLeftOffset, TEXT_Y + (FONT_SIZE + TEXT_GAP) * 2 + BAR_HEIGHT - columnHeight);
      ctx.fillText(players[i], columnLeftOffset, TEXT_Y + columnYSpace + TEXT_GAP + FONT_SIZE);
      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + randomInteger(40, 100) + '%, 60%)';
      ctx.fillRect(columnLeftOffset, TEXT_Y + columnYSpace - columnHeight, BAR_WIDTH, columnHeight);
    }
  };
})();
