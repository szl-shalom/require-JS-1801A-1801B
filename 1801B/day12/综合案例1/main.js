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
    // tab
    new Tab({
        title: $.get(".header")
    })
    // Sel
    new Sel({
        data: data.SelData,
        userSearch: $.get(".user-search"),
        list: $.get(".list")
    })

    //轮播
    new Swiper({
        index: 0,
        container: $.get(".container"),
        page: $.get(".page")
    })
    // 大风车
    new Back({
        icon: $.get(".icon"),
    })
})