import { input } from "./input.js"
import { Program } from "./one.js"

// counter int variable
let nounverb = 0

// get Nonun (hundreds from the counter)
const noun = () => {
  return Math.floor(nounverb / 100)
}

// get Verb (tens and ones from counter)
const verb = () => {
  return nounverb - Math.floor(nounverb / 100) * 100
}

let needToBe = 19690720
let notFound = true

while (notFound && nounverb <= 99 * 99) {
  let newInput = [...input]
  //restore the gravity assist program (your puzzle input) to the "1202 program alarm" state
  newInput[1] = noun()
  newInput[2] = verb()

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

    if (program.optcode === 1) {
      newInput[program.pos] = newInput[program.v1] + newInput[program.v2]
    }

    if (program.optcode === 2) {
      newInput[program.pos] = newInput[program.v1] * newInput[program.v2]
    }
  }

  // check result
  if (newInput[0] === needToBe) {
    notFound = false
  } else {
    nounverb += 1
  }
}

const result = 100 * noun() + verb()

export { result }
