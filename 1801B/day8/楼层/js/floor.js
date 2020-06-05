define(["$"], function ($) {
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
            var that = this;
            // 获取吸顶元素距离顶部的位置
            var offsetTop = that.nav.offsetTop;
            // 获取每个楼层距离顶部的距离
            var arr = [...this.list.children].map(function (item) {
                return item.offsetTop
            })
            // 滚动条滚动事件
            document.addEventListener("scroll", function () {
                // 获取滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
                // 吸顶
                if (scrollTop >= offsetTop) {
                    // that.nav.classList.add("fixed");
                    $.addClass(that.nav, "fixed")
                    that.nav.nextElementSibling.style.marginTop = that.nav.offsetHeight + "px"
                } else {
                    that.nav.classList.remove("fixed");
                    that.nav.nextElementSibling.style.marginTop = 0
                }
                // 切换高亮
                arr.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        // that.listLeft.querySelector(".active") && that.listLeft.querySelector(".active").classList.remove("active")
                        $.removeClass(that.listLeft.querySelector(".active"), "active")
                        $.addClass(that.listLeft.children[index], "active")
                        // that.listLeft.children[index].classList.add("active")
                    }
                })


            });
            // 点击跳转
            [...that.listLeft.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    document.documentElement.scrollTop = arr[index]
                })
            })
        }
    }

    return Floor;
})