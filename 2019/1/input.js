import * as fs from "fs"
import path from "path"

const __dirname = path.resolve("2019/1")

const input = fs
  .readFileSync(path.resolve(__dirname, "input"), "utf8")
  .split("\r\n")

export { input }
