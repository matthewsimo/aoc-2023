type Point = [number, number];

let grid: string[][];
const isDigit = (char: string) => char.match(/\d/);
const offsets = [-1, 0, 1];

const getFullNumber = (p: Point) => {
  const line = grid[p[0]];
  let prefix = ``;
  if (isDigit(line[p[1] - 1])) {
    prefix = line[p[1] - 1];
    line[p[1] - 1] = "X";

    if (isDigit(line[p[1] - 2])) {
      prefix = `${line[p[1] - 2]}${prefix}`;
      line[p[1] - 2] = "X";
    }
  }
  let suffix = ``;
  if (isDigit(line[p[1] + 1])) {
    suffix = line[p[1] + 1];
    line[p[1] + 1] = "X";

    if (isDigit(line[p[1] + 2])) {
      suffix = `${suffix}${line[p[1] + 2]}`;
      line[p[1] + 2] = "X";
    }
  }

  const number = Number(`${prefix}${line[p[1]]}${suffix}`);
  line[p[1]] = "X";
  return number;
};

const inBoundsX = (num: number) => num >= 0 && num < grid[0].length;
const inBoundsY = (num: number) => num >= 0 && num < grid.length;
const inBounds = (point: Point) => inBoundsX(point[0]) && inBoundsY(point[1]);

export const p1 = (input: string) => {
  grid = input.split("\n").map((l) => l.split(""));
  const partNumbers: number[] = [];

  input.split("\n").forEach((l, i) => {
    const symbolIndices: number[] = [];
    let symbols = /[^\d\.]/g;
    let match;
    while ((match = symbols.exec(l)) != null) {
      symbolIndices.push(match.index);
    }

    symbolIndices.forEach((symbol) => {
      for (let xOffset of offsets) {
        for (let yOffset of offsets) {
          const pointToCheck: Point = [i + xOffset, symbol + yOffset];

          if (inBounds(pointToCheck)) {
            const pointVal = grid[pointToCheck[0]][pointToCheck[1]];
            if (isDigit(pointVal)) {
              const num = getFullNumber(pointToCheck);
              partNumbers.push(num);
            }
          }
        }
      }
    });
  });

  return partNumbers.reduce((pV, cV) => cV + pV, 0);
};

export const p2 = (input: string) => {
  grid = input.split("\n").map((l) => l.split(""));
  const gearRatios: number[] = [];

  input.split("\n").forEach((l, i) => {
    const symbolIndices: number[] = [];
    let symbols = /\*/g;
    let match;
    while ((match = symbols.exec(l)) != null) {
      symbolIndices.push(match.index);
    }

    symbolIndices.forEach((symbol) => {
      const partNumbers = [];

      for (let xOffset of offsets) {
        for (let yOffset of offsets) {
          const pointToCheck: Point = [i + xOffset, symbol + yOffset];

          if (inBounds(pointToCheck)) {
            const pointVal = grid[pointToCheck[0]][pointToCheck[1]];
            if (isDigit(pointVal)) {
              const num = getFullNumber(pointToCheck);
              partNumbers.push(num);
            }
          }
        }
      }

      if (partNumbers.length === 2) {
        gearRatios.push(partNumbers.reduce((pV, cV) => cV * pV, 1));
      }
    });
  });

  return gearRatios.reduce((pV, cV) => cV + pV, 0);
};
