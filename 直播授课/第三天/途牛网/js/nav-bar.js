define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructorL: Template,
        init: function () {
            // 渲染
            this.render();
            // 绑定事件
            this.bindEvent()
        },
        render: function () {
            this.ul.innerHTML = this.data.map(function (item) {
                return `
                    <li>${item.name}${item.children ? "<b>^</b>" : ""}</li>
               `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            [...this.ul.children].forEach(function (item, index) {
                item.addEventListener("mouseenter", function () {
                    that.con.style.display = that.data[index].children ? "block" : "none";
                    if (that.data[index].children) {
                        that.con.innerHTML = that.data[index].children.map(function (item) {
                            return `
                                <span>${item}</span>
                            `
                        }).join("")
                    }
                    // 转一转
                    if (item.firstElementChild) {
                        V(item.firstElementChild, {
                            rotateZ: [360, 0]
                        })
                    }
                })
            })

            this.box.addEventListener("mouseleave", function () {
                that.con.style.display = "none"
            })
        }

    }

    return Template;
})