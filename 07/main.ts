import { run } from "../utils";
import { p1, p2 } from "./index";
import input from "../_input/07.txt";
import { testp1, testp2 } from "./index.test";

run([testp1, () => p1(input)], [testp2, () => p2(input)]);
