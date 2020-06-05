define(["V"], function (V) {
    function Dialog(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create();//动态创建DOM结构
            this.bindEvent(); //绑定事件函数
        },
        create: function () {
            // 创建遮罩层
            this.mask = document.createElement("div");
            this.mask.classList.add("mask");
            document.body.appendChild(this.mask);
            // 创建内容盒子
            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.innerHTML = this.html;
            document.body.appendChild(this.content);
            // 添加动画
            V(this.content, "slideDown", 1000)
        },
        bindEvent: function () {
            var that = this,
                arr = [],
                spans = this.content.querySelectorAll(".header span");
            this.content.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.className === "del") {
                    V(that.content, "slideUp", {
                        complete: function () {
                            that.mask.remove();
                            that.content.remove();
                        }
                    })
                }

                if (tar.nodeName === "LI") {
                    if (isNaN(tar.innerHTML)) {
                        // 点击的X号
                        arr.pop();//删除尾部元素
                        spans[arr.length].innerHTML = "";
                    } else {
                        // 点击的数字
                        arr.push(tar.innerHTML);
                        arr.forEach(function (item, index) {
                            spans[index].innerHTML = item;
                        })

                        if (arr.length >= 6) {
                            var num = +arr.map(function (item) {
                                return item
                            }).join("")
                            alert(num === that.keyword ? "密码正确" : "密码错误")
                        }
                    }
                }
            })
        }
    }

    return Dialog;
})