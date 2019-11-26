import Grid from './grid';

export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.grid = new Grid(canvas, this.ctx, this.dimensions);
    this.grid.print();
  }

  makeMove(direction) {
    this.grid.makeMove(direction);
    this.grid.placeNewSymbol();
    this.grid.print();
    if (this.lost() || this.won()) {

    }
  }

  lost() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid.grid[row][col] === " ") {
          return false;
        }
      }
    }
    alert("Game Over");
    return true;
  }

  won() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid.grid[row][col] === "🤰🏻") {
          alert("You won!");
          return true;
        }
      }
    }
    return false;
  }
}
