import Grid from './grid';

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
    if (this.lost()) {
      this.openModal("lost");
    } else if (this.won()) {
      this.openModal("won");
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

  openModal(status) {
    if (status === "won") {
      document.getElementsByTagName("h3")[1].innerText = '👵🏻 You Win! 👵🏻';
      document.getElementById('modal-reset').innerText = 'Play Again';
    } 
    modal.style.display = 'block';
  }
}
