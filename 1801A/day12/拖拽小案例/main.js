require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "drag",
        V: "../lib/a"
    }
})

require(["$", "d"], function ($, Drag) {
    new Drag({
        right: $.get(".right"),
        list: $.get(".list"),
    })
})