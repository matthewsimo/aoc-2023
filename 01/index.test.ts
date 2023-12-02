import { expect, test } from "bun:test";
import { p1, p2 } from "./index";

test("p1", () => {
  const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
  expect(p1(input)).toBe(142);
});

test("p2", () => {
  const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
  expect(p2(input)).toBe(281);
});
