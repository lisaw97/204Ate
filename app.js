import Game from './scr/game';
import Instructions from './scr/instructions';
import Scores from './scr/scores';

// game
const app = document.getElementById("app");
const canvas = document.getElementById("canvas");
let game = new Game(canvas);

// scores
new Scores();

// new game button
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {game = new Game(canvas)});

// instructions 
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
