define(function () {
    function Exp(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Exp.prototype = {
        constructor: Exp,
        init: function () {
            // 执行事件函数
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            // 添加按钮点击事件
            this.add.addEventListener("click", function () {
                that.tbody.innerHTML += `
                <tr>
                    <td>
                        0
                    </td>
                    <td>
                       ${that.username.value}
                    </td>
                    <td>
                       ${that.level.value}
                    </td>
                    <td>
                        <button class="mod">编辑</button>
                        <button class="del">删除</button>
                    </td>
                </tr>
                `
                that.noSort(); //排序
            })

            // 事件委托  点击事件
            this.tbody.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "del":
                        tar.parentNode.parentNode.remove();//删掉我的父元素的父元素
                        that.noSort();//排序
                        break;
                    case "mod":
                        var el = tar.parentNode.previousElementSibling, el1 = tar.parentNode.previousElementSibling.previousElementSibling;
                        el.innerHTML = `<input type="text" value=${el.innerHTML}>`;
                        el1.innerHTML = `<input type="text" value=${el1.innerHTML}>`;
                        tar.innerHTML = "保存";
                        tar.className = "save";
                        break;
                    case "save":
                        var el = tar.parentNode.previousElementSibling, el1 = tar.parentNode.previousElementSibling.previousElementSibling;
                        el.innerHTML = el.children[0].value;
                        el1.innerHTML = el1.children[0].value;
                        tar.innerHTML = "编辑";
                        tar.className = "mod";
                        break;
                }
            })
        },
        noSort: function () {
            [...this.tbody.children].forEach(function (item, index) {
                item.children[0].innerHTML = index + 1;
            })
        }

    }

    return Exp;
})