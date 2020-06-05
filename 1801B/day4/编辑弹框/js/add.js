define(function () {
    function A(opt) {
        Object.assign(this, opt)
        this.init()
    }

    A.prototype = {
        constructor: A,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            var that = this;
            this.btn.addEventListener("click", function () {
                if (that.inputs[0].value && that.inputs[1].value && that.inputs[2].value) {
                    that.tbody.innerHTML += ` <tr>
                        <td>${that.tbody.children.length + 1}</td>
                        <td>${that.inputs[0].value}</td>
                        <td>${that.inputs[1].value}</td>
                        <td>${that.inputs[2].value}</td>
                        <td>
                            <button>编辑</button>
                            <button>删除</button>
                        </td>
                    </tr>
                    `
                    that.inputs[0].value = ""
                    that.inputs[1].value = ""
                    that.inputs[2].value = ""

                } else {
                    alert("不可以为空！！")
                }




            })
        }
    }

    return A;
})