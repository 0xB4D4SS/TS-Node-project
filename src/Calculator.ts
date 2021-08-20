import NumberCalculator from "./NumberCalculator";
import ComplexCalculator from "./ComplexCalculator";
import Complex from "./Complex";
import ICalculator from "./ICalculator";
import ICalc from "./ICalc";

class Calculator implements ICalculator {

    numc: ICalc<number> = new NumberCalculator();
    compc: ICalc<Complex> = new ComplexCalculator();

    add(x: number | Complex, y: number | Complex): number | Complex {
        if (typeof x === "number" && typeof y === "number") {
            return this.numc.add(x, y);
        }
        if (x instanceof Complex && y instanceof Complex) {
            return this.compc.add(x, y);
        }
    }
    mult(x: number | Complex, y: number | Complex): number | Complex {
        if (typeof x === "number" && typeof y === "number") {
            return this.numc.mult(x, y);
        }
        if (x instanceof Complex && y instanceof Complex) {
            return this.compc.mult(x, y);
        }
    }
    sub(x: number | Complex, y: number | Complex): number | Complex {
        if (typeof x === "number" && typeof y === "number") {
            return this.numc.sub(x, y);
        }
        if (x instanceof Complex && y instanceof Complex) {
            return this.compc.sub(x, y);
        }
    }
    div(x: number | Complex, y: number | Complex): number | Complex {
        if (typeof x === "number" && typeof y === "number") {
            return this.numc.div(x, y);
        }
        if (x instanceof Complex && y instanceof Complex) {
            return this.compc.div(x, y);
        }
    }
}

export default Calculator;