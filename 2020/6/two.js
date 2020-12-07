import { input } from "./input.js"

let counter = 0
input
  .map(x => x.split("\r\n").sort((a, b) => b.length - a.length))
  .forEach(x => {
    for (let i = 0; i < x[0].length; i++) {
      if (x.every(y => y.includes(x[0][i]))) counter++
    }
  })

export { counter }
