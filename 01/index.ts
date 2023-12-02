const isNum = (n: string) => /^\d+$/.test(n);

export const p1 = (input: string) => {
  return input
    .split("\n")
    .map((l) => {
      const n1 = l.split("").find(isNum);
      const n2 = l.split("").findLast(isNum);
      return Number(`${n1}${n2}`);
    })
    .reduce((acc, cV) => acc + cV, 0);
};

export const p2 = (input: string) => {
  return input
    .split("\n")
    .map((n) => {
      let s = n;
      s = s.replaceAll("nine", "n9ne");
      s = s.replaceAll("eight", "ei8ht");
      s = s.replaceAll("seven", "se7en");
      s = s.replaceAll("six", "s6x");
      s = s.replaceAll("five", "fi5e");
      s = s.replaceAll("four", "fo4r");
      s = s.replaceAll("three", "th3ee");
      s = s.replaceAll("two", "t2o");
      s = s.replaceAll("one", "o1n");
      return s;
    })
    .map((l) => {
      const n1 = l.split("").find(isNum);
      const n2 = l.split("").findLast(isNum);
      return Number(`${n1}${n2}`);
    })
    .reduce((acc, cV) => acc + cV, 0);
};
