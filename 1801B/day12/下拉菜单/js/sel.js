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
            [...this.nav.children].forEach(function (item) {
                item.onmouseenter = function () {
                    // item.children[0].style.display = "block";

                    V(item.children[0], "slideDown")
                }

                item.onmouseleave = function () {
                    // item.children[0].style.display = "none";

                    V(item.children[0], "slideUp")
                }
            });

            [...this.nav.querySelectorAll("ol>li")].forEach(function (item) {
                item.onmouseenter = function () {
                    // item.children[0].style.display = "block";
                    V(item.children[0], "fadeIn")
                }
                item.onmouseleave = function () {
                    // item.children[0].style.display = "none";
                    V(item.children[0], "fadeOut")

                }
            });

        }
    }
    return Sel;
})