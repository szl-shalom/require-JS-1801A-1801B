require(["js/sel"], function (S) {
    new S({
        content: document.querySelector(".content"),
        list: document.querySelector(".list"),
        search: document.querySelector(".search")
    })
})