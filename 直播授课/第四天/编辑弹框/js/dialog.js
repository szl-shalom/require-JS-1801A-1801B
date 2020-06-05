define(function () {
    function Dialog(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create() //动态创建DOM结构
            this.bindEvent();//添加事件
        },
        create: function () {
            // 动态创建遮罩层
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask)
            // 动态创建内容盒子
            this.content = document.createElement("div");
            this.content.innerHTML = this.html;
            this.content.className = "content"
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this,
                ipts = [...this.content.querySelectorAll("input")];
            // 确定按钮点击事件
            btns[0].addEventListener("click", function () {
                that.okClick(ipts.map(function (item) {
                    return item.value
                })); //执行回调函数
                that.remove()
            })
            // 取消按钮点击事件
            btns[1].addEventListener("click", function () {
                that.remove()
            })
        },
        remove: function () {
            this.mask.remove();
            this.content.remove()
        }
    }

    return Dialog;
})