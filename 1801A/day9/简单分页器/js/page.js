define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init();

    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change()
            //添加事件
            this.bindEvent()
        },
        render: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.ID}</td>
                    <td>${item.name}</td>
                    <td>${item.sex}</td>
                </tr>
                `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            if (this.index <= 2) {
                for (var i = 1; i <= 7; i++) {
                    str += `
                    <li class="${this.index + 1 === i ? "active" : ""}">${i}</li>
                `
                }
            }
            // for (var i = 1; i <= this.maxLength; i++) {
            //     str += `
            //         <li class="${this.index + 1 === i ? "active" : ""}">${i}</li>
            //     `
            // }
            this.page.innerHTML = str;
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1 //修改下标
                    that.change()
                }
            })
        },
        change: function () {
            // data.slice(num * index, num*index+num)
            // 获取对应数据
            var data = this.data.slice(this.num * this.index, (this.index + 1) * this.num)
            // 渲染数据
            this.render(data);
            // maxlength =  Math.ceil(data.length / num)
            // 获取最大页码
            this.maxLength = Math.ceil(this.data.length / this.num)
            // 渲染页码
            this.renderPage()
        }
    }

    return Page;
})