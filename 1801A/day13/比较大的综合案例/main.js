require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        dialog: "dialog",
        $: "dom",
        f: "filter",
        n: "nav",
        t: "timer",
        V: "../lib/a"
    }
})

require(["d", "dialog", "$", "f", "n", "t"], function (data, Dialog, $, Filter, Nav, Timer) {
    // 倒计时
    new Timer({
        timer: $.get(".timer"),
        furTimer: +new Date(2020, 0, 13, 11, 30, 00),
    })
    // 吸顶
    new Nav({
        nav: $.get(".nav"),
    })
    // 数据筛选
    new Filter({
        data: data,
        list: $.get(".list"),
        sort: $.get(".sort"),
        isExit: $.get(".isExit")
    });
    // 右侧边栏 动画
    // [...$.get(".right-slide ul").children].addEventListener("mouseenter",function(){})
    new Dialog({
        ul: $.get(".right-slide ul")
    })

})