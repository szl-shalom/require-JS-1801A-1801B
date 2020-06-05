
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
            var el = this.container.children[0].cloneNode(true)
            this.container.appendChild(el)

            this.autoplay() //自动播放
        },
        autoplay: function () {
            var that = this;
            setInterval(function () {
                if (that.index === that.container.children.length - 1) {
                    that.index = 0;
                    that.container.style.left = 0;
                }

                that.index++;
                V(that.container, {
                    left: -that.index * 800
                }, 1000)
            }, 2000)
        }

    }

    return Swiper;
})