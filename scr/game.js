export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.drawGrid(4);
  }

  drawGrid(size) {
    for (let i = 0; i < size; i++) {
      
    }
  }
}