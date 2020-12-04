import { input } from "./input.js"
import { treesProcessor } from "./one.js"

const result =
  treesProcessor(input, 1, 1) *
  treesProcessor(input, 3, 1) *
  treesProcessor(input, 5, 1) *
  treesProcessor(input, 7, 1) *
  treesProcessor(input, 1, 2)

export { result }
