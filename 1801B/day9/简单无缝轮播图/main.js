require.config({
    baseUrl: "js",
    paths: {
        s: "swiper",
        V: "../lib/a",
        $: "dom"
    }
})

require(["s", "$"], function (Swiper, $) {
    new Swiper({
        prev:document.querySelector(".prev"),
        next:document.querySelector(".next"),
        container:document.querySelector(".container"),
        wrap:$.get(".wrap"),
        page:$.get(".page"),
    })
})