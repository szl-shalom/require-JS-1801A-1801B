define(["../lib/a"], function (V) {
    function Swiper(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.next.onclick = function () {
                that.index = ++that.index > 4 ? 0 : that.index;
                V(that.container, {
                    marginLeft: -that.index * 1000
                })
            }

            this.prev.onclick = function () {
                that.index = --that.index < 0 ? 4 : that.index;
                V(that.container, {
                    marginLeft: -that.index * 1000
                })
            }
        }
    }

    return Swiper;
})