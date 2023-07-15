class Board {
  cells: number[][];
  size = 4;

  constructor() {
    this.cells = [];
    for (let i = 0; i < this.size; i++) {
      this.cells[i] = [1, 1, 1, 1];
    }
  }
}

export { Board };
