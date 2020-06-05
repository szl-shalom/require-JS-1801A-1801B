define(["../lib/a"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init()
    }


    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.next.onclick = function () {
                that.index = ++that.index > 4 ? 0 : that.index;
                V(that.container, {
                    left: -that.index * 1000
                })
            }

            this.prev.onclick = function () {
                that.index = --that.index < 0 ? 4 : that.index;
                V(that.container, {
                    left: -that.index * 1000
                })
            }
        }
    }
    return Sel;
})