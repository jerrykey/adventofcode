import { input } from "./input.js"

const parse = str => {
  const regex = /^(\d{1,})-(\d{1,})\s{1}(\w{1}):\s{1}(\w{1,})$/
  const parsed = str.match(regex)
  return { letter: parsed[3], from: parsed[1], to: parsed[2], str: parsed[4] }
}

const testIsValid = policy => {
  let test = policy.str.split("").filter(item => item === policy.letter).length
  return test >= policy.from && test <= policy.to
}

let validPasswordsCounter = 0

input.forEach(str => {
  const policy = parse(str)
  if (testIsValid(policy)) {
    validPasswordsCounter += 1
  }
})

export { parse, testIsValid, validPasswordsCounter }
