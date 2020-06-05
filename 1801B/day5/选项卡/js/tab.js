define(["V"], function (V) {
    function Tab(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            [...that.title.children].forEach(function (item, index) {
                item.onclick = function () {
                    // 标题
                    // 去除原来的类名
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    // // 添加类名
                    item.classList.add("active")

                    // 内容
                    // 去除原来的类名
                    that.content.querySelector(".active") && that.content.querySelector(".active").classList.remove("active")
                    // 添加类名
                    that.content.children[index].classList.add("active")

                    // 添加动画
                    V(that.back, { left: item.offsetLeft })

                }
            })
        }
    }

    return Tab;
})