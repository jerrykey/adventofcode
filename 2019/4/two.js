import { digitsNeverDecrease } from "./one.js"

const rangeFrom = 206938
const rangeTo = 679128

const itisTwoGroups = number => {
  const regex = /(([^1]|^)11([^1]|$)|([^2]|^)22([^2]|$)|([^3]|^)33([^3]|$)|([^4]|^)44([^4]|$)|([^5]|^)55([^5]|$)|([^6]|^)66([^6]|$)|([^7]|^)77([^7]|$)|([^8]|^)88([^8]|$)|([^9]|^)99([^9]|$)|([^0]|^)00([^0]|$))/
  return regex.test(number)
}

let validPasswordsCounter = 0

for (let i = rangeFrom; i <= rangeTo; i++) {
  if (digitsNeverDecrease(i) && itisTwoGroups(i)) {
    validPasswordsCounter += 1
  }
}

export { itisTwoGroups, validPasswordsCounter }
