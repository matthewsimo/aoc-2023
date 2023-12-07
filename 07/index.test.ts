import { expect, test } from "bun:test";
import { p1, p2 } from "./index";

const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;
test("p1", () => {
  expect(p1(input)).toBe(6440);
});

test("p2", () => {
  expect(p2(input)).toBe(5905);
});
