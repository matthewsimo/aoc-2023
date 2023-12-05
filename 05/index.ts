const extractNumbers = (s: string) => s.split(" ").map((n) => Number(n));

const findMapping = (x: number, mappings: number[][]) => {
  let mappedNum = x;

  for (const mapping of mappings) {
    const [n1, n2, o] = mapping;
    if (x >= n2 && x < n2 + o) {
      mappedNum = n1 + (x - n2);
      break;
    }
  }

  return mappedNum;
};

export const p1 = (input: string) => {
  let [s, ...m] = input.split("\n\n");
  const seeds = extractNumbers(s.split("seeds: ")[1]);

  const maps = m.map((map) => {
    const [_, ...mapNums] = map.split("\n");
    return mapNums.map((line) => extractNumbers(line));
  });

  const locations = seeds.map((seed) => {
    let x = seed;
    let mappings = maps.map((m, i) => {
      x = findMapping(x, m);
      return x;
    });
    return mappings.at(-1) as number;
  });

  return Math.min(...locations);
};

export const p2 = (input: string) => {
  let [s, ...m] = input.split("\n\n");
  let rawSeeds = extractNumbers(s.split("seeds: ")[1]);

  let seeds: number[][] = [];
  for (let i = 0; i < rawSeeds.length; i = i + 2) {
    seeds.push([rawSeeds[i], rawSeeds[i] + rawSeeds[i + 1]]);
  }

  const maps = m.map((map) => {
    const [_, ...mapNums] = map.split("\n");
    return mapNums.map((line) => extractNumbers(line));
  });

  for (let mapGroup of maps) {
    let nextSet: number[][] = [];
    while (seeds.length > 0) {
      let [seedStart, seedEnd] = seeds.pop() as number[];

      let found = false;
      inner: for (let [n1, n2, o] of mapGroup) {
        const mS = Math.max(seedStart, n2);
        const mE = Math.min(seedEnd, n2 + o);
        if (mS < mE) {
          nextSet.push([mS - n2 + n1, mE - n2 + n1]);
          if (mS > seedStart) {
            seeds.push([seedStart, mS]);
          }
          if (seedEnd > mE) {
            seeds.push([mE, seedEnd]);
          }
          found = true;
          break inner;
        }
      }
      if (!found) {
        nextSet.push([seedStart, seedEnd]);
      }
    }
    seeds = nextSet;
  }

  return Math.min(...seeds.map((s) => s[0]));
};
