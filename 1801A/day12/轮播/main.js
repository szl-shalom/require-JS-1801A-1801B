require(["js/swiper"], function (S) {
    new S({
        container: document.querySelector(".container"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        index: 0,
    })
})