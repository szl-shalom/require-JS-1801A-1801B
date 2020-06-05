define(["V"], function (V) {
    function D(opt) {
        Object.assign(this, opt);
        this.init()
    }

    D.prototype = {
        constructor: D,
        init: function () {
            this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width:100%;
                height:100%;
                position:fixed;
                left:0;
                top:0;
                background:rgba(0,0,0,.3);
            `
            this.content = document.createElement("div");
            this.content.style = `
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                padding:20px;
                background:#fff;
            `;
            this.content.innerHTML = `
                <input type="text" value="${this.tar.parentNode.parentNode.children[1].innerHTML}">
                <input type="text" value="${this.tar.parentNode.parentNode.children[2].innerHTML}">
                <input type="date" value="${this.tar.parentNode.parentNode.children[3].innerHTML}">
                <button>修改</button>
                <button>取消</button>
            `


            document.body.appendChild(this.mask)
            document.body.appendChild(this.content)
            V(this.content, {
                top: ["50%", "-50%"],
                left: ["50%", "-50%"]
            }, {
                easing: "spring",
                duration: 1000,
            })
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this,
                ipts = this.content.querySelectorAll("input");

            btns[0].addEventListener("click", function () {

                that.tar.parentNode.parentNode.children[1].innerHTML = ipts[0].value
                that.tar.parentNode.parentNode.children[2].innerHTML = ipts[1].value
                that.tar.parentNode.parentNode.children[3].innerHTML = ipts[2].value

                that.mask.remove()
                that.content.remove()
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()
            })
        }
    }

    return D;
})