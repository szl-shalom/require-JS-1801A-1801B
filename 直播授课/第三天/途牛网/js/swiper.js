define(["V"], function (V) {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructorL: Template,
        init: function () {
            this.autoplay(); //自动轮播
            this.bindEvent();//绑定事件
        },
        autoplay: function () {
            var that = this;
            that.timer = setInterval(function () {
                that.index++;
                if (that.index >= 7) {
                    that.index = 0;
                }
                that.banner.style.backgroundImage = `url(${that.data[that.index]})`
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            this.banner.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })

            this.banner.addEventListener("mouseleave", function () {
                that.autoplay(); //自动轮播
            })

            this.addEventListener("click", function () {
                console.log(123123123)
                var tar = e.target;
                if (tar.nodeNmae === "LI") {
                    console.log9(2)
                }

            })

        }
    }

    return Template;
})