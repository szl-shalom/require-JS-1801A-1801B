define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init()
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            this.render(this.data); //默认渲染大数据
            this.bindEvent();//绑定事件
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
                            <span>￥${item.oldPrice}</span>
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
                    // 切换高亮
                    var el = that.sort.querySelector(".active")
                    el && el.classList.remove("active")
                    tar.classList.add("active")
                }
                // 排序
                tar.classList.toggle("qwe")  // 模拟开关变量
                var type = tar.getAttribute("type"); //获取自定义属性
                var data = that.data.slice().sort(function (a, b) { //排序
                    //   是否存在qwe类名  存在就升序  不存在就降序
                    //  a[type] 获取定义的数据字段名称  因为属性的自定义属性值和数据的自定属性值是一样的!!!
                    return tar.classList.contains("qwe") ? a[type] - b[type] : b[type] - a[type];
                });
                // 是否有货
                if (that.isExit.checked) {
                    data = data.filter(function (item) {
                        return item.isExit
                    })
                }
                console.log(data)
                that.render(data)
            })
        }
    }
    return Template;
})