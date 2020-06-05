require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        n: "nav-bar",
        s: "swiper",
        t: "tab",
        f: "floor",
        V: "../lib/a"
    }
})

require(["d", "$", "n", "s", "t", "f"], function (data, $, NavBar, Swiper, Tab, Floor) {
    // 二级导航菜单  
    new NavBar({
        box: $.get(".nav-bar"),
        ul: $.get(".nav-bar>ul"),
        con: $.get(".nav-content"),
        data: data.navBarData,
    })
    // 调用轮播
    new Swiper({
        data: data.bannerData,
        banner: $.get(".banner"),
        index: 0,
    })
    // 渲染数据tab切换数据
    $.get(".title").innerHTML = data.tabData.map(function (item) {
        return `
            <span>${item.title}</span>
        `
    }).join("")

    $.get(".content").innerHTML = data.tabData.map(function (item) {

        return `
        <div class="con">
            <div class="title-header">
                ${item.children.map(function (item) {
            return `
                        <span>${item.title}</span>
                    `
        }).join("")}
            </div>
            <div class="content-con">
                ${item.children.map(function (item) {
            return `
                    <div class="con">${item.con}</div>
                    `
        }).join("")}

            </div>
        </div>
        `
    }).join("")
    // 调用tab切换
    new Tab({
        title: $.get(".title"),
        className: "active",
        content: $.get(".content")
    })
    var arr = [...$.gets(".content .title-header")]
    arr.forEach(function (item) {
        new Tab({
            title: item,
            className: "active1",
            content: item.nextElementSibling,
        })
    })
    // 楼层
    new Floor({
        nav: $.get(".nav-bar"),
        floor: $.get(".floor>ul"),
        leftFloor: $.get(".left-floor>ul"),
        maxTop: 700
    })
})