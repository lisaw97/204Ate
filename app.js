const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

import Game from './scr/game';
import Instructions from './scr/instructions';
import Scores from './scr/scores';
import Modal from './scr/modal';

// game
const app = document.getElementById("app");
const canvas = document.getElementById("canvas");
const modal = new Modal();
let game = new Game(canvas, modal);

// scores
new Scores();

// new game button
const reset = document.getElementById("reset");
reset.addEventListener("click", () => {game = new Game(canvas)});

// instructions 
const instructions = new Instructions();
app.appendChild(instructions.container);

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
