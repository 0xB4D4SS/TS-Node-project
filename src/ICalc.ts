interface ICalc<Type extends Number> {

    add(x: Type, y: Type): Type;
    sub(x: Type, y: Type): Type;
    mult(x: Type, y: Type): Type;
    div(x: Type, y: Type): Type;
}

export default ICalc;