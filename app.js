import Game from './scr/game';
import Instructions from './scr/instructions';

const app = document.getElementById("app");
const canvas = document.getElementById("canvas");
const game = new Game(canvas);
const instructions = new Instructions();

app.appendChild(instructions.container);

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
