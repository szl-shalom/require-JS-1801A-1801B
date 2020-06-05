define(function () {
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
            var offsetTop = this.nav.offsetTop, that = this;
            document.addEventListener("scroll", function () {
                // 滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop;
                if (scrollTop >= offsetTop) {
                    that.nav.classList.add("fixed");
                    that.nav.nextElementSibling.style.marginTop = that.nav.offsetHeight + "px";
                } else {
                    that.nav.classList.remove("fixed")
                    that.nav.nextElementSibling.style.marginTop = 0;

                }
            })
        }
    }
    return Template;
})