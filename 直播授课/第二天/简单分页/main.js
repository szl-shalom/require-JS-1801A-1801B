require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "data",
        p: "page",

    }
})


require(["$", "d", "p"], function ($, data, Page) {
    new Page({
        content: $.get(".content"),
        page: $.get(".page"),
        data: data,
        num: 12, //每页显示的数据个数
        index: 2,//当前下标
    })
})