import { assert } from "../utils";
import { p1, p2 } from "./index";

const i1 = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;
export const testp1 = assert(p1(i1), 6440);

const i2 = i1;
export const testp2 = assert(p2(i2), 5905);
