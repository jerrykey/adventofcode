import { input } from "./input.js"
import { parse } from "./one.js"

const testIsValid2 = policy => {
  const posOne = policy.str[parseInt(policy.from) - 1] === policy.letter
  const posTwo = policy.str[parseInt(policy.to) - 1] === policy.letter

  return (posOne && !posTwo) || (!posOne && posTwo)
}

let validPasswordsCounter = 0

input.forEach(str => {
  const policy = parse(str)

  if (testIsValid2(policy)) {
    validPasswordsCounter += 1
  }
})

export { testIsValid2, validPasswordsCounter }
