const justTheNums = (i: string) =>
  i
    .split(" ")
    .filter((c) => c !== "")
    .map((n) => Number(n));
const matchValue = (n: number) => 2 ** (n - 1);
const getNumberOfMatches = ([key, ours]: [number[], number[]]) => {
  const s = new Set(key);
  let numberOfMatches = 0;
  for (let n of ours) {
    if (s.has(n)) {
      numberOfMatches += 1;
    }
  }
  return numberOfMatches;
};

export const p1 = (input: string) => {
  let total = 0;

  input
    .split("\n")
    .map((l) => {
      const [_, numbers] = l.split(": ");
      return numbers.split(" | ").map((i) => justTheNums(i));
    })
    .forEach(([key, ours]) => {
      const numberOfMatches = getNumberOfMatches([key, ours]);
      total += numberOfMatches > 0 ? matchValue(numberOfMatches) : 0;
    });

  return total;
};

export const p2 = (input: string) => {
  const cardCounts: Record<number, number> = {};

  input
    .split("\n")
    .map((l) => {
      const [_, numbers] = l.split(": ");
      return numbers.split(" | ").map((i) => justTheNums(i));
    })
    .forEach(([key, ours], i) => {
      const id = i + 1;
      cardCounts[id] = cardCounts[id] ? cardCounts[id] + 1 : 1;

      const totalOfCurCard = cardCounts[id];
      const numberOfMatches = getNumberOfMatches([key, ours]);

      for (let i = 1; i <= numberOfMatches; i++) {
        const wonId = id + i;
        const wonNumber = 1 * totalOfCurCard;
        cardCounts[wonId] = cardCounts[wonId]
          ? cardCounts[wonId] + wonNumber
          : wonNumber;
      }
    });

  return Object.values(cardCounts).reduce((pV, cV) => pV + cV, 0);
};
