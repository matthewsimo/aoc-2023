import { p1, p2 } from "./index";
import input from "../_input/07.txt";
import { report } from "../utils/perf";

report(
  () => p1(input),
  () => p2(input)
);