import { p1, p2 } from "./index";
import input from "../_input/05.txt";
import { report } from "../utils";

report(
  () => p1(input),
  () => p2(input)
);
