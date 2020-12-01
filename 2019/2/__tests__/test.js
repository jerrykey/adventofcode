import { input } from "../input.js"
import { process } from "../one.js"

// check input is array of numbers
test("Input is an array", () => {
  expect(Array.isArray(input)).toBe(true)
})

// check process function with test sequences
test("Should get 2,0,0,0,99 when input is 1,0,0,0,99", () => {
  expect(process([1, 0, 0, 0, 99])).toStrictEqual([2, 0, 0, 0, 99])
})

test("Should get 2,3,0,6,99 when input is 2,3,0,3,99", () => {
  expect(process([2, 3, 0, 3, 99])).toStrictEqual([2, 3, 0, 6, 99])
})

test("Should get 2,4,4,5,99,9801 when input is 2,4,4,5,99,0", () => {
  expect(process([2, 4, 4, 5, 99, 0])).toStrictEqual([2, 4, 4, 5, 99, 9801])
})

test("Should get 30,1,1,4,2,5,6,0,99 when input is 1,1,1,4,99,5,6,0,99", () => {
  expect(process([1, 1, 1, 4, 99, 5, 6, 0, 99])).toStrictEqual([
    30,
    1,
    1,
    4,
    2,
    5,
    6,
    0,
    99
  ])
})
