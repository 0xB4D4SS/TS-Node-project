"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor() { }
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    mult(x, y) {
        return x * y;
    }
    div(x, y) {
        if (y === 0)
            throw new Error("DIBIL!");
        return x / y;
    }
}
let calc = new Calculator();
console.log(calc.add(2, 3));
exports.default = Calculator;
