import { input as masses } from "./input.js"

/**
  Will calculate the fuel needed to the module
*/
const calculateFuel = mass => {
  return Math.floor(parseInt(mass) / 3) - 2
}

/**
  Reduce fn Will calculate the total fuel needed
*/
const calculateTotalFuel = (totalFuel, mass) => {
  return totalFuel + calculateFuel(mass)
}

const result = masses.reduce(calculateTotalFuel, 0)

export { calculateFuel, result }
