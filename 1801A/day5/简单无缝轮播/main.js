require.config({
    baseUrl: "js",
    paths: {
        s: "swiper",
        V: "../lib/velocity.min"
    }
})


require(["s"], function (Swiper) {
    new Swiper({
        container: document.querySelector(".container")
    })
})