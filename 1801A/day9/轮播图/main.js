require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        s: "swiper",
        V: "../lib/a"
    }
})

require(["d", "$", "s"], function (data, $, S) {
    new S({
        data: data,
        container: $.get(".container"),
        page: $.get(".page"),
        wrap: $.get(".wrap"),
        prev: $.get(".prev"),
        next: $.get(".next"),
    })


})