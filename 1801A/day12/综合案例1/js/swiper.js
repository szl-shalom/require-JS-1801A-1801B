define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Template.prototype = {
        constructor: Template,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this, flag = true;
            this.container.onwheel = function () {
                if (flag) {
                    that.page.children[that.index].classList.remove("active");
                    that.index = that.index ? 0 : 1;
                    that.page.children[that.index].classList.add("active");
                    V(this, {
                        left: -that.index * 1000
                    }, {
                        complete: function () {
                            flag = true;
                        }
                    })
                    flag = false
                }

            }
        }

    }

    return Template

})

// document.onwheel