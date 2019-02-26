const highestNumber = 17;

const colors = [
[255,0,0, 255],
[255,96,0, 255],
[255,191,0, 255],
[223,255,0, 255],
[128,255,0, 255],
[32,255,0, 255],
[0,255,64, 255],
[0,255,159, 255],
[0,255,255, 255],
[0,159,255, 255],
[0,64,255, 255],
[32,0,255, 255],
[127,0,255, 255],
[223,0,255, 255],
[255,0,191, 255],
[255,0,96, 255]
];

let img;
let cells;

function colorImage(img, cells) {
  for (let row = 0; row < img.width; row++) {
    for (let column = 0; column < img.height; column++) {
      const cell = cells[row][column];
      const color = colors[cell];
      img.set(row, column, color);
    }
  }
  img.updatePixels();
}

function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);

  cells = createCells(windowWidth, windowHeight);
  cells = randomCells(cells, colors.length);
  img = createImage(windowWidth, windowHeight);
  img.loadPixels();

  //console.table(cells);
  //console.table(aisling(cells, colors.length));
  //console.table(aisling(aisling(cells, colors.length), colors.length));
}

function draw() {
  if (mouseIsPressed) {
    cells = randomCells(cells, colors.length);
  }
  cells = aisling(cells, colors.length);
  colorImage(img, cells);
  image(img, 0, 0);
}
