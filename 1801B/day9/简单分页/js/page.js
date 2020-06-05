define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change()
            this.bindEvent();
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
        renderPage() {
            // 获取分页器最大页码
            var maxLength = Math.ceil(this.data.length / this.num);
            var str = ""
            for (var i = 1; i <= maxLength; i++) {
                str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
            }
            this.page.innerHTML = str;
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1
                    that.change()
                }
            })
        },
        change: function () {
            //  获取对应数据
            var data = this.data.slice(this.num * this.index, this.num * this.index + this.num)
            // 渲染
            this.render(data)

            this.renderPage()
        }
    }

    return Page;
})