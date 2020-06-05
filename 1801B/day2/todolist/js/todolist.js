// 定义模块
define([], function () {
    function ToDoList(opt) {
        Object.assign(this, opt)
        this.init()
    }

    ToDoList.prototype = {
        constructor: ToDoList,
        init: function () {
            // 执行事件函数
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            // 回车
            this.ipt.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    that.ulHeader.innerHTML += `
                    <li>
                        <input type="checkbox">
                        <span>${this.value}</span>
                        <b>X</b>
                    </li>
                    `
                }
                that.computeNum()
            })
            // 事件委托
            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "B") {
                    tar.parentNode.remove()
                }
                if (tar.nodeName === "INPUT") {
                    tar.checked ? that.ulFooter.appendChild(tar.parentNode) : that.ulHeader.appendChild(tar.parentNode)
                }
                that.computeNum()
            })

            // this.ulFooter.addEventListener("click", function (e) {
            //     var tar = e.target;
            //     if (tar.nodeName === "B") {
            //         tar.parentNode.remove()
            //     }
            //     if (tar.nodeName === "INPUT") {
            //         that.ulHeader.appendChild(tar.parentNode)
            //     }
            //     that.computeNum()
            // })
        },
        computeNum: function () {
            this.spanHeader.innerHTML = this.ulHeader.children.length;
            this.spanFooter.innerHTML = this.ulFooter.children.length;
        }
    }


    return ToDoList;//抛出模块
})