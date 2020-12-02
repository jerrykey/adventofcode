import * as fs from "fs"
import path from "path"

const __dirname = path.resolve("2019/3")

let wires = fs
  .readFileSync(path.resolve(__dirname, "input"), "utf8")
  .split("\r\n")

wires[0] = wires[0].split(",")
wires[1] = wires[1].split(",")

export { wires }
