define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            console.log(this)
            this.create()
            this.bindEvent()

        },
        create: function () {
            this.mask = document.createElement("div");//创建元素
            this.mask.style = `
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
            `//设置样式

            this.content = document.createElement("div");
            this.content.style = `
                position:fixed;
                left:50%;
                top:50%;
                transform:translate(-50%,-50%);
                padding:20px;
                background:#fff;`
            this.content.innerHTML = `
                <input type="text" value=${this.tar.parentNode.parentNode.children[1].innerHTML}>
                <input type="text" value=${this.tar.parentNode.parentNode.children[2].innerHTML}>
                <input type="date" value=${this.tar.parentNode.parentNode.children[3].innerHTML}>
                <button>修改</button>
                <button>取消</button>
            `
            document.body.appendChild(this.mask) //添加到body
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this,
                inputs = this.content.querySelectorAll("input");
               
            btns[0].addEventListener("click", function () {
                that.tar.parentNode.parentNode.children[1].innerHTML = inputs[0].value
                that.tar.parentNode.parentNode.children[2].innerHTML = inputs[1].value
                that.tar.parentNode.parentNode.children[3].innerHTML = inputs[2].value

                that.mask.remove()
                that.content.remove()
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove()
                that.content.remove()
            })
        }
    }

    return Dialog;
})