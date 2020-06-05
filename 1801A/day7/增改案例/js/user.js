define(function () {
    function User(opt) {
        Object.assign(this, opt);
        this.init();
    }

    User.prototype = {
        constructor: User,
        init: function () {
            this.create();
            this.bindEvent();
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.className = "mask";
            document.body.appendChild(this.mask);
            this.content = document.createElement("div");
            this.content.className = "content";
            this.content.innerHTML = this.html; //赋值内容
            document.body.appendChild(this.content)
        },
        bindEvent: function () {
            var btns = this.content.querySelectorAll("button"),
                that = this,
                qqs = [...this.content.querySelectorAll(".qq")];
            console.log(qqs)
            btns[0].addEventListener("click", function () {

                that.okclick(qqs.map(function (item) {
                    return item.value
                }))
                that.remove()
            });
            btns[1].addEventListener("click", function () {
                that.remove()
            })

        },
        remove: function () {
            this.mask.remove();
            this.content.remove();
        }
    }

    return User;
})