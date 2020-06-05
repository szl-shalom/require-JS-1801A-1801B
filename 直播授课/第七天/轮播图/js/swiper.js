define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 复制第一张图片到末尾
            this.container.appendChild(this.container.firstElementChild.cloneNode(true));
            // 保存最大下标
            this.maxIndex = this.container.children.length - 1;
            //自动轮播
            this.autoPlay();
            // 绑定事件
            this.bindEvent();
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                console.log(that.index)
                that.next.click() //调用右按钮点击事件
            }, 2000)
        },
        change: function (i) {
            var that = this;
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.remove("active");
            that.index = i;
            that.page.children[that.index === that.maxIndex ? 0 : that.index].classList.add("active");
            V(that.container, {
                left: -that.index * 1200
            })
        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入 和 离开事件
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer);
                V(that.prev, "fadeIn");
                V(that.next, "fadeIn");
            })

            this.wrap.addEventListener("mouseleave", function () {
                that.autoPlay();
                V(that.prev, "fadeOut");
                V(that.next, "fadeOut");
            })

            // 左右点击事件
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.maxIndex;
                    that.container.style.left = -that.index * 1200 + "px";
                }
                that.change(that.index - 1)
            })

            this.next.addEventListener("click", function () {
                if (that.index === that.maxIndex) {
                    that.index = 0;
                    that.container.style.left = 0
                }
                that.change(that.index + 1)
            });

            // 点击分页器
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })

        }
    }

    return Swiper;
})