const grid = require("./grid");
const prompt = require("prompt-sync")();

let GridHandler = class {
  constructor(move, gamerPosition) {
    this.move = move;
    this.gamerPosition = gamerPosition;
  }

  dropPoo(grid) {
    let poo = "X";
    let pooPosition = Math.floor(Math.random() * 8);
    if (pooPosition !== this.gamerPosition || pooPosition !== 2) {
      grid.arr[pooPosition] = poo;
      return pooPosition;
    } else {
      pooPosition = pooPosition + 1;
      grid.arr[pooPosition] = poo;
      return pooPosition;
    }
  }

  setGamerOnGrid() {
    let gamer = "O";
    grid.arr[this.gamerPosition] = gamer;
  }

  stepOn(grid, movement) {
    if (movement == "w") {
      if (
        this.gamerPosition == 0 ||
        this.gamerPosition == 1 ||
        this.gamerPosition == 2
      ) {
        console.log("Non puoi spostarti al di fuori della griglia!");
      } else {
        grid.arr[this.gamerPosition] = "-";
        this.gamerPosition = this.gamerPosition - 3;
        grid.arr[this.gamerPosition] = "O";
        return this.gamerPosition;
      }
    }

    if (movement == "s") {
      if (
        this.gamerPosition == 6 ||
        this.gamerPosition == 7 ||
        this.gamerPosition == 8
      ) {
        console.log("Non puoi spostarti al di fuori della griglia!");
      } else {
        grid.arr[this.gamerPosition] = "-";
        this.gamerPosition = this.gamerPosition + 3;
        grid.arr[this.gamerPosition] = "O";
        return this.gamerPosition;
      }
    }
    if (movement == "a") {
      if (
        this.gamerPosition == 6 ||
        this.gamerPosition == 3 ||
        this.gamerPosition == 0
      )
        console.log("Non puoi spostarti al di fuori della griglia!");
      else {
        grid.arr[this.gamerPosition] = "-";
        this.gamerPosition = this.gamerPosition - 1;
        grid.arr[this.gamerPosition] = "O";
        return this.gamerPosition;
      }
    }

    if (movement == "d") {
      if (
        this.gamerPosition == 8 ||
        this.gamerPosition == 5 ||
        this.gamerPosition == 2
      )
        console.log("Non puoi spostarti al di fuori della griglia!");
      else {
        grid.arr[this.gamerPosition] = "-";
        this.gamerPosition = this.gamerPosition + 1;
        grid.arr[this.gamerPosition] = "O";
        return this.gamerPosition;
      }
    }
  }

  checkIfSteppedOnPoo(pooPosition) {
    if (this.gamerPosition != pooPosition) {
      return true;
    } else {
      console.log("Game Over!");
      return false;
    }
  }

  checkWin() {
    if (this.gamerPosition == 2) {
      console.log("Victory!");
      return true;
    } else {
      return false;
    }
  }
};
module.exports = GridHandler;
