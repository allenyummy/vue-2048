import { dir } from 'console';

import { ArrowEvent } from '@/types';

interface Cell {}

interface ITile {
  id: number;
  value: number;
  row: number;
  column: number;
  oldRow?: number;
  oldColumn?: number;
  markForDeletion?: boolean;
  // mergedInto: unknown;
}

class Tile {
  id: number;
  value: number;
  row: number;
  column: number;
  oldRow = -1;
  oldColumn = -1;
  markForDeletion = false;
  // mergedInto = null;
  // this.id = Tile.id++;

  constructor(tile: ITile) {
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
  randomFourProbability = 0.1;

  constructor() {
    this.tiles = [];
    this.cells = [];
    this.initCell();
    this.addRandomTile();
    this.setPositions();
  }

  initCell() {
    for (let i = 0; i < this.size; i++) {
      const row: ITile[] = [];
      for (let j = 0; j < this.size; j++) {
        const tile = this.addTile();
        this.tiles.push(tile);
        row.push(tile);
      }
      this.cells[i] = row;
    }
  }

  addTile(value: number = 0): ITile {
    const tile = new Tile({
      value,
      row: -1,
      column: -1,
      id: 0,
    });
    return tile;
  }

  addRandomTile() {
    const emptyCells = [];
    for (let r = 0; r < this.size; ++r) {
      for (let c = 0; c < this.size; ++c) {
        if (this.cells[r][c].value == 0) {
          emptyCells.push({ r: r, c: c });
        }
      }
    }
    if (emptyCells.length == 0) {
      return;
    }
    const randomIndex = ~~(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];
    const newValue = Math.random() < this.randomFourProbability ? 4 : 2;
    this.cells[cell.r][cell.c] = this.addTile(newValue);
  }

  setPositions() {
    this.cells.forEach((row, rowIndex) => {
      row.forEach((tile, columnIndex) => {
        tile.oldRow = tile.row;
        tile.oldColumn = tile.column;
        tile.row = rowIndex;
        tile.column = columnIndex;
        tile.markForDeletion = false;
      });
    });
  }

  move(direction: ArrowEvent) {
    console.log(direction);
    this.addRandomTile();
    this.setPositions();
  }
}

export { Board };
