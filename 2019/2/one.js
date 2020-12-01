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

// Will return a new array with replaced values
const process = sequence => {
  // iterate over input array with step eq 4
  for (var i = 0; i < sequence.length; i += 4) {
    if (typeof sequence[i + 1] == "undefined") break

    const program = new Program(
      sequence[i],
      sequence[i + 1],
      sequence[i + 2],
      sequence[i + 3]
    )

    // exit from loop if get optcode = 99 earlier
    if (program.exit) break

    if (program.optcode === 1) {
      sequence[program.pos] = sequence[program.v1] + sequence[program.v2]
    }

    if (program.optcode === 2) {
      sequence[program.pos] = sequence[program.v1] * sequence[program.v2]
    }
  }
  return sequence
}

let sequence = [...input]
//restore the gravity assist program (your puzzle input) to the "1202 program alarm" state
sequence[1] = 12
sequence[2] = 2

const newSequence = process(sequence)
const result = newSequence[0]

export { result, process }
