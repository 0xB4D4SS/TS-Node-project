import Complex from "./Complex";
import Calculator from "./Calculator";

const calc = new Calculator();

console.log(calc.add(44,2));
console.log(calc.sub(new Complex(2,4), new Complex(3, 2)).toString());

let s = 1;

export default s;
