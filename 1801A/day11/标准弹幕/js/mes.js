define(["V"], function (V) {
    function Mes(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Mes.prototype = {
        constructor: Mes,
        init: function () {
            var that = this;
            // 渲染数据
            this.data.forEach(function (item) {
                that.create(item.con)
            })
            this.bindEvent();
        },
        create: function (con) {
            // 左侧内容
            var span = document.createElement("span");
            span.innerHTML = `
               ${con}<i>☝</i><b>1</b>
            `
            this.left.appendChild(span)
            span.style = `
                position:absolute;
                left:100%;
                color:#${Math.random().toString(16).substr(2, 6)};
            `
            this.setPos(span) //设置上下位置
            // 右侧内容
            var p = document.createElement("p");
            p.innerHTML = con
            this.content.appendChild(p)


            // 调用运动函数
            this.run(span, p)
        },
        random: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        run: function (span, p) {
            var that = this;
            // 左侧运动
            V(span, {
                left: -span.offsetWidth
            }, {
                duration: that.random(1500, 3000)
            })
            // 右侧
            V(p, "scroll", { container: that.content })
        },
        bindEvent: function () {
            var that = this;
            this.btn.onclick = function () {
                that.create(that.ipt.value)
            }
            document.onkeydown = function (e) {
                if (e.keyCode === 13) {
                    that.btn.onclick()
                }
            }
        },
        setPos: function (span) {
            var res = this.header.querySelector("input:checked")
            var index = +res.getAttribute("ind")
            if (index === 0) {
                span.style.top = `${this.random(0, this.left.offsetHeight - span.offsetHeight)}px`;
            } else {
                span.style.top = this.random(
                    (index - 1) / 3 * this.left.offsetHeight - span.offsetHeight,
                    index / 3 * this.left.offsetHeight - span.offsetHeight
                ) + "px"
            }
        }
    }

    return Mes;
})