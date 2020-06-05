require.config({
    baseUrl: "js",
    paths: {
        s: "swiper",
        V: "../lib/velocity.min"
    }
})


require(["s"], function (Swiper) {
    new Swiper({
        container: document.querySelector(".container"),
        wrap: document.querySelector(".wrap"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        page: document.querySelector(".page"),
    })
})