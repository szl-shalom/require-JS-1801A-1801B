define(["V"], function (V) {
    function Mes(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Mes.prototype = {
        constructor: Mes,
        init: function () {
            var that = this;
            this.data.forEach(function (item) {
                that.create(item.con, item.count)
            })
            this.bindEvent();

        },
        create: function (con, num) {
            var that = this;
            this.span = document.createElement("span");
            this.span.innerHTML = `
                ${con}<i style="color:red;font-size:36px;">☞</i><b>${num}</b>
            `
            this.left.appendChild(this.span)
            // 设置位置
            this.setPos();

            var p = document.createElement("p");
            p.innerHTML = con;
            this.middle.appendChild(p)
            V(p, "scroll", { container: that.middle }) //控制滚动条滚动
        },
        setPos: function () {
            var maxTop = this.left.offsetHeight - this.span.offsetHeight;
            this.span.style.position = "absolute";
            this.span.style.left = "100%";
            this.span.style.color = "#" + Math.random().toString(16).substr(2, 6);
            this.span.style.top = this.random(0, maxTop) + "px"
            // 运动
            this.run()
        },
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        run: function () {
            var that = this;
            var span = this.span;
            V(this.span, {
                left: -that.span.offsetWidth
            }, {
                duration: that.random(1000, 3000),
                complete: function () {
                    span.remove()
                }
            })

            this.span.onmouseenter = function () {
                V(this, "pause")
            }

            this.span.onmouseleave = function () {
                V(this, "resume")
            }
        },
        bindEvent: function () {
            var that = this;
            this.btn.onclick = function () {
                that.create(that.ipt.value, 1)
            }
            document.onkeydown = function (e) {
                if (e.keyCode === 13) {
                    that.btn.onclick()
                }
            }

            this.left.onclick = function (e) {
                var tar = e.target;
                if (tar.nodeName === "I") {
                    tar.nextElementSibling.innerHTML++
                }
            }
        }
    }

    return Mes;
})