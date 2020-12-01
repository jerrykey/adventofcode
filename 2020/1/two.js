import { input } from "./input.js"

// Will iterate input three times to find three terms that give 2020 in sum.
const findThreeNumbers = input => {
  let res
  input.forEach(x => {
    input.forEach(y => {
      input.forEach(z => {
        if (x + y + z === 2020) {
          res = x * y * z
        }
      })
    })
  })
  return res
}

const result = findThreeNumbers(input)

export { result, findThreeNumbers }
