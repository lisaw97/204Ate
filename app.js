import Game from './scr/game';

const canvas = document.getElementById("app");
const game = new Game(canvas);

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      // alert("Left key pressed");
      game.makeMove('left');
      break;
    case 38:
      // alert("Up key pressed");
      game.makeMove('up');
      break;
    case 39:
      // alert("Right key pressed");
      game.makeMove('right');
      break;
    case 40:
      // alert("Down key pressed");
      game.makeMove('down');
      break;
  }
};
