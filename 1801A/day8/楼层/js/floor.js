define(["./dom"], function ($) {
    function F(opt) {
        Object.assign(this, opt)
        this.init()
    }

    F.prototype = {
        constructor: F,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var arr = [...this.list.children].map(function (item) {
                return item.offsetTop;
            }), that = this;
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop;
                arr.forEach(function (val, index) {
                    if (scrollTop >= val) {
                        // that.list1.querySelector(".active") && that.list1.querySelector(".active").classList.remove("active")
                        $.removeClass(that.list1.querySelector(".active"), "active");
                        // that.list1.children[index].classList.add("active");
                        $.addClass(that.list1.children[index], "active");
                    }
                })
            });

            [...this.list1.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    document.documentElement.scrollTop = arr[index]
                })
            })
        }
    }

    return F;
})