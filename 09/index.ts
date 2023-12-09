const calc = (
  nums: number[],
  rFn: (nums: number[], diff: number) => number
): number => {
  if (nums.every((n) => n === 0)) {
    return 0;
  }

  let deltas: number[] = nums
    .map((n, i) => {
      if (typeof nums[i + 1] !== "undefined") {
        return nums[i + 1] - n;
      }
    })
    .filter((n) => typeof n !== "undefined") as number[];
  let diff = calc(deltas, rFn);
  return rFn(nums, diff);
};

export const p1 = (input: string) =>
  input
    .split("\n")
    .map((l) => {
      return calc(
        l.split(" ").map((n) => Number(n)),
        (nums, diff) => (nums.at(-1) as number) + diff
      );
    })
    .reduce((pV, cV) => pV + cV, 0);

export const p2 = (input: string) =>
  input
    .split("\n")
    .map((l) => {
      return calc(
        l.split(" ").map((n) => Number(n)),
        (nums, diff) => (nums.at(0) as number) - diff
      );
    })
    .reduce((pV, cV) => pV + cV, 0);
