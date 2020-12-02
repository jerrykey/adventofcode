/**
  Class Point describes the point in 2D coordinate system. 
  Each point have `x` and `y` coordinate, manhattan distance from the initital point and a track length
**/
class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
    this.len = 0
    this.distance = Math.abs(this.x) + Math.abs(this.y)
    this.pointsTrack = []
  }

  reset() {
    this.x = 0
    this.y = 0
    this.len = 0
    this.pointsTrack = []
  }

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
      this.len += 1
      this.distance = Math.abs(this.x) + Math.abs(this.y)
      this.pointsTrack.push({
        x: this.x,
        y: this.y,
        wirelen: this.len,
        distance: this.distance
      })
    }
  }
}

// will return intersection points from two tracks with points
const getInterectionPoints = (one, two) => {
  let out = []
  one.forEach(i => {
    let intersect = two.filter(i2 => {
      return i.x == i2.x && i.y == i2.y
    })
    if (intersect.length) {
      out = [
        ...out,
        {
          ...i,
          wire2len: intersect[0]["wirelen"],
          wireTotalLen: i.wirelen + intersect[0]["wirelen"]
        }
      ]
    }
  })
  return out
}

export { Point, getInterectionPoints }
