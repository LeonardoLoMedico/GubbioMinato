let GridTerminalPrinter = class {
  constructor(grid) {
    this.grid = grid;
  }

  buildGrid() {
    let gr = "";
    let dim = this.grid.arr.length;
    for (let i = 0; i < dim; i++) {
      if (i % 3 == 0 && i != 0) {
        gr = gr + "\n";
      }
      gr = gr + this.grid.arr[i] + " ";
    }
    //console.log(gr);
    return gr;
  }
  printGrid() {
    console.log(this.buildGrid());
  }
};
module.exports = GridTerminalPrinter;
