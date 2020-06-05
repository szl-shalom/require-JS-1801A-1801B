define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this, flag = true;
            this.container.onmousewheel = function () {
                if (flag) {
                    that.page.children[that.index].classList.remove("active");
                    that.index = that.index ? 0 : 1;
                    that.page.children[that.index].classList.add("active");
                    V(this, {
                        marginLeft: -that.index * 1000
                    }, {
                        complete: function () {
                            flag = true
                        }
                    })
                    flag = false
                }

            };

            [...this.page.children].forEach(function (item, index) {
                item.onclick = function () {
                    that.page.children[that.index].classList.remove("active");
                    that.index = index
                    that.page.children[that.index].classList.add("active");
                    V(that.container, {
                        marginLeft: -that.index * 1000
                    })
                }
            })
        }
    }

    return Template;
})