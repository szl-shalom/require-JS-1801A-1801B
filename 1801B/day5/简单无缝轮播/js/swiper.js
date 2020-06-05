

define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0
        }, opt);
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 克隆元素
            var el = this.container.children[0].cloneNode(true)
            // 追加到末尾
            this.container.appendChild(el)
            this.autoplay() //自动轮播
            this.bindEvent();
        },
        autoplay: function () {
            var that = this;
            that.timer = setInterval(function () {
                that.next.click() //右按钮点击事件执行
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            // 鼠标划入
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })
            // 鼠标划出
            this.wrap.addEventListener("mouseleave", function () {
                that.autoplay()
            })
            // 右按钮点击事件
            this.next.addEventListener("click", function () {
                if (that.index === that.container.children.length - 1) {
                    that.index = 0;
                    that.container.style.left = -that.index * 1200 + "px"
                }
                that.change(that.index + 1)
            })
            // 左按钮点击事件
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.container.children.length - 1;
                    that.container.style.left = -that.index * 1200 + "px"
                }
                that.change(that.index - 1)
            });
            // 分页器事件
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        },
        change: function (i) {
            var that = this;
            that.page.children[that.index === that.container.children.length - 1 ? 0 : that.index].classList.remove("active")
            that.index = i
            that.page.children[that.index === that.container.children.length - 1 ? 0 : that.index].classList.add("active")
            V(that.container, {
                left: -1200 * that.index
            }, 500)
        }
    }

    return Swiper;
})