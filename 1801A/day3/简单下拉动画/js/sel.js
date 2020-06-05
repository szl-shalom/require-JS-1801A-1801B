define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.render();
            this.bindEvent();
        },
        render: function () {
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                <li>
                    <b>&gt;</b>
                    <span>${item.name}</span>
                    <ul style="display:none;">
                      ${item.children.map(function (item) {
                    return `
                        <li>
                            <b>&gt;</b>
                            <span>${item.name}</span>
                        </li>
                        `
                }).join("")}
                    </ul>
                </li>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            [...this.ul.children].forEach(function (item) {
                item.addEventListener("click", function () {
                    if (item.lastElementChild.style.display === "block") {
                        V(item.lastElementChild, "slideUp")
                        V(item.firstElementChild, "reverse")
                    } else {
                        V(item.lastElementChild, "slideDown")
                        V(item.firstElementChild, {
                            rotateZ: "90deg"
                        })
                    }
                })
            })
        }
    }

    return Sel;
})