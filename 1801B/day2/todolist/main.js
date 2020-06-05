


// 引入模块
require(["js/todolist"], function (T) {
    new T({
        ipt: document.querySelector(".user-ipt"),
        ulHeader: document.querySelector(".ul-header"),
        ulFooter: document.querySelector(".ul-footer"),
        spanHeader: document.querySelector(".span-header"),
        spanFooter: document.querySelector(".span-footer"),
        box: document.querySelector(".box"),
    })

})