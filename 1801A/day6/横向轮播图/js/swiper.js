define(["../lib/a"], function (V) {
    function Swiper(opt) {
        Object.assign(this, { index: 0 }, opt);
        this.init()

    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.next.addEventListener("click", function () {
                if (that.index >= 2) {
                    return;
                }
                that.index++;
                V(that.container, { left: -250 * that.index })
            })


            this.prev.addEventListener("click", function () {
                if (that.index <= 0) {
                    return;
                }
                that.index--;
                V(that.container, { left: -250 * that.index })
            });

            
            [...this.container.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    that.wrap.style.background = "#" + Math.random().toString(16).substr(2, 6)
                })
            })

        }
    }

    return Swiper;
})