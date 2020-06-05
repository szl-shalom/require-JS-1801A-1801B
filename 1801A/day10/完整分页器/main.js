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
        data: data,
        tbody: $.get("tbody"),
        num: 10, //每页显示的个数
        index: 15, //当前下标
        page: $.get(".page"),
        bottom: $.get(".bottom"),
        code: $.get(".code"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        first: $.get(".first"),
        last: $.get(".last"),
        sel:$.get(".sel")
    })
})