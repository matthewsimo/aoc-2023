const max = {
  r: 12,
  g: 13,
  b: 14,
};

export const p1 = (i: string) => {
  let answer = 0;
  i.split("\n").forEach((l) => {
    const gameData = l.split(": ");
    const id = Number(gameData[0].replace("Game ", ""));
    const d = gameData[1].split("; ");
    const data = d.map((dLine) => dLine.split(", "));
    if (
      data.every((game) =>
        game.every((v) => {
          if (v.endsWith(" red")) {
            return Number(v.split(" red")[0]) <= max.r;
          }
          if (v.endsWith(" green")) {
            return Number(v.split(" green")[0]) <= max.g;
          }
          if (v.endsWith(" blue")) {
            return Number(v.split(" blue")[0]) <= max.b;
          }
        })
      )
    ) {
      answer += id;
    }
  });
  return answer;
};

export const p2 = (i: string) => {
  let answer = 0;
  i.split("\n").forEach((l) => {
    const maxes = {
      r: 0,
      g: 0,
      b: 0,
    };
    const gameData = l.split(": ");
    const d = gameData[1].split("; ");
    const data = d.map((dLine) => dLine.split(", "));

    data.forEach((game) => {
      game.forEach((v) => {
        if (v.endsWith(" red")) {
          const r = Number(v.split(" red")[0]);
          if (r > maxes.r) {
            maxes.r = r;
          }
        }
        if (v.endsWith(" green")) {
          const g = Number(v.split(" green")[0]);
          if (g > maxes.g) {
            maxes.g = g;
          }
        }
        if (v.endsWith(" blue")) {
          const b = Number(v.split(" blue")[0]);
          if (b > maxes.b) {
            maxes.b = b;
          }
        }
      });
    });
    answer += maxes.r * maxes.g * maxes.b;
  });
  return answer;
};
