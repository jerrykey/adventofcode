import { input } from "./input.js"
import { process } from "./one.js"

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
  let sequence = [...input]
  //restore the gravity assist program (your puzzle input) to the "1202 program alarm" state
  sequence[1] = noun()
  sequence[2] = verb()

  let newSequence = process(sequence)

  // check result
  if (newSequence[0] === needToBe) {
    notFound = false
  } else {
    nounverb += 1
  }
}

const result = 100 * noun() + verb()

export { result }
