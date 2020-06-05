require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        s: "swiper",
        V: "../lib/a"
    }
})


require(["$", "s"], function ($, Swiper) {
    new Swiper({
        wrap: $.get(".wrap"),
        container: $.get(".container"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        page: $.get(".page"),
        // index: 2,
    })
})