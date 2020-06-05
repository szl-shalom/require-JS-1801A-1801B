define(function () {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.content.addEventListener("click", function () {
                that.list.classList.toggle("active")
            })
            this.list.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "INPUT") {
                    var ipts = [...that.list.querySelectorAll("input:checked")];
                    var res = ipts.map(function (item) {
                        return item.nextElementSibling.innerHTML
                    }).join("")
                    that.content.innerHTML = res;
                }
            })

            this.btn.addEventListener("click", function () {
                alert(that.content.innerHTML)
            })
        }
    }
    return Sel;
})