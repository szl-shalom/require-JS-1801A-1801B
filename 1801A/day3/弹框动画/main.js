// 配置
require.config({
    baseUrl: "js",
    paths: {
        d: "add-dialog",
        V: "../lib/velocity.min",
        $: "dom"
    }
})

require(["d", "V", "$"], function (D, V, $) {

    var btn = $("button");
    btn.addEventListener("click", function () {
        new D({
            tbody: $("tbody")
        })
    })
})