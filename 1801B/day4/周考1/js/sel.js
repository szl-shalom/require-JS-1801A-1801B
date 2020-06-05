define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
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
                    <span>${item.name}</span>
                    <b>&gt;</b>
                    <ol style="display:none;">
                        ${item.children.map(function (item) {
                    return `
                            <li>
                                <span>${item.name}</span>
                            </li>
                            `
                }).join("")}
                    </ol>
                </li>
                `
            }).join("")
        },
        bindEvent: function () {
            var ols = [...this.list.querySelectorAll("ol")];
            console.log(ols)

            this.icon.addEventListener("click", function () {
                this.parentNode.classList.toggle("active")
            });
            [...this.list.children].forEach(function (item) {

                item.addEventListener("click", function () {
                    ols.forEach(function (item) {
                        if (item.style.display === "block") {
                            V(item, "slideUp")
                        }
                    })
                    if (item.children[2].style.display !== "block") {
                        V(item.children[2], "slideDown")

                    } else {
                        V(item.children[2], "slideUp")
                    }
      
                })
            })

        }
    }

    return Sel;
})