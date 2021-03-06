import * as fs from "fs"
import path from "path"

const __dirname = path.resolve("2019/2")

const input = fs
  .readFileSync(path.resolve(__dirname, "input"), "utf8")
  .split(",")
  .map(piece => parseInt(piece))

export { input }
