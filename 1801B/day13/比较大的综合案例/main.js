require.config({
    baseUrl: "js",
    paths: {
        a: "alert",
        d: "data",
        $: "dom",
        f: "filter",
        n: "nav",
        t: "timer",
        V: "../lib/a"
    }
})

require(["a", "d", "$", "f", "n", "t"], function (Alert, data, $, Filter, Nav, Timer) {
    // 倒计时
    new Timer({
        furTimer: new Date(2020, 0, 13, 11, 30, 00),
        timer: $.get(".timer"),
    })
    // 吸顶
    new Nav({
        nav: $.get(".nav")
    })
    // 数据筛选
    // console.log(data)
    new Filter({
        data: data,
        list: $.get(".list"),
        sort: $.get(".sort")
    })
    // 添加右边栏动画
    new Alert({
        ul:$.get(".right-slide ul")
    })
})