export const p1 = (input: string) => {
  const waysToWin: number[] = [];

  const [times, dists] = input.split("\n").map((l) => {
    return l
      .split(": ")[1]
      .split(" ")
      .filter((n) => n !== "")
      .map((n) => Number(n));
  });

  for (let i in times) {
    const time = times[i];
    const dist = dists[i];

    const wins = [];

    for (let j = 0; j < time; j++) {
      const holdTime = j;
      const d = (time - holdTime) * holdTime;
      if (d > dist) {
        wins.push(holdTime);
      }
    }
    waysToWin.push(wins.length);
  }

  return waysToWin.reduce((pV, cV) => cV * pV, 1);
};

export const p2 = (input: string) => {
  const [time, dist] = input.split("\n").map((l) => {
    return Number(
      l
        .split(": ")[1]
        .split(" ")
        .filter((n) => n !== "")
        .join("")
    );
  });

  const wins = [];

  for (let j = 0; j < time; j++) {
    const holdTime = j;
    const d = (time - holdTime) * holdTime;
    if (d > dist) {
      wins.push(holdTime);
    }
  }
  return wins.length;
};
