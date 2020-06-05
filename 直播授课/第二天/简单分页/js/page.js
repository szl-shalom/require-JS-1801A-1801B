define(function () {
    function Page(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Page.prototype = {
        constructor: Page,
        init: function () {
            // 调用change
            this.change()
            // 执行事件函数
            this.bindEvent();

        },
        render: function (data) {
            this.content.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dd>
                        <img src="${item.url}" alt="">
                    </dd>
                    <dt>
                        ${item.con}
                    </dt>
                </dl>
                    `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            for (var i = 1; i <= this.maxLen; i++) {
                str += `<li class="${this.index + 1 === i ? "active" : ""}">${i}</li>`
            }
            this.page.innerHTML = str;
        },
        bindEvent: function () {
            var that = this;
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1;
                    that.change()
                }
            })
        },
        change: function () {
            // 获取对应的数据
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num);
            // console.log(data)
            // 渲染数据
            this.render(data);
            // 计算页码的长度
            this.maxLen = Math.ceil(this.data.length / this.num);
            // 渲染页码
            this.renderPage()
        }
    }

    return Page;
})