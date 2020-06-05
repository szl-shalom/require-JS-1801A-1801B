require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        p: "page"
    }
})


require(["d", "$", "p"], function (data, $, Page) {
    new Page({
        list: $.get(".list"),
        tbody: $.get("tbody"),
        data: data,
        num: 10,//每页显示几条数据
        index: 19,//当前下标
        page: $.get(".page"),
        code: $.get(".code"),
        prev: $.get(".prev"),
        first: $.get(".first"),
        last: $.get(".last"),
        next: $.get(".next"),
        sel: $.get(".sel")
    })
})