import Game from './scr/game';
import Instructions from './scr/instructions';
import Scores from './scr/scores';
import Modal from './scr/modal';

// game
const app = document.getElementById("app");
console.log("hi");
// instructions 
const instructions = new Instructions();
app.prepend(instructions.container);

const canvas = document.getElementById("canvas");
const modal = new Modal();
let game = new Game(canvas, modal);

// scores
new Scores();

// new game button
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {game = new Game(canvas)});


// modal
app.appendChild(modal.container);
const modalReset = document.getElementById("modal-reset");
modalReset.addEventListener("click", () => {
  let modal = document.getElementById("modal");
  modal.style.display = 'none';
  game = new Game(canvas, modal);
});

// detect arrow key press
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
