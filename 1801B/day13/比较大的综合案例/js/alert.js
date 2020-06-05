define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            [...this.ul.children].forEach(function (item) {
                item.addEventListener("mouseenter", function () {
                    that.create(item)
                })

                item.addEventListener("mouseleave", function () {
                    that.con.remove()
                })
            })
        },
        create: function (item) {
            var obj = item.getBoundingClientRect();
            this.con = document.createElement("div");
            this.con.style = `
                width:50px;
                height:100px;
                background:red;
                left:${obj.left - 50}px;
                top:${obj.top + item.offsetHeight / 2 - 50}px;
                position:fixed;
            `
            document.body.appendChild(this.con);
            V(this.con, {
                left: [obj.left - 50,obj.left - 100]
            })
        }
    }
    return Template;

})