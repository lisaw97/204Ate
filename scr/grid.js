const points = {
  "🦟": 2,
  "🕷": 4,
  "🐧": 8,
  "😸": 16,
  "🐶": 32,
  "🐮": 64,
  "🐴": 128,
  "🤰🏻": 256
};

const icons = Object.keys(points);

export default class Grid {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    this.grid = this.makeGrid();
    this.score = 0;
  }

  makeGrid() {
    const grid = [];
    for (let i = 0; i < 4; i++) {
      grid.push([]);
      for (let j = 0; j < 4; j++) {
        grid[i].push(" ");
      }
    }
    grid[0][0] = icons[0];
    grid[1][0] = icons[0];
    return grid;
  }

  print() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    const spacing = this.dimensions.width / 4;
    const symbols = [];

    for (let i = 0; i < 4; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, spacing * i);
      this.ctx.lineTo(this.dimensions.width, spacing * i);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(spacing * i, 0);
      this.ctx.lineTo(spacing * i, this.dimensions.height);
      this.ctx.stroke();
    }

    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {
      const row = [];
      for (let colIdx = 0; colIdx < 4; colIdx++) {
        row.push(
          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : "X"
        );
        this.ctx.fillStyle = "red";
        this.ctx.font = "30px Verdana"
        this.ctx.fillText(this.grid[colIdx][rowIdx], spacing * rowIdx + 30, spacing * colIdx + 65);
      }
      symbols.push(`${row.join('|')}\n`);
    }
    console.log(symbols.join('--------\n'));
  }

  placeNewSymbol() {
    let row = 10;
    let col = 10;
    while (!this.isValidPos(row, col) || this.grid[row][col] != " ") {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
    }
    let idx = Math.floor(Math.random() * 2);
    this.grid[row][col] = icons[idx];
  }

  makeMove(direction) {
    switch (direction) {
      case 'left':
        for (let row = 0; row < 4; row++) {
          let newSymbols = this.moveHorizontally(row);
          for (let col = 0; col < 4; col++) {
            if (newSymbols.length > 0) {
              this.grid[row][col] = newSymbols.shift();
            } else {
              this.grid[row][col] = " ";
            }
          }
        }
        break;
      case 'right':
        for (let row = 0; row < 4; row++) {
          let newSymbols = this.moveHorizontally(row);
          for (let col = 3; col >= 0; col--) {
            if (newSymbols.length > 0) {
              this.grid[row][col] = newSymbols.pop();
            } else {
              this.grid[row][col] = " ";
            }
          }
        }
        break;
      case 'up':
        for (let col = 0; col < 4; col++) {
          let newSymbols = this.moveVertically(col);
          for (let row = 0; row < 4; row++) {
            if (newSymbols.length > 0) {
              this.grid[row][col] = newSymbols.shift();
            } else {
              this.grid[row][col] = " ";
            }
          }
        }
        break;
      case 'down':
        for (let col = 0; col < 4; col++) {
          let newSymbols = this.moveVertically(col);
          for (let row = 3; row >= 0; row--) {
            if (newSymbols.length > 0) {
              this.grid[row][col] = newSymbols.pop();
            } else {
              this.grid[row][col] = " ";
            }
          }
        }
        break;
    }
  }

  moveHorizontally(row) {
    //symbols array hold current symbols
    let symbols = [];
    for (let col = 0; col < 4; col++) {
      if (this.grid[row][col] != " ") {
        symbols.push(this.grid[row][col]);
      }
    }

    //new symbols after combining
    let newSymbols = [];
    let i = 0;
    while (i < symbols.length) {
      if (symbols[i] === symbols[i + 1]) {
        let newIcon =
          icons[icons.indexOf(symbols[i]) + 1];
        newSymbols.push(newIcon);
        i += 2;
        this.score += points[newIcon];
      } else {
        newSymbols.push(symbols[i]);
        i++;
      }
    }
    return newSymbols;
  }

  moveVertically(col) {
    //symbols array hold current symbols
    let symbols = [];
    for (let row = 0; row < 4; row++) {
      if (this.grid[row][col] != " ") {
        symbols.push(this.grid[row][col]);
      }
    }

    //new symbols after combining
    let newSymbols = [];
    let i = 0;
    while (i < symbols.length) {
      if (symbols[i] === symbols[i + 1]) {
        let newIcon = icons[icons.indexOf(symbols[i]) + 1];
        newSymbols.push(newIcon);
        i += 2;
        this.score += points[newIcon];
      } else {
        newSymbols.push(symbols[i]);
        i++;
      }
    }
    return newSymbols;
  }

  isValidPos(row, col) {
    if ((row < 0 || row > 4) || (col < 0 || col > 4)) {
      return false;
    }
    return true;
  }
}