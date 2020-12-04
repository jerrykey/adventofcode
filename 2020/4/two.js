import { input } from "./input.js"

class Passport {
  constructor(str) {
    this.plain = str

    this.byr = this.byr()

    this.iyr = this.iyr()

    this.eyr = this.eyr()

    this.hgt = this.hgt()

    this.hcl = this.hcl()

    this.ecl = this.ecl()

    this.pid = this.pid()

    this.cid = this.cid()

    this.valid = this.valid()
  }

  byr = () => {
    let matches = this.plain.match(/(byr:)([0-9]{4})/)
    let byr = matches ? matches[2] : false
    return byr &&
      parseInt(byr) &&
      parseInt(byr) >= 1920 &&
      parseInt(byr) <= 2002
      ? byr
      : false
  }

  iyr = () => {
    let matches = this.plain.match(/(iyr:)([0-9]{4})/)
    let iyr = matches ? matches[2] : false
    return iyr &&
      parseInt(iyr) &&
      parseInt(iyr) >= 2010 &&
      parseInt(iyr) <= 2020
      ? iyr
      : false
  }

  eyr = () => {
    let matches = this.plain.match(/(eyr:)([0-9]{4})/)
    let eyr = matches ? matches[2] : false
    return eyr &&
      parseInt(eyr) &&
      parseInt(eyr) >= 2020 &&
      parseInt(eyr) <= 2030
      ? eyr
      : false
  }

  pid = () => {
    let matches = this.plain.match(/(pid:)([0-9]{9})/)
    return matches ? matches[2] : false
  }

  cid = () => {
    let matches = this.plain.match(/(cid:)(\S+)/)
    return matches ? matches[2] : false
  }

  ecl = () => {
    let matches = this.plain.match(/(ecl:)(\S+)/)
    let ecl = matches ? matches[2] : false
    return ecl &&
      ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(ecl)
      ? ecl
      : false
  }

  hcl = () => {
    let matches = this.plain.match(/(hcl:)(#[0-9a-f]{6})/)
    return matches ? matches[2] : false
  }

  hgt = () => {
    let matches = this.plain.match(/(hgt:)([0-9]+)(cm|in)/)
    let measurment = matches ? matches[3] : false
    let height = matches ? matches[2] : false
    if (!measurment || !height) return false
    if (measurment === "cm") {
      return parseInt(height) >= 150 && parseInt(height) <= 193
        ? height + measurment
        : false
    }
    if (measurment === "in") {
      return parseInt(height) >= 59 && parseInt(height) <= 76
        ? height + measurment
        : false
    }
  }

  valid = () => {
    return [
      this.byr,
      this.iyr,
      this.eyr,
      this.hgt,
      this.hcl,
      this.ecl,
      this.pid
    ].every(x => x != false)
  }
}

let counter = 0

input.forEach(item => {
  const passport = new Passport(item)
  counter += passport.valid ? 1 : 0
})

export { Passport, counter }
