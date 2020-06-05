define(function () {
    function Template(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            [...this.title.children].forEach(function (item) {
                item.onclick = function () {
                    that.title.querySelector(".active") && that.title.querySelector(".active").classList.remove("active")
                    item.classList.add("active");
                }
            })
        }
    }

    return Template

})