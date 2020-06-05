define(function () {
    function Tab(opt) {
        Object.assign(this, {
            type:"click",
            className:"active"
        }, opt)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var that = this;
            [...this.title.children].forEach(function (item, index) {
                item.addEventListener(that.type, function () {
                    that.title.querySelector(`.${that.className}`) && that.title.querySelector("." + that.className).classList.remove(that.className)
                    item.classList.add(that.className)


                    that.content.querySelector(`.${that.className}`) && that.content.querySelector("." + that.className).classList.remove(that.className)
                    that.content.children[index].classList.add(that.className)
                })
            })
        }
    }

    return Tab;
})