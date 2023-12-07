import { assert } from "../utils";
import { p1, p2 } from "./index";

const i1 = `Time:      7  15   30
Distance:  9  40  200`;

export const testp1 = assert(p1(i1), 288);

const i2 = i1;
export const testp2 = assert(p2(i2), 71503);
