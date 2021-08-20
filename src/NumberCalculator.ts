import ICalc from "./ICalc";

class NumberCalculator implements ICalc<number> {

    add(x: number, y: number): number {
        return x+y;
    }
    sub(x: number, y: number): number {
        return x-y;
    }
    mult(x: number, y: number): number {
        return x*y;
    }
    div(x: number, y: number): number {
        if (y===0) throw new Error("DIBIL!");
        return x/y;
    }
}

export default NumberCalculator;