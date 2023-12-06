import chalk from "chalk";
import { printTable } from "console-table-printer";

export const time = (fn: () => any) => {
  const s = performance.now();
  const a = fn();
  const e = performance.now();
  return [a, (e - s).toFixed(4)];
};

export const report = (fn1: () => any, fn2: () => any) => {
  const [a1, dur1] = time(() => fn1());
  const [a2, dur2] = time(() => fn2());
  console.log();
  printTable([
    {
      run: chalk.bold.bgGreen(" p1 "),
      answer: a1,
      duration: chalk.dim(`[${dur1}ms]`),
    },

    {
      run: chalk.bold.bgGreen(" p2 "),
      answer: a2,
      duration: chalk.dim(`[${dur2}ms]`),
    },
  ]);
};
