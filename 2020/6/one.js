import { input } from "./input.js"

const result = input.reduce((sum, item) => {
  return (sum += item
    .split("")
    .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r").length)
}, 0)

export { result }
