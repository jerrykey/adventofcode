import { input } from "./input.js"

// The program class
class Program {
  constructor(optcode, v1, v2, pos) {
    this.optcode = optcode
    this.v1 = v1
    this.v2 = v2
    this.pos = pos
    this.exit = optcode === 99 ? true : false
  }
}

let newInput = [...input]
//restore the gravity assist program (your puzzle input) to the "1202 program alarm" state
newInput[1] = 12
newInput[2] = 2

// iterate over input array with step eq 4
for (var i = 0; i < newInput.length; i += 4) {
  if (typeof newInput[i + 1] == "undefined") break

  const program = new Program(
    newInput[i],
    newInput[i + 1],
    newInput[i + 2],
    newInput[i + 3]
  )

  // exit from loop if get optcode = 99 earlier
  if (program.exit) break

  newInput[program.pos] =
    program.optcode === 1
      ? newInput[program.v1] + newInput[program.v2]
      : newInput[program.v1] * newInput[program.v2]
}

const result = newInput[0]

export { result, Program }
