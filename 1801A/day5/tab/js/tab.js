define(function () {
    function Tab(opt) {
        Object.assign(this, {

        }, opt)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this, el = null;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener(that.type, function () {
                    // 切换标题
                    el = that.title.querySelector(".active")
                    el && el.classList.remove("active")
                    item.classList.add("active") //给当前添加类名

                    //  切换内容
                    el = that.content.querySelector(".active")
                    el && el.classList.remove("active")
                    that.content.children[index].classList.add("active")
                })
            })
        }
    }

    return Tab;
})