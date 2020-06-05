define(function () {
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
            this.content.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "B") {
                    tar.parentNode.remove();
                }
                that.list.style.display = "block"
            })

            this.search.addEventListener("focus", function () {
                that.list.style.display = "block"
            })

            this.list.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    that.content.appendChild(tar)
                }
            })

            this.search.addEventListener("input", function () {
                var val = this.value;
                [...that.list.children].forEach(function (item) {
                    item.style.display = item.innerHTML.includes(val) ? "block" : "none"
                })
            })

        }
    }
    return Sel;
})