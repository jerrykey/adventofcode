import { calculateFuel } from "../one.js"

test('For a mass of 12 the result is 2', () => {
  expect(calculateFuel(12)).toBe(2);
});

test('For a mass of 14 the result is 2', () => {
  expect(calculateFuel(14)).toBe(2);
});

test('For a mass of 1969 the result is 654', () => {
  expect(calculateFuel(1969)).toBe(654);
});

test('For a mass of 100756 the result is 33583', () => {
  expect(calculateFuel(100756)).toBe(33583);
});