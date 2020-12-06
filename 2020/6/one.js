import { input } from "./input.js"

console.log(
  input.reduce((sum, item) => {
    console.log(
      item
        .split("")
        .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r")
    )
    return (sum += item
      .split("")
      .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r")
      .length)
  }, 0)
)
