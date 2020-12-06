import { input } from "./input.js"

Array.prototype.diff = function(arr2) {
  var ret = []
  this.sort()
  arr2.sort()
  for (var i = 0; i < this.length; i += 1) {
    if (arr2.indexOf(this[i]) > -1) {
      ret.push(this[i])
    }
  }
  return ret
}

let counter = 0

input.forEach(item => {
  let allPersonAnswers = item.split("\r\n")
  let matches = []
  for (let i = 0; i <= allPersonAnswers.length; i++) {
    if (typeof allPersonAnswers[i + 1] != "undefined") {
      console.log(
        allPersonAnswers[i],
        allPersonAnswers[i].split("").sort((a, b) => a.localeCompare(b)),
        allPersonAnswers[i + 1],
        allPersonAnswers[i + 1].split("").sort((a, b) => a.localeCompare(b))
      )
      matches = [
        ...allPersonAnswers[i].split("").diff(allPersonAnswers[i + 1].split(""))
      ]
    }
  }

  matches = matches.filter((v, i, a) => a.indexOf(v) === i)

  console.log(
    "MATHCES",
    matches.length,
    matches.sort((a, b) => a.localeCompare(b))
  )

  counter += matches.length

  //  .forEach(i2 => {//    console.log(i2.split("").filter((v, i, a) => a.indexOf(v) === i))
  //  })
})

console.log("result", counter)

// ????????????????????????????????????
// 3597 is too high
// 3596 is too high
// ????????????????????????????????????
