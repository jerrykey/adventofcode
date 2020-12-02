import { Point, getInterectionPoints } from "../point.class.js"

const testWires = [
  {
    wire1: ["R8", "U5", "L5", "D3"],
    wire2: ["U7", "R6", "D4", "L4"]
  },
  {
    wire1: ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
    wire2: ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
  },
  {
    wire1: [
      "R98",
      "U47",
      "R26",
      "D63",
      "R33",
      "U87",
      "L62",
      "D20",
      "R33",
      "U53",
      "R51"
    ],
    wire2: ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
  }
]

const testSuite = (wire1, wire2) => {
  let centralPoint = new Point()
  wire1.forEach(point => {
    centralPoint.trackTo(point)
  })
  const wire1Track = centralPoint.pointsTrack
  centralPoint.reset()
  wire2.forEach(point => {
    centralPoint.trackTo(point)
  })
  const wire2Track = centralPoint.pointsTrack
  const intersections = getInterectionPoints(wire1Track, wire2Track)
  const shortestManhattanDistancePoint = intersections
    .sort((a, b) => a.distance - b.distance)
    .shift()
  const lowestWireLengthPoint = intersections
    .sort((a, b) => a.wireTotalLen - b.wireTotalLen)
    .shift()

  return {
    distance: shortestManhattanDistancePoint.distance,
    length: lowestWireLengthPoint.wireTotalLen
  }
}

test("testWires[0] distance should be 6 and length should be 30 steps", () => {
  expect(testSuite(testWires[0]["wire1"], testWires[0]["wire2"])).toStrictEqual(
    {
      distance: 6,
      length: 30
    }
  )
})

test("testWires[1] distance should be 159 and length should be 610 steps", () => {
  expect(testSuite(testWires[1]["wire1"], testWires[1]["wire2"])).toStrictEqual(
    {
      distance: 159,
      length: 610
    }
  )
})

test("testWires[2] distance should be 135 and length should be 410 steps", () => {
  expect(testSuite(testWires[2]["wire1"], testWires[2]["wire2"])).toStrictEqual(
    {
      distance: 135,
      length: 410
    }
  )
})
