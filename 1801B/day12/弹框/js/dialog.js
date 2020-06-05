define(["../lib/a"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init()
    }


    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.content = document.createElement("div");
            this.mask.style = `
                width:100%;
                height:100%;
                position:fixed;
                left:0;
                top:0;
                background:rgba(0,0,0,.3);
            `
            document.body.appendChild(this.mask);
            this.content.style = `
                padding:20px;
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                background:#fff;
            `;
            this.content.innerHTML = `
                <h1>${this.title}</h1>
                <button>${this.okValue}</button>
                <button>${this.noValue}</button>
            `
            document.body.appendChild(this.content)

        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this;
            btns[0].onclick = function () {
                that.mask.remove()
                that.content.remove()
            }
            btns[1].onclick = function () {
                that.mask.remove()
                that.content.remove()
            }
        }

    }
    return Sel;
})