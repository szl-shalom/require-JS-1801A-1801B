define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();
            this.bindEvent();
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.html;
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this,
                ipts = this.content.querySelectorAll("input");
            // 删除
            btns[0].addEventListener("click", function () {
                that.removeclick() //删除回调
                that.remove()
            })
            // 取消
            btns[1].addEventListener("click", function () {
                that.remove()
            })
            // 完成
            btns[2].addEventListener("click", function () {
                that.okclick(ipts[0].value, ipts[1].value) //完成回调
                that.remove()
            })

            // input 输入事件
            ipts.forEach(function (item) {
                item.addEventListener("input", function () {
                    that.disabled(btns, ipts) //检测
                })
            })
            // 调用检测非空验证
            this.disabled(btns, ipts)


        },
        remove: function () {
            this.mask.remove();
            this.content.remove();
        },
        disabled: function (btns, ipts) {
            // 检测是否为空
            if (ipts[0].value && ipts[1].value) {
                btns[2].disabled = false; //可以点击
            } else {
                btns[2].disabled = true; //不可以点击
            }
        }
    }

    return Dialog;
})