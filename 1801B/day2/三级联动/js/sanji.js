define(function () {
    function Sanji(opt) {
        Object.assign(this, opt)
        this.init()
    }


    Sanji.prototype = {
        constructor: Sanji,
        init: function () {
            this.render(this.province, this.data);
            this.bindEvent()
        },
        render: function (el, data) {
            el.innerHTML = data.map(function (item) {
                return `
                    <option value="">${item.name}</option>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.province.addEventListener("change", function () {
                that.indexPro = this.selectedIndex
                var data = that.data[that.indexPro].children;
                that.render(that.city, data);
            })

            this.city.addEventListener("change", function () {
                var index = this.selectedIndex
                var data = that.data[that.indexPro].children[index].children;
                that.render(that.area, data);
            })
        }

    }

    return Sanji;
})