import { BoardingPass } from "../one.js"

test("Boarding pass with code FBFBBFFRLR should be equal to seatID 357", () => {
  let boardingpass = new BoardingPass("FBFBBFFRLR")
  expect(boardingpass.seatID).toBe(357)
})

test("Boarding pass with code BFFFBBFRRR should be equal to seatID 567", () => {
  let boardingpass = new BoardingPass("BFFFBBFRRR")
  expect(boardingpass.seatID).toBe(567)
})

test("Boarding pass with code FFFBBBFRRR should be equal to seatID 119", () => {
  let boardingpass = new BoardingPass("FFFBBBFRRR")
  expect(boardingpass.seatID).toBe(119)
})

test("Boarding pass with code BBFFBBFRLL should be equal to seatID 820", () => {
  let boardingpass = new BoardingPass("BBFFBBFRLL")
  expect(boardingpass.seatID).toBe(820)
})
