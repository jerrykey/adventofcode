import { input } from "./input.js"
import { BoardingPass } from "./one.js"

// sort boardings by seatId ASC
const boardings = input
  .map(x => new BoardingPass(x))
  .sort((a, b) => a.seatID - b.seatID)

let result

// iterate over boardings and check is a next seatid exists in the array
boardings.forEach((item, idx) => {
  if (
    typeof boardings[idx + 1] != "undefined" &&
    item.seatID + 1 !== boardings[idx + 1]["seatID"]
  ) {
    result = item.seatID + 1
  }
})

export { result }
