import { treesProcessor } from "../one.js"

const testInput = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#"
]

test("Right 1, down 1 should return 2", () => {
  expect(treesProcessor(testInput, 1, 1)).toBe(2)
})

test("Right 3, down 1 should return 7", () => {
  expect(treesProcessor(testInput, 3, 1)).toBe(7)
})

test("Right 5, down 1 should return 3", () => {
  expect(treesProcessor(testInput, 5, 1)).toBe(3)
})

test("Right 7, down 1 should return 4", () => {
  expect(treesProcessor(testInput, 7, 1)).toBe(4)
})

test("Right 1, down 2 should return 2", () => {
  expect(treesProcessor(testInput, 1, 2)).toBe(2)
})
