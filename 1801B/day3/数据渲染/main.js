// 配置
require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        s: "sel",
        V:"../lib/velocity.min"
    }
})


require(["d", "s"], function (data, S) {
    new S({
        data: data,
        tbody: document.querySelector("tbody"),
    })
})