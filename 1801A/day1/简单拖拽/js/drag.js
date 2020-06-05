define([], function () {
    function Drag(opt) {
        //  合拼参数以及设置默认参数
        Object.assign(this, {
            // 默认参数
            index: 1
        }, opt)
        // 初始化
        this.init()
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            var flag = false, pos = {}, that = this;
            this.box.addEventListener("mousedown", function (e) {
                // 存储鼠标点距离元素的左上边距
                pos = {
                    x: e.offsetX,
                    y: e.offsetY
                }
                // 设置定位
                that.box.style.position = "absolute";
                // 打开开关
                flag = true
                // 阻止默认行为
                e.preventDefault()
            })
            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    var x = e.pageX - pos.x,
                        y = e.pageY - pos.y;
                    if (x < 0) x = 0;
                    if (y < 0) y = 0;
                    if (x > document.documentElement.clientWidth - that.box.offsetWidth) x = document.documentElement.clientWidth - that.box.offsetWidth
                    if (y > document.documentElement.clientHeight - that.box.offsetHeight) y = document.documentElement.clientHeight - that.box.offsetHeight
                    that.box.style.left = x + "px"
                    that.box.style.top = y + "px"
                }


            })
            document.addEventListener("mouseup", function () {
                flag = false
            })

        }
    }

    return Drag
})