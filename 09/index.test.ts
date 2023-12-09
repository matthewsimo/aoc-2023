import { assert } from "../utils";
import { p1, p2 } from "./index";

const i1 = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;
export const testp1 = assert(p1(i1), 114);

const i2 = i1;
export const testp2 = assert(p2(i2), 2);
