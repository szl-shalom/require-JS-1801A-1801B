require.config({
    baseUrl: "js",
    paths: {
        b: "back",
        d: "data",
        $: "dom",
        s: "sel",
        swiper: "swiper",
        t: "tab",
        V: "../lib/a"
    }
})

require(["b", "d", "$", "s", "swiper", "t"], function (Back, data, $, Sel, Swiper, Tab) {
    // Tab切换
    new Tab({
        title: $.get(".header")
    })
    // 下拉列表
    new Sel({
        userSearch: $.get(".user-search"),
        list: $.get(".list"),
        data: data.selData
    })
    // 调用轮播
    new Swiper({
        container: $.get(".container"),
        page: $.get(".page"),
        index: 0,
    })
    // 转一转
    new Back({
        icon: $.get(".icon"),
        
    })
})