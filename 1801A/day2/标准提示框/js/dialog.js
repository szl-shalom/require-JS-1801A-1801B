define(function () {
    function Dialog(opt) {
        Object.assign(this, {
            maskCssText: `width: 100%;height: 100%;background: rgba(0, 0, 0, .3);position: fixed;top: 0;left: 0;`,
            title: "我是提示框",
            okValue: "确定",
            noValue: "取消"
        }, opt)
        this.init()
    }
    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = this.maskCssText; //设置样式
            document.body.appendChild(this.mask)
            this.content = document.createElement("div");
            this.content.style = `
                border: 1px solid #000;
                background: #fff;
                position: fixed;
                transform: translate(-50%, -50%);
                left: 50%;
                top: 50%;
                padding: 20px;
                border-radius: 25px;
                width: 300px;
                text-align: center;
            `
            this.content.innerHTML = `
                <h2>${this.title}</h2>
                <button style="margin: 20px;width: 80px;height: 40px;border-radius: 10px;border: 0;outline: none;">${this.okValue}</button>
                <button  style="margin: 20px;width: 80px;height: 40px;border-radius: 10px;border: 0;outline: none;">${this.noValue}</button>
            `
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this;
            btns[0].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()

            })

            btns[1].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()

            })
        }
    }
    return Dialog;

})