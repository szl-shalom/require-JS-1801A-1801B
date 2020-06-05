// 创建模块
define(["V"], function (V) {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            // 动态创建DOM结构和样式
            this.create()
            // 调用事件函数
            this.bindEvent();


        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .5);
                position: fixed;
                top: 0;
                left: 0;
            `
            document.body.appendChild(this.mask)
            V(this.mask, "fadeIn", 2000)
            this.content = document.createElement("div");
            this.content.style = `
                width: 300px;
                background: white;
                padding: 20px;
                position: fixed;
                left: 50%;
                top: -50%;
                transform: translate(-50%, -50%);
                text-align: center;
                border-radius: 25px;
            `
            this.content.innerHTML = `
                <h1>${this.title}</h1>
                <button>好</button><button>不好</button>
            `
            document.body.appendChild(this.content)
            V(this.content, {
                top: "50%"
            }, 2000)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this;

            btns[0].addEventListener("click", function () {
                V(that.mask, "fadeOut", {
                    duration: 2000,
                    complete: function () {
                        that.mask.remove()
                    }
                })
                V(that.content, {
                    top: "-50%"
                }, {
                    duration: 2000,
                    complete: function () {
                        that.content.remove()
                    }
                })
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })
        }
    }

    return Dialog;
})