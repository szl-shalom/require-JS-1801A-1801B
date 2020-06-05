require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        p: "page",
        $: "dom"
    }
})


require(["d", "p", "$"], function (data, Page, $) {
    new Page({
        data: data,
        num: 6,//每页显示几条数据
        index: 2, //当前下标
        tbody: $.get("tbody"),
        page: $.get(".page"),
    })
})