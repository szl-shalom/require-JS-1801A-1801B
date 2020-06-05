require(["js/swiper"], function (Swiper) {
    new Swiper({
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        index: 0,
        container:document.querySelector(".container")
    })
})