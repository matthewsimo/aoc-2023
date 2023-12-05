export const time = (fn: () => any) => {
  const s = performance.now();
  const a = fn();
  const e = performance.now();
  return [a, e - s];
};
