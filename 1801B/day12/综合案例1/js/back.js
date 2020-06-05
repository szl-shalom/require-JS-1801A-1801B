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
            var that = this;
            this.icon.onclick = function () {
                V(this, {
                    rotateZ: [720, 45]
                }, {
                    complete: function () {
                        document.body.style.backgroundImage = `url(img/${
                            Math.floor(Math.random() * 15) + 1
                            }.jpg)`
                    }
                })
            }

            setInterval(function () {
                that.icon.onclick()
            }, 2000)
        }
    }

    return Template;
})