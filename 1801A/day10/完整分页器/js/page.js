define(function () {
    function Page(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }


    Page.prototype = {
        constructor: Page,
        init: function () {
            this.change();
            this.bindEvent()
        },
        render: function (data) {
            this.tbody.innerHTML = data.map(function (item) {
                return `
                <tr>
                    <td>${item.ID}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                </tr>
            `
            }).join("")
        },
        renderPage: function () {
            var str = "";
            if (this.index <= 2) {
                for (var i = 1; i <= 7; i++) {
                    str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
                }
            } else if (this.index >= this.maxLength - 3) {
                for (var i = this.maxLength - 6; i <= this.maxLength; i++) {
                    str += `<li class=${this.index + 1 === i ? "active" : ""}>${i}</li>`
                }
            } else {
                str += `
                    <li>${this.index - 2}</li>
                    <li>${this.index - 1}</li>
                    <li>${this.index}</li>
                    <li class="active">${this.index + 1}</li>
                    <li>${this.index + 2}</li>
                    <li>${this.index + 3}</li>
                    <li>${this.index + 4}</li>
                `
            }
            this.page.innerHTML = str;
        },
        change: function () {
            // 获取对应数据
            var data = this.data.slice(this.index * this.num, (this.index + 1) * this.num)
            // 渲染数据
            this.render(data)
            // 获取分页器最大页码
            this.maxLength = Math.ceil(this.data.length / this.num);
            // 渲染分页器
            this.renderPage()
            // 禁用
            this.prev.disabled = this.index === 0;
            this.first.disabled = this.index === 0;
            this.next.disabled = this.index === this.maxLength - 1;
            this.last.disabled = this.index === this.maxLength - 1;
        },
        bindEvent: function () {
            var that = this;
            // 事件委托
            this.bottom.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "prev":
                        that.index--;
                        that.change()
                        break;
                    case "next":
                        that.index++;
                        that.change()
                        break;
                    case "first":
                        that.index = 0;
                        that.change()
                        break;
                    case "last":
                        that.index = that.maxLength - 1;
                        that.change()
                        break;
                    case "go":
                        if (that.code.value >= 1 && that.code.value <= that.maxLength) {
                            that.index = that.code.value - 1;
                            that.change();
                        } else {
                            alert("页码不存在！！！")
                        }

                        break;

                }
            })
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.index = tar.innerHTML - 1;
                    that.change()
                }
            })
            // 改变事件
            this.sel.addEventListener("change", function () {
                that.num = +this.value;
                that.index = 0;
                that.change()
            })
        }
    }

    return Page;
})