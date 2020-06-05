// 配置require
require.config({
    paths: { //起别名
        a: "dialog"
    },
    baseUrl: "js",// 配置基址地址


    // 配置不符合AMD规范的模块
    shim: {
        jquery: {
            deps: ["依赖"], // 配置依赖
            exports: $ //抛出的接口
        }
    }
})



// 加载模块

require(["a"], function (D) {
    var btns = document.querySelectorAll("button");

    btns[0].addEventListener("click", function () {
        new D({
            title: "你点击了第一个button！！！",
            background: "red",
            color: "pink"
        })
    })

})