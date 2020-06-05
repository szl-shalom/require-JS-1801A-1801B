define(function () {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }

    Car.prototype = {
        constructor: Car,
        init: function () {
            this.bindEvent(); //绑定事件
        },
        bindEvent: function () {
            var that = this;
            // 事件委托
            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                switch (tar.className) {
                    case "red":
                        if (tar.nextElementSibling.innerHTML <= 1) {
                            return;
                        }
                        tar.nextElementSibling.innerHTML--;
                        tar.parentNode.parentNode.children[4].innerHTML = tar.parentNode.parentNode.children[2].innerHTML * tar.nextElementSibling.innerHTML
                        break
                    case "add":
                        // 数量变化
                        tar.previousElementSibling.innerHTML++
                        // 通过关系查找
                        tar.parentNode.parentNode.children[4].innerHTML = tar.parentNode.parentNode.children[2].innerHTML * tar.previousElementSibling.innerHTML
                        break
                    case "del":
                        tar.parentNode.parentNode.remove();//删除
                        break
                    case "checkOne":
                        console.log("点击了复选框！！");
                        break
                }
                // 计算总价
                that.computeAllPrice()
            })
        },
        computeAllPrice: function () {
            var price = 0, ipts = [...this.box.querySelectorAll("input:checked")];
            ipts.forEach(function (item) {
                price += + item.parentNode.parentNode.children[4].innerHTML
            })
            this.allPrice.innerHTML = `商品总价：${price}元`
        }
    }

    return Car;
})