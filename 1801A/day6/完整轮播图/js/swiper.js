define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            // 设置默认参数
            index: 0
        }, opt)
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            this.start();//初始化
            this.autoplay()//自动播放
            this.bindEvent()//绑定事件
        },
        start: function () {
            // 克隆图片
            var cloneNode = this.container.children[0].cloneNode(true)
            this.container.appendChild(cloneNode);
            // 显示默认图片
            this.container.style.left = - this.index * this.wrap.offsetWidth + "px";
            // 显示默认高亮
            this.page.children[this.index].classList.add("active");
            // 设置container的宽度
            this.container.style.width = this.wrap.offsetWidth * this.container.children.length + "px"
        },
        autoplay: function () {
            var that = this;
            that.timer = setInterval(function () {
                that.next.click() //调用右按钮点击事件
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            // 鼠标划入划出
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })
            this.wrap.addEventListener("mouseleave", function () {
                that.autoplay()
            })
            // 左右点击事件
            that.next.addEventListener("click", function () {
                if (that.index === that.container.children.length - 1) {
                    that.index = 0;
                    that.container.style.left = 0;
                }
                that.change(that.index + 1)
            })
            that.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.container.children.length - 1;
                    that.container.style.left = - that.index * that.wrap.offsetWidth + "px";
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
            that.index = i;
            that.page.children[that.index === that.container.children.length - 1 ? 0 : that.index].classList.add("active")
            V(that.container, { left: - that.index * that.wrap.offsetWidth }, 1000)
        }
    }

    return Swiper;
})