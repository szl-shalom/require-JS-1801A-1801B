define(function () {
    function Falls(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Falls.prototype = {
        constructor: Falls,
        init: function () {
            this.setStyle();//设置样式
            this.bindEvent()
        },
        setStyle: function () {
            var arr = [],
                w = this.wrap.firstElementChild.offsetWidth,
                len = Math.floor(this.wrap.offsetWidth / w);
            [...this.wrap.children].forEach(function (item, index) {
                if (index < len) {
                    // 匹配第一排
                    item.style.top = 0;
                    item.style.left = index * (w + 20) + "px";
                    arr.push(item.offsetHeight)
                    // console.log(arr)
                } else {
                    // 匹配非第一排
                    var min = Math.min.apply(null, arr) //获取最小是
                    var ind = arr.indexOf(min) //最小值下标
                    item.style.left = ind * (w + 20) + "px";
                    item.style.top = min + "px";
                    arr[ind] = min + item.offsetHeight;
                }
            })
        },
        bindEvent: function () {
            var that = this;
            document.onscroll = function () {
                var a = document.documentElement.scrollTop;
                var b = document.documentElement.clientHeight;
                var c = that.wrap.lastElementChild.offsetTop;
                if (a + b > c) {
                    var str = ``;
                    for (var i = 1; i <= 15; i++) {
                        str += `<div class="con"><img src="img/${Math.floor(Math.random() * 15) + 1}.jpg" alt=""></div>`
                    }
                    that.wrap.innerHTML += str;
                    that.setStyle()
                }
            }
        }
    }

    return Falls;
})