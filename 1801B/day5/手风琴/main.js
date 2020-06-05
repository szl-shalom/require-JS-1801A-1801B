require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        s: "sfq",
        V: "../lib/velocity.min"
    }
})

require(["d", "$", "s"], function (data, $, S) {
    new S({
        data: data,
        ul: $.get("ul")

    })
})