define(function () {
    function MyTop(opt) {
        Object.assign(this, opt)
        this.init()
    }
    MyTop.prototype = {
        constructor: MyTop,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            document.addEventListener("scroll", function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop > 200) {
                    that.ul.style.position = "fixed"
                    that.ul.style.top = 0
                } else {
                    that.ul.style.position = ""
                }
            })
        }
    }

    return MyTop;


})