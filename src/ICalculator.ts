import Complex from "./Complex";

interface ICalculator {

    add(x: number | Complex, y: number | Complex): number | Complex;
    sub(x: number | Complex, y: number | Complex): number | Complex;
    mult(x: number | Complex, y: number | Complex): number | Complex;
    div(x: number | Complex, y: number | Complex): number | Complex;
}

export default ICalculator;