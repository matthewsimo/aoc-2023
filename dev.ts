import chalk from "chalk";
const concurrently = require("concurrently");

let day;
if (process.argv.length === 2) {
  const p = Bun.spawnSync(["date", `+%d`]);
  if (p.success) {
    day = p.stdout.toString().trim();
  }
} else {
  day = process.argv.at(2);
}

if (!day) throw "No day";

console.log(`Running day ${day}`);

concurrently([
  {
    name: chalk.blue("main"),
    command: `bun run --watch ${day}/main.ts`,
  },
]);
