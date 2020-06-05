require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        s: "sel",
        V: "../lib/velocity.min"
    }
})

require(["d", "$", "s"], function (data, $, Sel) {
    new Sel({
        data:data,
        list:$.get(".list"),
        icon:$.get(".icon")
    })
})