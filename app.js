import Game from './scr/game';

const canvas = document.getElementById("app");
const game = new Game(canvas);

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      game.makeMove('left');
      break;
    case 38:
      game.makeMove('up');
      break;
    case 39:
      game.makeMove('right');
      break;
    case 40:
      game.makeMove('down');
      break;
  }
};
