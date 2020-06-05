define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init()
        console.log(1)
    }


    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width: 100%;
                height: 40px;
                background: ${this.background};
                line-height: 40px;
                padding: 0 20px;
                margin: 10px 0;
            `
            this.mask.innerHTML = `
                <span style="color:${this.color}">${this.title}</span>
                <b style="float:right;">X</b>
            `
            document.body.appendChild(this.mask)
        }
    }


    return Dialog;
})