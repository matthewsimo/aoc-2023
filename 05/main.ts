import { p1, p2 } from "./index";
import input from "../_input/05.txt";
import { time } from "../utils/perf";

const [p1A, p1T] = time(() => p1(input));
console.log(`p1: ${p1A} -- ${p1T}ms`);
const [p2A, p2T] = time(() => p2(input));
console.log(`p2: ${p2A} -- ${p2T}ms`);
