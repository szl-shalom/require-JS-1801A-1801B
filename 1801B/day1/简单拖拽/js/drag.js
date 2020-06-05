// 定义模块
define([], function () {
    function Drag(opt) {
        // 合并对象并且设置默认参数
        Object.assign(this, {
            // 默认参数
            // index: 0
        }, opt)
        // 初始化
        this.init()

    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var flag = false, pos = {}, that = this;
            this.box.addEventListener("mousedown", function (e) {
                pos = {
                    x: e.offsetX,
                    y: e.offsetY
                }
                that.box.style.position = "absolute";
                flag = true
                e.preventDefault()
            })

            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    var x = e.pageX - pos.x,
                        y = e.pageY - pos.y;
                    if (x < 0) x = 0;
                    if (y < 0) y = 0;
                    if (x > window.innerWidth - that.box.offsetWidth) x = window.innerWidth - that.box.offsetWidth
                    if (y > window.innerHeight - that.box.offsetHeight) y = window.innerHeight - that.box.offsetHeight

                    that.box.style.left = x + "px"
                    that.box.style.top = y + "px"
                }

            })

            document.addEventListener("mouseup", function () {
                flag = false
            })
        }
    }

    return Drag;
})