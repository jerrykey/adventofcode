import { findTwoNumbers } from "../one.js"
import { findThreeNumbers } from "../two.js"

test("Two numbers of the sequence 1721, 979, 366, 299, 675, 1456 should result 514579", () => {
  expect(findTwoNumbers([1721, 979, 366, 299, 675, 1456])).toBe(514579)
})


test("Three numbers of the sequence 1721, 979, 366, 299, 675, 1456 should result 241861950", () => {
  expect(findThreeNumbers([1721, 979, 366, 299, 675, 1456])).toBe(241861950)
})
