//let counter = 0

test("The group answers `abc` should be 'yes' to 3 questions", () => {
  expect("abc".split("").filter((v, i, a) => a.indexOf(v) === i).length).toBe(3)
})

test("The group answers `abc` should be 'yes' to 3 questions", () => {
  let counter = 0
  "abc"
    .split("\r\n")
    .map(x => x.split("\r\n").sort((a, b) => b.length - a.length))
    .forEach(x => {
      for (let i = 0; i < x[0].length; i++) {
        if (x.every(y => y.includes(x[0][i]))) counter++
      }
    })
  expect(counter).toBe(3)
})

const testStr2 = `a
b
c`

test("The `testStr2` group answers should be 'yes' to 3 questions", () => {
  expect(
    testStr2
      .split("")
      .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r")
      .length
  ).toBe(3)
})

const testStr3 = `ab
ac`

test("The `testStr3` group answers should be 'yes' to 3 questions", () => {
  expect(
    testStr3
      .split("")
      .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r")
      .length
  ).toBe(3)
})

const testStr4 = `a
a
a
a`

test("The `testStr4` group answers should be 'yes' to 1 questions", () => {
  expect(
    testStr4
      .split("")
      .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r")
      .length
  ).toBe(1)
})

const testStr5 = `b`

test("The `testStr5` group answers should be 'yes' to 1 questions", () => {
  expect(
    testStr5
      .split("")
      .filter((v, i, a) => a.indexOf(v) === i && v !== "\n" && v !== "\r")
      .length
  ).toBe(1)
})
