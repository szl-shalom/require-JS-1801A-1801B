define(["V"], function (V) {
    function Drag(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Drag.prototype = {
        constructor: Drag,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this,
                flag = false,//开关变量
                pos = null, //保存鼠标按下距离元素的上下边距
                cloneEl = null,//克隆元素
                elPos = null;//记录初始位置
            // 鼠标按下
            this.right.addEventListener("mousedown", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    cloneEl = tar.cloneNode(true);//克隆元素
                    // 设置克隆元素样式
                    cloneEl.style.position = "absolute";
                    // 获取元素getBoundingClientRect()
                    var obj = tar.getBoundingClientRect()
                    cloneEl.style.left = obj.left + "px"
                    cloneEl.style.top = obj.top + "px";
                    cloneEl.style.border = "1px solid red";
                    // 添加页面
                    document.body.appendChild(cloneEl);
                    // 开启开关变量
                    flag = true;
                    //保存鼠标按下距离元素的上下边距
                    pos = {
                        x: e.offsetX,
                        y: e.offsetY
                    }
                    //记录初始位置
                    elPos = {
                        x: obj.left,
                        y: obj.top
                    }
                }
            })
            //  鼠标移动
            document.addEventListener("mousemove", function (e) {
                if (flag) {
                    cloneEl.style.left = e.pageX - pos.x + "px"
                    cloneEl.style.top = e.pageY - pos.y + "px";
                }
            })
            //  鼠标抬起
            document.addEventListener("mouseup", function (e) {
                if (flag) {
                    // 获取list位置
                    var obj = that.list.getBoundingClientRect();
                    // 是否进入目标区域
                    if (e.pageX > obj.left && e.pageX < obj.right && e.pageY > obj.top && e.pageY < obj.bottom) {
                        // 进入list区域
                        [...that.list.children].forEach(function (item) {
                            var o = item.getBoundingClientRect();
                            // 进入小区域内
                            if (e.pageX > o.left && e.pageX < o.right && e.pageY > o.top && e.pageY < o.bottom) {
                                // 说明子元素个数少于4个
                                if (item.children.length < 4) {
                                    // 去重
                                    var res = [...item.children].find(function (item) {
                                        return item.innerHTML.includes(cloneEl.innerHTML)
                                    })
                                    if (res) {
                                        alert("不可以重复配菜")
                                        remove()
                                    } else {
                                        cloneEl.style.position = "";
                                        item.appendChild(cloneEl);
                                    }

                                } else {
                                    alert("最多添加4个配菜")
                                    remove();//删除动画函数
                                }

                            }
                        })
                    } else {
                        remove() //删除动画函数
                    }
                    // 关掉开关变量
                    flag = false;
                }
            })


            function remove() {
                V(cloneEl, {
                    left: elPos.x,
                    top: elPos.y,
                }, {
                    complete: function () {
                        cloneEl.remove()
                    },
                    duration: 400,
                })
            }

        }
    }

    return Drag;
})
