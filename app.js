import Game from './scr/game';
import Instructions from './scr/instructions';
import Scores from './scr/scores';
import Modal from './scr/modal';

// game
const app = document.getElementById("app");

// instructions 
const instructions = new Instructions();
app.prepend(instructions.container);

const video = document.getElementById("video");

const mute = document.getElementById("mute");
mute.addEventListener("click", () => {
  if (mute.className === "fas fa-volume-mute fa-2x") {
    document.getElementById("video").src =
      "https://www.youtube.com/embed/ApmEM9-xA2c?&autoplay=1&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=ApmEM9-xA2c";
    mute.className = "fas fa-volume-up fa-2x";
  } else {
    document.getElementById("video").src =
      "https://www.youtube.com/embed/ApmEM9-xA2c?&autoplay=1&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=ApmEM9-xA2c";
    mute.className = "fas fa-volume-mute fa-2x";
  }
})

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
