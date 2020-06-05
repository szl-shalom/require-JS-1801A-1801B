define(function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();
            this.bindEvent();

        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.classList.add("mask");
            document.body.appendChild(this.mask);
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.html;
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                b = this.content.querySelector("b"),
                that = this,
                qqs = [...this.content.querySelectorAll(".qq")];


            btns[0].addEventListener("click", function () {
                that.okclick(qqs.map(function (item) {
                    return item.value
                }))
                that.remove();
            })

            btns[1].addEventListener("click", function () {
                that.remove();
            })

            b.addEventListener("click", function () {
                that.remove();
            })


        },
        remove: function () {
            this.mask.remove();
            this.content.remove()
        }
    }

    return Dialog;
})