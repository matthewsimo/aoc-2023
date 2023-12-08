import { run } from "../utils";
import { p1, p2 } from "./index";
import { testp1, testp2 } from "./index.test";
import input from "../_input/08.txt";

const p = (i) => console.log("pass");

run([testp1, () => p1(input)], [testp2, () => p2(input)]);
