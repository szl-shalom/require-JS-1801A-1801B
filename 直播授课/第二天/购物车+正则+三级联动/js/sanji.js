define(function () {
    function Sanji(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Sanji.prototype = {
        constructor: Sanji,
        init: function () {
            console.log(this.data)
            this.render(this.province, this.data, "请选择省")//渲染省
            this.bindEvent();//绑定事件
        },
        render: function (el, data, type) {
            el.innerHTML = `<option>${type}</option>` + data.map(function (item) {
                return `<option>${item.name}</option>`
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            //  省改变事件
            this.province.addEventListener("change", function () {
                that.i = this.selectedIndex - 1 //对应数据的下标
                that.render(that.city, that.data[that.i].children, "请选择市")
            })
            // 市改变事件
            this.city.addEventListener("change", function () {
                var ind = this.selectedIndex - 1;
                that.render(that.area, that.data[that.i].children[ind].children,"请选择区")
            })
        }
    }

    return Sanji;
})