const rangeFrom = 206938
const rangeTo = 679128

const twoAdjacentDigitsAreTheSame = number => {
  const regex = /(0{2,}|1{2,}|2{2,}|3{2,}|4{2,}|5{2,}|6{2,}|7{2,}|8{2,}|9{2,})/
  return regex.test(number + "")
}

const digitsNeverDecrease = number => {
  const [a, b, c, d, e, f] = (number + "").split("").map(x => parseInt(x))
  return b >= a && c >= b && d >= c && e >= d && f >= e
}

let validPasswordsCounter = 0

for (let i = rangeFrom; i <= rangeTo; i++) {
  if (twoAdjacentDigitsAreTheSame(i) && digitsNeverDecrease(i)) {
    validPasswordsCounter += 1
  }
}

export {
  twoAdjacentDigitsAreTheSame,
  digitsNeverDecrease,
  validPasswordsCounter
}
