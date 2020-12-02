import { parse, testIsValid } from "../one.js"
import { testIsValid2 } from "../two.js"

test("String `1-3 a: abcde` sholud be valid", () => {
  expect(testIsValid(parse("1-3 a: abcde"))).toBeTruthy()
})

test("String `1-3 b: cdefg` sholud not be valid", () => {
  expect(testIsValid(parse("1-3 b: cdefg"))).toBeFalsy()
})

test("String `2-9 c: ccccccccc` sholud be valid", () => {
  expect(testIsValid(parse("2-9 c: ccccccccc"))).toBeTruthy()
})

test("String `1-3 a: abcde` sholud be valid", () => {
  expect(testIsValid2(parse("1-3 a: abcde"))).toBeTruthy()
})

test("String `1-3 b: cdefg` sholud not be valid", () => {
  expect(testIsValid2(parse("1-3 b: cdefg"))).toBeFalsy()
})

test("String `2-9 c: ccccccccc` sholud not be valid", () => {
  expect(testIsValid2(parse("2-9 c: ccccccccc"))).toBeFalsy()
})
