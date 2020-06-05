define(["V"], function (V) {
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
            var offsetTop = this.nav.offsetTop, that = this,
                arrs = [...this.floor.children].map(function (item) {
                    return item.offsetTop;
                })
            // 滚动条滚动事件
            document.addEventListener("scroll", function () {
                // 获取滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
                // 是否吸顶
                if (scrollTop >= offsetTop) {
                    that.nav.classList.add("fixed");
                    that.nav.nextElementSibling.style.marginTop = that.nav.offsetHeight + "px";
                } else {
                    that.nav.classList.remove("fixed")
                    that.nav.nextElementSibling.style.marginTop = 0
                }
                // 是否显示左侧导航栏
                that.leftFloor.parentNode.style.display = scrollTop > that.maxTop ? "block" : "none"
                // 滚动切换高亮
                arrs.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        var el = that.leftFloor.querySelector(".active");
                        el && el.classList.remove("active");
                        that.leftFloor.children[index].classList.add("active");
                    }
                })
            });
            // 左侧导航条点击事件
            [...this.leftFloor.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    // document.documentElement.scrollTop = arrs[index]
                    V(that.floor.children[index], "scroll")
                })
            })
        }


    }

    return Template;
})