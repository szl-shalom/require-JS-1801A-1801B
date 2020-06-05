define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            this.list.innerHTML = this.data.map(function (item) {
                return `
                <li>
                    <b>&gt;</b>
                    <span>${item.name}</span>
                    <ol style="display:none;">
                      ${item.children.map(function (item1) {
                    return `
                        <li>
                            <b>&gt;</b>
                            <span>${item1.name}</span>
                        </li>
                        `
                }).join("")}
                    </ol>
                </li>
                `
            }).join("");
        },
        bindEvent: function () {
            [...this.list.children].forEach(function (item) {
                var flag = true
                item.addEventListener("click", function () {
                    flag ? V(item.children[2], "slideDown") : V(item.children[2], "slideUp")
                    flag ? V(item.children[0], { rotateZ: "90deg" }) : V(item.children[0], { rotateZ: 0 })
                    flag = !flag;
                })
            })
        }
    }

    return Sel;
})