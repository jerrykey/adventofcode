import { input } from "./input.js"

// Will iterate input two times to find two terms that give 2020 in sum.
const findTwoNumbers = input => {
  let res
  input.forEach(x => {
    input.forEach(y => {
      if (x + y === 2020) {
        res = x * y
      }
    })
  })
  return res
}

const result = findTwoNumbers(input)

export { result, findTwoNumbers }
