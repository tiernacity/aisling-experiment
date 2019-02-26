'use strict';

function createCells(width, height) {
  return Array(width).fill(0).map(() => Array(height).fill(0));
}

function randomCells(cells, highestNumber) {
  return cells.map(row => row.map(cell => randomNumber(highestNumber)));
}

function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max)); 
}

function neighbourCells(cells, row, column) {
  const width = cells[0].length;
  const height = cells.length;

  const rowNorth = (row - 1 + height) % height;
  const rowSouth = (row + 1 + height) % height;
  const columnEast = (column + 1 + width) % width;
  const columnWest = (column - 1 + width) % width;

  const neighbourNorth = cells[rowNorth][column];
  const neighbourSouth = cells[rowSouth][column];
  const neighbourEast = cells[row][columnEast];
  const neighbourWest = cells[row][columnWest];

  const neighbourNorthEast = cells[rowNorth][columnEast];
  const neighbourNorthWest = cells[rowNorth][columnWest];
  const neighbourSouthEast = cells[rowSouth][columnEast];
  const neighbourSouthWest = cells[rowSouth][columnWest];

  return [neighbourNorth, neighbourSouth, neighbourEast, neighbourWest, neighbourNorthEast, neighbourNorthWest, neighbourSouthEast, neighbourSouthWest];
}

function zeroCells(cells) {
  return cells.map((row, rowIndex) => row.map((cell, columnIndex) => {
    const neighbours = neighbourCells(cells, rowIndex, columnIndex);
    if (neighbours.includes(0)) {
      return 0;
    }
    return cells[rowIndex][columnIndex];
  }));
}

function aisling(cells, highestNumber) {
  return cells.map((row, rowIndex) => row.map((cell, columnIndex) => {
    const myNumber = cells[rowIndex][columnIndex];
    const nextNumber = (myNumber + 1 + highestNumber) % highestNumber;
    
    const neighbours = neighbourCells(cells, rowIndex, columnIndex);
    if (neighbours.includes(nextNumber)) {
      return nextNumber;
    }
    return myNumber;
  }));
}
