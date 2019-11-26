const icons = [
  "🦟",
  "🕷",
  "🐧",
  "😸",
  "🐶",
  "🐮",
  "🐴",
  "🤰🏻"
]

export default class Grid {
  constructor(canvas, ctx, dimensions) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.grid = this.makeGrid();
    this.drawGrid();
  }

  drawGrid() {
    const spacing = this.dimensions.width / 4;
    for (let i = 0; i < 4; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, spacing * i);
      this.ctx.lineTo(this.dimensions.width, spacing * i);
      this.ctx.stroke();
      
      this.ctx.beginPath();
      this.ctx.moveTo(spacing * i, 0);
      this.ctx.lineTo(spacing * i, this.dimensions.height);
      this.ctx.stroke();
      
      for (let j = 0; j < 4; j++) {
        this.ctx.fillStyle = "red";
        this.ctx.fillText(this.grid[j][i], spacing * i + 10 , spacing * j + 10);
      }
    }
  }

  makeGrid() {
    const grid = [];
    for (let i = 0; i < 4; i++) {
      grid.push([]);
      for (let j = 0; j < 4; j++) {
        grid[i].push(null);
      }
    }
    grid[0][0] = icons[0];
    grid[1][0] = icons[0];
    return grid;
  }

  print() {
    const symbols = [];
    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      const row = [];
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        row.push(
          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : "X"
        );
      }
      symbols.push(`${row.join('|')}\n`);
    }
    console.log(symbols.join('--------\n'));
    
  }
}