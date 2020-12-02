import { wires } from "./input.js"
//import { Point } from "./one.js"

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.pointsTrack = []
  }

  reset() {
    this.x = 0
    this.y = 0
    this.pointsTrack = []
  }
  /*
  move(str) {
    const path = str.split(/(\d+)/)
    switch (path[0]) {
      case "R":
        this.x += parseInt(path[1])
        break
      case "L":
        this.x -= parseInt(path[1])
        break
      case "U":
        this.y += parseInt(path[1])
        break
      case "D":
        this.y -= parseInt(path[1])
        break
    }
    return [this.x, this.y]
  }
*/
  trackTo(point) {
    const path = point.split(/(\d+)/)
    for (var i = 0; i < parseInt(path[1]); i++) {
      switch (path[0]) {
        case "R":
          this.x += 1
          break
        case "L":
          this.x -= 1
          break
        case "U":
          this.y += 1
          break
        case "D":
          this.y -= 1
          break
      }
      this.pointsTrack.push(JSON.stringify([this.x, this.y]))
    }
  }
}

console.log(wires)
