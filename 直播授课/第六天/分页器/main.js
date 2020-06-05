require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        p: "page",
    }
})


require(["d", "$", "p"], function (data, $, Page) {
    new Page({
        data: data,
        index: 23,// 下标为 0  代表获取第一页的数据
        sel: $.get(".sel"), //下拉节点  对应每页显示几条数据
        tbody: $.get("tbody"), //渲染的节点
        page: $.get(".page"),
        bottom: $.get(".bottom"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        first: $.get(".first"),
        end: $.get(".end"),
        search: $.get(".search"),
        go: $.get(".go")
    })
})