define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructorL: Template,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    var el = that.title.querySelector("." + that.className);
                    el && el.classList.remove(that.className)
                    item.classList.add(that.className);

                    var el = that.content.querySelector("." + that.className);
                    el && el.classList.remove(that.className)
                    that.content.children[index].classList.add(that.className)
                })
            })
        }
    }

    return Template;
})