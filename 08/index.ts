import { gcd } from "../utils";

export const p1 = (input: string) => {
  const [rawMoves, rawMap] = input.split("\n\n");
  const moves: Record<number, number> = {};
  rawMoves
    .split("")
    .forEach((rawMove, i) => (moves[i] = rawMove === "R" ? 1 : 0));
  const map: Record<string, [string, string]> = {};
  for (let line of rawMap.split("\n")) {
    let [key, paths] = line.split(" = ");
    map[key] = paths.slice(1, -1).split(", ") as [string, string];
  }
  let currentLoc = "AAA";
  let moveCount = 0;
  const moveLength = Object.keys(moves).length;
  while (currentLoc !== "ZZZ") {
    const currentMove = moves[moveCount % moveLength];
    currentLoc = map[currentLoc][currentMove];
    moveCount += 1;
    if (currentLoc === "ZZZ") {
      break;
    }
  }

  return moveCount;
};

export const p2 = (input: string) => {
  const [rawMoves, rawMap] = input.split("\n\n");
  const moves: Record<number, number> = {};
  rawMoves.split("").forEach((rawMove, i) => {
    moves[i] = rawMove === "R" ? 1 : 0;
  });
  let currentLocs = [];
  const map: Record<string, [string, string]> = {};
  for (let line of rawMap.split("\n")) {
    let [key, paths] = line.split(" = ");
    map[key] = paths.slice(1, -1).split(", ") as [string, string];
    if (key.endsWith("A")) {
      currentLocs.push(key);
    }
  }

  const moveLength = Object.keys(moves).length;
  const moveCycles = [];

  for (let currentLoc of currentLocs) {
    const cycle = [];
    let moveCount = 0;
    let firstZ;

    while (true) {
      while (moveCount === 0 || !currentLoc.endsWith("Z")) {
        const currentMove = moves[moveCount % moveLength];
        currentLoc = map[currentLoc][currentMove];
        moveCount += 1;
      }

      cycle.push(moveCount);

      if (!firstZ) {
        firstZ = currentLoc;
        moveCount = 0;
      } else if (currentLoc === firstZ) {
        break;
      }
    }
    moveCycles.push(cycle);
  }

  let nums = moveCycles.map((c) => c[0]);
  let lcm = nums.pop() as number;
  for (const n of nums) {
    lcm = (lcm * n) / gcd(lcm, n);
  }

  return lcm;
};
