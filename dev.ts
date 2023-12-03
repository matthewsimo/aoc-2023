import chalk from "chalk";
const concurrently = require("concurrently");

const day = process.argv.at(-1);
if (!day) throw "Include a day";

console.log(`Running day ${day}`);

concurrently([
  {
    name: chalk.blue("main"),
    command: `bun run --watch ${day}/main.ts`,
  },
  {
    name: chalk.green("test"),
    command: `bun test --watch ${day}/index.test.ts`,
  },
]);
