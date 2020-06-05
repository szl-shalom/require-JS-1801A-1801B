define(["V"], function (V) {
    function D(opt) {
        Object.assign(this, opt)
        this.init()
    }

    D.prototype = {
        constructor: D,
        init: function () {
            this.create();
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .3);
                position: fixed;
                left: 0;
                top: 0;
            `
            document.body.appendChild(this.mask)

            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = `
            <p>
                    <span>用户名:</span>
                    <input type="text" placeholder="请输入用户名">
                </p>
                <p>
                    <span>年龄:</span>
                    <input type="text" placeholder="请输入年龄">
                </p>
                <p>
                    <span>性别:</span>
                    <input type="text" placeholder="请输入性别">
                </p>
                <p>
                    <span>爱好:</span>
                    <input type="text" placeholder="请输入爱好">
                </p>
                <p>
                    <span>电话:</span>
                    <input type="text" placeholder="请输入电话">
                </p>
                <button>提交数据</button>
                <button>取消</button>
            `
            document.body.appendChild(this.content)
            V(this.mask, "fadeIn", 2000)
            V(this.content, {
                top: ["50%", "-50%"]
            }, 2000);
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this,
                ipts = this.content.querySelectorAll("input");
            btns[0].addEventListener("click", function () {
                if (ipts[0].value && ipts[1].value && ipts[2].value && ipts[3].value && ipts[4].value) {
                    that.tbody.innerHTML += `
                    <tr>
                         <td>${ipts[0].value}</td>
                         <td>${ipts[1].value}</td>
                         <td>${ipts[2].value}</td>
                         <td>${ipts[3].value}</td>
                         <td>${ipts[4].value}</td>
                     </tr>
                    `
                }

                V(that.mask, "fadeOut", {
                    duration: 2000,
                    complete: function () {
                        that.mask.remove()
                    }
                })
                V(that.content, "reverse", {
                    duration: 2000,
                    complete: function () {
                        that.content.remove()
                    }
                })
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()
            })
        }
    }

    return D;
})