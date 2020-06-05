require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        p: "page"
    }
})


require(["d", "p"], function (data, Page) {
    new Page({
        data: data, //大数据s
        num: 10, //每页显示的个数
        index: 2,//当前分页下标
        tbody: document.querySelector("tbody"),
        page: document.querySelector(".page"),
    })
})