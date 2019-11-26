import Grid from './grid';

export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.grid = new Grid(canvas, this.ctx, this.dimensions);
    this.grid.print();
  }

  makeMove(direction) {
    alert(`${direction} key pressed`);
  }
}
