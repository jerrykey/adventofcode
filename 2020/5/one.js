import { input } from "./input.js"

/**
The Boarding pass class
Column and row it is a decimal representation of the binary value from the boarding pass code

@code string Boarding pass code
*/
class BoardingPass {
  constructor(code) {
    this.code = code
    this.column = this.column()
    this.row = this.row()
    this.seatID = this.seatID()
  }

  column = () => {
    let binary = this.code
      .split("")
      .splice(0, 7)
      .map(x => {
        return x === "F" ? "0" : "1"
      })
      .join("")
    return parseInt(binary, 2)
  }

  row = () => {
    let binary = this.code
      .split("")
      .splice(7, 3)
      .map(x => {
        return x === "L" ? "0" : "1"
      })
      .join("")
    return parseInt(binary, 2)
  }

  seatID = () => {
    return this.column * 8 + this.row
  }
}

// convert codes to boarding objects, sort by seatID and take the first item
const boardingPassWithHighestSeatID = input
  .map(x => new BoardingPass(x))
  .sort((a, b) => b.seatID - a.seatID)
  .shift()

const result = boardingPassWithHighestSeatID.seatID

export { BoardingPass, result }
