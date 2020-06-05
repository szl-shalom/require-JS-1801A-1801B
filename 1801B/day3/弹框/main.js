// 配置模块
require.config({
    paths: { // 起别名
        a: "dialog",
        V: "../lib/velocity.min"
    },
    baseUrl: "js", //基址路径



    // shim: { //配置非AMD规范的模块
    //     jquery: {
    //         deps: ["依赖"],  // 配置依赖
    //         exports: "$", //抛出的接口
    //     }
    // }
})

// 加载模块
require(["a"], function (D) {
    var btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        new D({
            title: "明天周考能赢吗？", //标题可配置
            okValue: "yes",//按钮可配置
            noValue: "no",//按钮可配置
            okclick: function () {// 点击每个按钮触发的事件是可配置的
                console.log("你点击了确定")
            },
            noclick: function () {// 点击每个按钮触发的事件是可配置的
                console.log("你点击了取消")
            }
        })
    })
})