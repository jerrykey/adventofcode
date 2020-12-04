import { input } from "./input.js"

class Passport {
  constructor(str) {
    this.plain = str

    let byr = str.match(/(byr:)(\S+)/)
    this.byr = byr ? byr[2] : false

    let iyr = str.match(/(iyr:)(\S+)/)
    this.iyr = iyr ? iyr[2] : false

    let eyr = str.match(/(eyr:)(\S+)/)
    this.eyr = eyr ? eyr[2] : false

    let hgt = str.match(/(hgt:)(\S+)/)
    this.hgt = hgt ? hgt[2] : false

    let hcl = str.match(/(hcl:)(\S+)/)
    this.hcl = hcl ? hcl[2] : false

    let ecl = str.match(/(ecl:)(\S+)/)
    this.ecl = ecl ? ecl[2] : false

    let pid = str.match(/(pid:)(\S+)/)
    this.pid = pid ? pid[2] : false

    let cid = str.match(/(cid:)(\S+)/)
    this.cid = cid ? cid[2] : false

    this.valid = this.isValid()
  }

  isValid = () => {
    return [
      this.byr,
      this.iyr,
      this.eyr,
      this.hgt,
      this.hcl,
      this.ecl,
      this.pid
    ].every(x => x !== false)
  }
}

let counter = 0

input.forEach(item => {
  const passport = new Passport(item)
  counter += passport.valid ? 1 : 0
})

export { Passport, counter }
