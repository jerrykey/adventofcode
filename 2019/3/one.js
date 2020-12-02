import { wires } from "./input.js"
import { Point, getInterectionPoints } from "./point.class.js"

console.log("Please wait, calculating ...")

let centralPortPoint = new Point(0, 0)
let wire1Path = []
let wire2Path = []

// wire 1 points track
wires[0].forEach(point => {
  centralPortPoint.trackTo(point)
})

wire1Path = centralPortPoint.pointsTrack

// reset central point
centralPortPoint.reset()

// wire 2 points track
wires[1].forEach(point => {
  centralPortPoint.trackTo(point)
})

wire2Path = centralPortPoint.pointsTrack

const interectionPoints = getInterectionPoints(wire1Path, wire2Path)

// find lowest manhattan distance
const shortestManhattanDistancePoint = interectionPoints
  .sort((a, b) => a.distance - b.distance)
  .shift()
const shortestManhattanDistance = shortestManhattanDistancePoint.distance

// find lowest wire length
const lowestWireLengthPoint = interectionPoints
  .sort((a, b) => a.wireTotalLen - b.wireTotalLen)
  .shift()
const lowestWireLength = lowestWireLengthPoint.wireTotalLen

export { shortestManhattanDistance, lowestWireLength }
