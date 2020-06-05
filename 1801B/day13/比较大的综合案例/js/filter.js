define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.render(this.data);//默认渲染大数据
            this.bindEvent(); //绑定事件
        },
        render: function (data) {
            this.list.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dt>
                        <img src=${item.url} alt="">
                    </dt>
                    <dd>
                        <p>
                            <span>￥${item.price}</span>
                            <s>￥${item.oldPrice}</s>
                        </p>
                        <p>
                           ${item.title}
                           销售量：${item.count}
                           是否有货：${item.isExit ? "有" : "无"}
                        </p>
                    </dd>
                </dl>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.sort.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // 高亮切换
                    var el = that.sort.querySelector(".active")
                    el && el.classList.remove("active")
                    tar.classList.add("active")
                    // 数据排序
                    var data = []
                    if (tar.innerHTML === "价格") {
                        tar.classList.toggle("qwe")
                        // 价格
                        data = that.data.slice().sort(function (a, b) {
                            return tar.classList.contains("qwe") ? a.price - b.price : b.price - a.price
                        })

                    } else if (tar.innerHTML === "销量") {
                        tar.classList.toggle("qwe")
                        // 销量
                        data = that.data.slice().sort(function (a, b) {
                            return tar.classList.contains("qwe") ? a.count - b.count : b.count - a.count
                        })
                    } else {
                        // 默认
                        data = that.data
                    }
                    that.render(data)


                }
            })
        }
    }
    return Template;

})