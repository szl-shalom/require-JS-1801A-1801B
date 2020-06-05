define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0
        }, opt);
        this.init();
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            this.render();
            this.autoplay()
            this.bindEvent()
        },
        render: function () {
            // 渲染图片
            this.container.innerHTML = this.data.map(function (item) {
                return `
                    <img src=${item} alt="">
                `
            }).join("")
            // 渲染
            this.page.innerHTML = this.data.map(function () {
                return `
                    <li></li>
                `
            }).join("")

            // 复制一张
            var el = this.container.children[0].cloneNode(true);
            this.container.appendChild(el)
            // 最大下标
            this.len = this.container.children.length - 1
        },
        autoplay: function () {
            var that = this;
            this.timer = setInterval(function () {
                that.next.click()
            }, 2000)
        },
        change: function (i) {
            var that = this;
            that.page.children[that.index === that.len ? 0 : that.index].classList.remove("active");
            that.index = i;
            that.page.children[that.index === that.len ? 0 : that.index].classList.add("active");
            V(that.container, {
                left: -that.index * 1200
            })
        },
        bindEvent: function () {
            var that = this;
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })

            this.wrap.addEventListener("mouseleave", function () {
                that.autoplay()
            })
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.len;
                    that.container.style.left = -that.index * 1200 + "px";
                }
                that.change(that.index - 1)
            })

            this.next.addEventListener("click", function () {
                if (that.index === that.len) {
                    that.index = 0;
                    that.container.style.left = 0;
                }
                that.change(that.index + 1)
            });

            [...this.page.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    that.change(index)
                })
            })
        }
    }

    return Swiper;
})