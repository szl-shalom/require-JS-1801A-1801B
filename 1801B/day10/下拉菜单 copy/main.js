require(["js/sel"], function (Sel) {
    new Sel({
        content:document.querySelector(".content"),
        list:document.querySelector(".list"),
        search:document.querySelector(".search"),
    })
})