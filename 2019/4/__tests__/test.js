import { twoAdjacentDigitsAreTheSame, digitsNeverDecrease } from "../one.js"
import { itisTwoGroups } from "../two.js"

test("Part I. The number 122345 meets the password criteria", () => {
  const number = 122345
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeTruthy()
})

test("Part I. The number 111123 meets the password criteria", () => {
  const number = 111123
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeTruthy()
})

test("Part I. The number 135679 doesn't meets the password criteria", () => {
  const number = 135679
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeFalsy()
})

test("Part I. The number 111111 meets the password criteria", () => {
  const number = 111111
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeTruthy()
})

test("Part I. The number 223450 doesn't meets the password criteria", () => {
  const number = 223450
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeFalsy()
})

test("Part I. The number 123789 doesn't meet the password criteria", () => {
  const number = 123789
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeFalsy()
})

test("Part I. The number 112233 meets the password criteria", () => {
  const number = 112233
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeTruthy()
})

test("Part I. The number 123444 meets the password criteria", () => {
  const number = 123444
  expect(
    digitsNeverDecrease(number) && twoAdjacentDigitsAreTheSame(number)
  ).toBeTruthy()
})

test("Part I. The number 111122 meets the password criteria", () => {
  const number = 111122
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeTruthy()
})

test("Part II. The number 122345 meets the password criteria", () => {
  const number = 122345
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeTruthy()
})

test("Part II. The number 111123 doesn't meet the password criteria", () => {
  const number = 111123
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeFalsy()
})

test("Part II. The number 135679 doesn't meets the password criteria", () => {
  const number = 135679
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeFalsy()
})

test("Part II. The number 111111 doesn't meet the password criteria", () => {
  const number = 111111
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeFalsy()
})

test("Part II. The number 223450 doesn't meet the password criteria", () => {
  const number = 223450
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeFalsy()
})

test("Part II. The number 123789 doesn't meet the password criteria", () => {
  const number = 123789
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeFalsy()
})

test("Part II. The number 112233 meet the password criteria", () => {
  const number = 112233
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeTruthy()
})

test("Part II. The number 123444 doesn't meet the password criteria", () => {
  const number = 123444
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeFalsy()
})

test("Part II. The number 111122 meet the password criteria", () => {
  const number = 111122
  expect(
    digitsNeverDecrease(number) && itisTwoGroups(number)
  ).toBeTruthy()
})
