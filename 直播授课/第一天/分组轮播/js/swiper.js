define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            // 默认参数
            index: 0, //默认下标
        }, opt);
        this.init()
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            // 克隆第一个分组
            var el = this.container.children[0];
            var cloneEl = el.cloneNode(true);
            // 添加到尾部
            this.container.appendChild(cloneEl)
            // 初始化位置
            this.container.style.marginLeft = -this.index * 1000 + "px";
            // 自动轮播
            this.autoPlay();
            // 执行事件函数
            this.bindEvent();
        },
        autoPlay: function () {
            var that = this
            this.timer = setInterval(function () {
                that.next.click()//调用有按钮点击事件
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            // 鼠标进入
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer) //清除定时间
            })
            // 鼠标离开
            this.wrap.addEventListener("mouseleave", function () {
                that.autoPlay();//调用自动轮播
            })
            // 右按钮点击事件
            this.next.addEventListener("click", function () {
                if (that.index === that.container.children.length - 1) {
                    that.index = 0;
                    that.container.style.marginLeft = 0;
                }
                that.change(that.index + 1)
            })

            // 左按钮点击事件
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.container.children.length - 1;
                    that.container.style.marginLeft = -that.index * 1000 + "px";
                }
                that.change(that.index - 1)
            });
            // 添加分页器事件
            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
            // 点击图片添加背景颜色
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    tar.parentNode.style.backgroundColor = "#" + Math.random().toString(16).substr(2,6);
                }
            })

        },
        change: function (i) {
            var that = this;
            that.page.children[that.index === 3 ? 0 : that.index].classList.remove("active")
            that.index = i; //修改下标
            that.page.children[that.index === 3 ? 0 : that.index].classList.add("active")
            V(that.container, {
                marginLeft: -that.index * 1000
            })
        }
    }

    return Swiper;
})