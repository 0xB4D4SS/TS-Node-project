import Complex from "./Complex";
import ICalc from "./ICalc";

class ComplexCalculator implements ICalc<Complex> {

    add(x: Complex, y: Complex): Complex {
        return new Complex(x.re+y.re, x.im+y.im);
    }
    sub(x: Complex, y: Complex): Complex {
        return new Complex(x.re-y.re, x.im-y.im);
    }
    mult(x: Complex, y: Complex): Complex {
        return new Complex(x.re*y.re-x.im*y.im, x.re*y.im+y.re*x.im);
    }
    inv(x: Complex): Complex {
        let znam: number;
        znam = Math.pow(x.re, 2) + Math.pow(x.im, 2);
        return new Complex(x.re/znam, -x.im/znam);
    }
    div(x: Complex, y: Complex): Complex {
        return this.mult(x, this.inv(y));
    }
}

export default ComplexCalculator;