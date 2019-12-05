import Grid from './grid';
import Modal from './modal';

export default class Game {
  constructor(canvas, modal) {
    this.grid = new Grid(canvas);
    this.grid.print();
    this.displayScore();
  }

  makeMove(direction) {
    this.grid.makeMove(direction);
    this.grid.placeNewSymbol();
    this.grid.print();
    if (this.lost() || this.won()) {
      this.openModal();
    }
    this.displayScore();
  }

  displayScore() {
    let currentScore = document.getElementById("currentScore");
    if (currentScore) currentScore.innerText = `Score: ${this.grid.score}`;
  }

  lost() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid.grid[row][col] === " ") {
          return false;
        }
      }
    }
    return true;
  }

  won() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid.grid[row][col] === "🤰🏻") {
          return true;
        }
      }
    }
    return false;
  }

  openModal() {
    modal.style.display = 'block';
  }
}
