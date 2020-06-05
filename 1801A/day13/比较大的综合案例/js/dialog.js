define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init()
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            [...this.ul.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    that.create(item)
                })

                item.addEventListener("mouseleave", function () {
                    that.con.remove();
                })
            })
        },
        create: function (item) {
            var obj = item.getBoundingClientRect();
            this.con = document.createElement("div");
            this.con.style = `
                position:fixed;
                top:${obj.top + item.offsetHeight / 2 - 50}px;
                left:${obj.left - 70}px;
                width:70px;
                height:100px;
                background:pink;
            `
            document.body.appendChild(this.con)
            V(this.con, {
                left: [obj.left - 70,obj.left - 100]
            })
        }
    }
    return Template;
})