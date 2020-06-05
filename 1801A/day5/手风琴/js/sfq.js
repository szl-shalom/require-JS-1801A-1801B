define(["V"], function (V) {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            [...this.ul.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    V(item, { width: 300 })
                    V(item.children[1], "slideUp")
                    V(item.children[2], { marginLeft: -300 })
                })

                item.addEventListener("mouseleave", function () {
                    V(item, { width: 200 })
                    V(item.children[1], "slideDown")
                    V(item.children[2], "reverse")
                })
            })
        }
    }


    return S;

})