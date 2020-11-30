import { input as masses } from "./input.js"
import { calculateFuel } from "./one.js"

let requiredFuelForModules = []

// iterate over spacecraft modules to calculate required fuel separately
masses.forEach(mass => {
  let moduleMass = parseInt(mass)
  let requiredFuel = 0

  while (moduleMass > 0) {
    moduleMass = calculateFuel(moduleMass)

    if (moduleMass > 0) {
      requiredFuel += moduleMass
    }
  }
  requiredFuelForModules.push(requiredFuel)
})

// use reduce function to get the total sum
const result = requiredFuelForModules.reduce(
  (totalRequiredFuel, moduleRequiredFuel) => {
    return (totalRequiredFuel += moduleRequiredFuel)
  },
  0
)

export { result }
