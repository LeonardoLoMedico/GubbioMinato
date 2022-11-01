const debug = false;
const prompt = require("prompt-sync")();
const gridGamer = require("./grid");
const gridPoo = JSON.parse(JSON.stringify(gridGamer));
const GridTerminalPrinter = require("./GridTerminalPrinter");
const GridHandler = require("./GridHandler");
const startingPosition = 6;
let movement = " ";
let terminalPrintGamer = new GridTerminalPrinter(gridGamer);
let terminalPrintPoo = new GridTerminalPrinter(gridPoo);
let gridHandlerGamer = new GridHandler(movement, startingPosition);

play();

function play() {
  terminalPrintGamer.buildGrid();
  terminalPrintPoo.buildGrid();
  //////////////////////////////
  gridHandlerGamer.setGamerOnGrid();
  let poo = gridHandlerGamer.dropPoo(gridPoo);
  if (debug) {
    terminalPrintPoo.printGrid();
    console.log();
  }
  terminalPrintGamer.printGrid();
  console.log();

  while (gridHandlerGamer.checkIfSteppedOnPoo(poo)) {
    movement = prompt(
      "Inserisci la direzione in cui ti vuoi muovere(w.s,a,d): "
    );
    gridHandlerGamer.stepOn(gridGamer, movement);
    terminalPrintGamer.printGrid();
    console.log();
    if (gridHandlerGamer.checkWin()) {
      break;
    }
  }
}
