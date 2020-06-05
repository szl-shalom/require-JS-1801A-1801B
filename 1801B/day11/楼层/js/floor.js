define(["../lib/a"], function (V) {
    function Floor(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Floor.prototype = {
        constructor: Floor,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var offsetTops = [...this.list.children].map(function (item) {
                return item.offsetTop;
            }), that = this;
            document.onscroll = function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                offsetTops.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        that.list1.querySelector(".active") && that.list1.querySelector(".active").classList.remove("active")
                        that.list1.children[index].classList.add("active")
                    }
                })

            };

            [...this.list1.children].forEach(function (item, index) {
                item.onclick = function () {
                    V(that.list.children[index], "scroll")
                }
            })
        }
    }

    return Floor;
})