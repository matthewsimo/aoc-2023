import chalk from "chalk";
import { printTable } from "console-table-printer";

export const assert = (a: any, b: any) => a === b;

export const time = (fn: () => any) => {
  const s = performance.now();
  const a = fn();
  const e = performance.now();
  return [a, (e - s).toFixed(4)];
};

export const run = (
  [t1, fn1]: [boolean, () => any],
  [t2, fn2]: [boolean, () => any]
) => {
  let a1, dur1, a2, dur2;
  a1 = dur1 = a2 = dur2 = "---";
  if (t1) {
    [a1, dur1] = time(() => fn1());
  }
  if (t2) {
    [a2, dur2] = time(() => fn2());
  }
  const p1Style = t1 ? chalk.bold.bgGreen : chalk.bold.bgMagenta;
  const p2Style = t2 ? chalk.bold.bgGreen : chalk.bold.bgMagenta;
  console.log();
  printTable([
    {
      run: p1Style(" p1 "),
      answer: a1,
      duration: chalk.dim(`[${dur1}ms]`),
    },

    {
      run: p2Style(" p2 "),
      answer: a2,
      duration: chalk.dim(`[${dur2}ms]`),
    },
  ]);
};

export const debug = (output: any) => {
  Bun.write("./__debug.json", JSON.stringify(output, null, 2));
};

export const gcd = function (a: number, b: number): number {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
