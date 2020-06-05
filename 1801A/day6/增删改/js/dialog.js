define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
            this.bindEvent()
        },
        create: function () {
            this.mask = document.createElement("div")
            this.mask.className = "mask"
            document.body.appendChild(this.mask)
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.html;
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"), that = this,
                ipts = this.content.querySelectorAll("input");
            btns[0].addEventListener("click", function () {
                that.okclick(ipts[0].value, ipts[1].value, ipts[2].value)
                that.mask.remove();
                that.content.remove()
            })

            btns[1].addEventListener("click", function () {
                that.mask.remove();
                that.content.remove()
            })
        }
    }

    return Dialog;
})