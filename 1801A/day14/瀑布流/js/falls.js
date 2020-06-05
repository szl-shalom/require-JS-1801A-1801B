define(function () {
    function Falls(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Falls.prototype = {
        constructor: Falls,
        init: function () {
            this.setStyle();
            this.bindEvent();
        },
        setStyle: function () {
            // console.log(this.wrap.firstElementChild )
            var arr = [], //放横向5张图片高度
                w = this.wrap.firstElementChild.offsetWidth, //每一张图片的宽度
                len = Math.floor(this.wrap.offsetWidth / w); //一排显示几张图
            [...this.wrap.children].forEach(function (item, index) {
                if (index < len) {
                    // 第一排
                    item.style.top = 0; //第一排每一项top = 0;
                    item.style.left = index * (w + 20) + "px";
                    arr.push(item.offsetHeight)
                } else {
                    // 非第一排
                    var min = Math.min.apply(null, arr); //找到数组的最小值
                    var ind = arr.indexOf(min) //获取最小值下标
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
                if (c < a + b) {
                    var str = ""
                    for (var i = 1; i <= 10; i++) {
                        str += `<div class="con"><img src="./img/${i}.jpg" alt=""></div>`
                    }
                    that.wrap.innerHTML += str;
                    that.setStyle()
                }
            }
        }
    }

    return Falls;
})

// document.body.