define(["V"], function (V) {
    function S(opt) {
        Object.assign(this, opt)
        this.init()

    }

    S.prototype = {
        constructor: S,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                <li>
                    <img src=${item.url} alt="">
                    <div class="header-mask"></div>
                    <div class="footer-mask">
                        <div class="left">${item.leftValue}</div>
                        <div class="right">${item.rightValue}</div>
                    </div>
                </li>
                `
            }).join("")
        },
        bindEvent: function () {
            [...this.ul.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    V(item, { width: 400 })
                    V(item.children[1], "slideUp")
                    V(item.children[2], { left: -400 })
                })

                item.addEventListener("mouseleave", function () {
                    V(item, { width: 200 })
                    V(item.children[1], "slideDown")
                    V(item.children[2], { left: 0 })
                })
            })
        }
    }

    return S;
})