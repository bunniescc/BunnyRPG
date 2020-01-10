class TextDisplay {
    constructor(context) {
        this._context = context;
        this._displayed = false;
        this._callback = null;
    }

    setCallback(v) {
        this._callback = v;
    }

    get isDisplayed() {
        return this._displayed;
    }

    display(text) {
        let ctx = this._context;
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.fillRect(0, 236, 416, 100);
        ctx.fillStyle = "black";
        ctx.font = "bold 16px monospace";
        ctx.textBaseline = "top";
        let txtArr = text.split('\n');
        for (let i = 0; i < txtArr.length; i++) {
            ctx.fillText(txtArr[i], 10, 246 + 22 * i);
        }
        this._displayed = true;
    }

    clear() {
        let ctx = this._context;
        ctx.clearRect(0, 236, 416, 100);
        this._displayed = false;
        if (typeof this._callback === 'function') {
            this._callback();
            this._callback = null;
        }
    }
}
