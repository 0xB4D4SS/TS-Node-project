class Complex {
    private _re: number;
    private _im: number;
    constructor(re: number, im: number) {
        this._re = re;
        this._im = im;
    }
    get re() {
        return this._re;
    }
    get im() {
        return this._im;
    }
    set re(val: number) {
        this._re = val;
    }
    set im(val: number) {
        this._im = val;
    }
    getIm() {
        if (this.im > 0) {
            return "+" + this.im + "i"
        }
        if (this.im < 0) {
            return this.im + "i"
        }
        return "";
    }

    toString() {
        return this._re + this.getIm();
    }
}

export default Complex;