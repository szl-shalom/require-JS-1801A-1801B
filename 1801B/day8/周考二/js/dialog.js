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
                that.delclick() // 删除回调
                that.remove()
            })
            // 取消
            btns[1].addEventListener("click", function () {
                that.remove()
            })

            // 确定
            btns[2].addEventListener("click", function () {
                that.okclick(ipts[0].value,ipts[1].value) //确定按钮回调
                that.remove()
            })
            // input输入事件
            ipts[0].addEventListener("input", function () {
                // 检测禁用
                that.disabled(btns, ipts)
            })
            ipts[1].addEventListener("input", function () {
                // 检测禁用
                that.disabled(btns, ipts)
            })
            // 检测禁用
            this.disabled(btns, ipts)
        },
        // 删除
        remove: function () {
            this.mask.remove();
            this.content.remove();
        },
        // 检测禁用函数
        disabled: function (btns, ipts) {
            if (!ipts[0].value || !ipts[1].value) {
                btns[2].disabled = true;
            } else {
                btns[2].disabled = false;
            }
        }
    }

    return Dialog;
})