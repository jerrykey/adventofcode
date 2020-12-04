import { input } from "./input.js"

/**
  Will calculates trees while traversing the area down
*/
const treesProcessor = (input, right, down) => {
  let counter = 0
  let currentLine = 0
  let treesCounter = 0

  // function will return left position while pattern repeats from the right
  const leftPos = (lineLength, count) => {
    return count - ~~(count / lineLength) * lineLength
  }

  while (currentLine <= input.length) {
    counter += right
    currentLine += down
    if (
      typeof input[currentLine] != "undefined" &&
      input[currentLine][leftPos(input[currentLine].length, counter)] === "#"
    ) {
      treesCounter += 1
    }
  }

  return treesCounter
}

const result = treesProcessor(input, 3, 1)

export { treesProcessor, result }
