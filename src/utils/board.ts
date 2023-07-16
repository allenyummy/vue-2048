class Board {
  cells: number[][];
  size = 4;

  constructor() {
    this.cells = [];
    for (let i = 0; i < this.size; i++) {
      this.cells[i] = [32, 4, 128, 2048];
    }
  }
}

export { Board };
