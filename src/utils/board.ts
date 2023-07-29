interface Cell {}

interface ITile {
  id: number;
  value: number;
  row: number;
  column: number;
  // oldRow: number;
  // oldColumn: number;
  // markForDeletion: boolean;
  // mergedInto: unknown;
}

class Tile {
  id: number;
  value: number;
  row: number;
  column: number;
  // oldRow = -1;
  // oldColumn = -1;
  // markForDeletion = false;
  // mergedInto = null;
  // this.id = Tile.id++;

  constructor(tile: ITile) {
    // this.tile = tile;
    const { id, value, row, column } = tile;
    this.value = value;
    this.row = row;
    this.column = column;
    this.id = id;
  }
}

class Board {
  tiles: ITile[];
  cells: ITile[][];
  size = 4;

  constructor() {
    this.tiles = [];
    this.cells = [];

    for (let i = 0; i < this.size; i++) {
      const row: ITile[] = [];
      for (let j = 0; j < this.size; j++) {
        const tile = this.addTile();
        this.tiles.push(tile);
        row.push(tile);
      }
      this.cells[i] = row;
    }

    // Set random value

    // Set position
  }

  addTile(): ITile {
    const tile = new Tile({
      value: 0,
      row: -1,
      column: -1,
      id: 0,
    });
    return tile;
  }

  addRandomTile() {
    // var emptyCells = [];
    // for (var r = 0; r < Board.size; ++r) {
    //   for (var c = 0; c < Board.size; ++c) {
    //     if (this.cells[r][c].value == 0) {
    //       emptyCells.push({ r: r, c: c });
    //     }
    //   }
    // }
    // var index = ~~(Math.random() * emptyCells.length);
    // var cell = emptyCells[index];
    // var newValue = Math.random() < Board.fourProbability ? 4 : 2;
    // this.cells[cell.r][cell.c] = this.addTile(newValue);
  };
}

export { Board };
