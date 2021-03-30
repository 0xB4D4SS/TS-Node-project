import Calculator from "./Calculator";
import ICalc from "./ICalc";
import Complex from "./Complex";
import ComplexCalculator from "./ComplexCalculator";

const calc: ICalc<number> = new Calculator();
const compcalc: ICalc<Complex> = new ComplexCalculator();

console.log(calc.add(2,45));
console.log(compcalc.add(new Complex(1,0), new Complex(2, 1)));

let s = 1;

export default s;
