import * as fs from "fs"
import path from "path"

const __dirname = path.resolve("2020/6")

const input = fs
  .readFileSync(path.resolve(__dirname, "input"), "utf8")
//  .split(/(\r\n){2,}/g)
.split('\r\n\r\n')

export { input }
