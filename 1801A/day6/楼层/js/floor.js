define(["../lib/a"], function (V) {
    function F(opt) {
        Object.assign(this, opt);
        this.init()
    }

    F.prototype = {
        constructor: F,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var arr = [...this.floor.children].map(function (item) {
                return item.offsetTop
            }), that = this;
            console.log(arr)
            document.addEventListener("scroll", function () {
                // 获取滚动条滚动的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop
                // 判断范围
                arr.forEach(function (item, index) {
                    if (scrollTop >= item) {
                        // tab切换
                        that.leftFloor.querySelector(".active") && that.leftFloor.querySelector(".active").classList.remove("active")
                        that.leftFloor.children[index].classList.add("active")
                    }
                })
            });
            [...that.leftFloor.children].forEach(function (item, index) {
                item.addEventListener("click", function () {
                    // document.documentElement.scrollTop = arr[index]
                    V(that.floor.children[index], "scroll", 5000)
                    // console.log(that.floor.children[index])
                })
            })
        }
    }
    return F;
})