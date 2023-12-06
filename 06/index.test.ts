import { expect, test } from "bun:test";
import { p1, p2 } from "./index";

test("p1", () => {
  const input = `Time:      7  15   30
Distance:  9  40  200`;
  expect(p1(input)).toBe(288);
});

test("p2", () => {
  const input = `Time:      7  15   30
Distance:  9  40  200`;
  expect(p2(input)).toBe(71503);
});
