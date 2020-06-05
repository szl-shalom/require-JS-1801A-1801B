// 主入口文件   


// 配置
require.config({
    baseUrl: "js",//设置基址路径
    paths: {//配置路径 起别名
        $: "dom",
        s: "swiper",
        V: "../lib/a"
    }
})
// 引入其他文件
require(["$", "s"], function ($, Swiper) {
    new Swiper({
        container: $.get(".container"),
        wrap: $.get(".wrap"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        page: $.get(".page"),
        // index: 2,// 下标
    })


    document.addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.nodeName === "B") {
            var res1 = tar.previousElementSibling.innerHTML
            var res2 = tar.previousElementSibling.previousElementSibling.innerHTML
            location.href = `./detail.html?price=${res1}&movie=${res2}`
        }

    })
})