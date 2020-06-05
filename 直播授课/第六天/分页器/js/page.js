define(function () {
    function Page(opt) {
        Object.assign(this, {}, opt);
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change() //数据开始    
            this.bindEvent() //绑定事件
        },
        render: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.ID}</td>
                    <td>${item.module}</td>
                    <td>${item.info}</td>
                    <td>${item.time}</td>
                </tr>
                `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            if (this.index < 2) {
                for (var i = 1; i <= 5; i++) {
                    str += `<li class="${this.index + 1 === i ? "active" : ""}">${i}</li>`
                }
            } else if (this.index >= this.maxLen - 2) {
                for (var i = this.maxLen - 4; i <= this.maxLen; i++) {
                    str += `<li class="${this.index + 1 === i ? "active" : ""}">${i}</li>`
                }
            } else {
                str += `
                <li>${this.index - 1}</li>
                <li>${this.index}</li>
                <li class="active">${this.index + 1}</li>
                <li>${this.index + 2}</li>
                <li>${this.index + 3}</li>
                `
            }
            this.page.innerHTML = str;
        },
        change: function () {
            // 获取对应的数据
            var data = this.data.slice(this.index * this.sel.value, (this.index + 1) * this.sel.value);
            // 数据渲染
            this.render(data);
            // 获取最大的页码
            this.maxLen = Math.ceil(this.data.length / this.sel.value);
            console.log(this.maxLen)
            // 渲染页码
            this.renderPage();
            // 禁用
            this.prev.classList[this.index === 0 ? "add" : "remove"]("disable");
            this.first.classList[this.index === 0 ? "add" : "remove"]("disable");
            this.end.classList[this.index === this.maxLen - 1 ? "add" : "remove"]("disable");
            this.next.classList[this.index === this.maxLen - 1 ? "add" : "remove"]("disable");
        },
        bindEvent: function () {
            var that = this;
            // 点击页码  上一页 首页 等功能
            this.bottom.addEventListener("click", function (e) {
                var tar = e.target; //获取事件源
                // 点击的事页码
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1;
                    that.change() //改变
                } else {
                    // 点击的事 上一页  下一页 首页  尾页
                    switch (tar.className) {
                        case "first":
                            that.index = 0;
                            that.change();
                            break;
                        case "end":
                            that.index = that.maxLen - 1;
                            that.change();
                            break;
                        case "prev":
                            that.index--;
                            that.change();
                            break;
                        case "next":
                            that.index++;
                            that.change();
                            break;
                    }
                }
            })

            // 跳转
            this.go.addEventListener("click", function () {
                if (that.search.value >= 1 && that.search.value <= that.maxLen) {
                    that.index = that.search.value - 1;
                    that.change();
                } else {
                    alert("很遗憾，没有该页码，你去吃鸡吧！！！")
                }

            })

            // 每页显示个数改变
            this.sel.addEventListener("change", function () {
                that.change();
            })
        }
    }

    return Page;
})