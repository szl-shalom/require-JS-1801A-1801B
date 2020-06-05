define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            this.tbody.innerHTML = this.data.map(function (item) {
                return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.hobby}</td>
                    <td>${item.sex}</td>
                    <td>${item.tel}</td>
                    <td>
                        <button>删除</button>
                    </td>
                </tr>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.tbody.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "BUTTON") {
                    that.create()
                    var btns = that.content.querySelectorAll("button");
                    btns[0].addEventListener("click", function () {
                        tar.parentNode.parentNode.remove()
                        that.mask.remove()
                        that.content.remove()
                    })

                    btns[1].addEventListener("click", function () {
                        that.mask.remove()
                        that.content.remove()
                    })
                }
            })


        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
                position:fixed;
                left:0;
                top:0;
            `
            document.body.appendChild(this.mask);
            V(this.mask,"slideDown")
            this.content = document.createElement("div");
            this.content.style = `
                position:fixed;
                left:-50%;
                top:50%;
                transform:translate(-50%,-50%);
                padding:20px;
                background:#fff;
            `
            this.content.innerHTML = `
                <h2>确定要删除吗？</h2>
                <button>确定</button>
                <button>取消</button>
            `
            document.body.appendChild(this.content)
            V(this.content,{
                left:"50%"
            })
        }

    }


    return Sel;
})