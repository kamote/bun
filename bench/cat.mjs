// works in both bun & node
import { readFileSync } from "node:fs";
const count = parseInt(process.env.ITERATIONS || "1", 10) || 1;
const arg = process.argv.slice(1);
for (let i = 0; i < count; i++)
  console.log(arg.map((file) => readFileSync(file, "utf8")).join(""));
