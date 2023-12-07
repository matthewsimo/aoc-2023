import { p1, p2 } from "./index";
import { assert } from "../utils";

const i1 = ``;
export const testp1 = assert(p1(i1), 1);

const i2 = i1;
export const testp2 = assert(p2(i2), 1);
