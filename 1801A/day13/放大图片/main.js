require(["js/bigImg"], function (B) {
    [...document.querySelectorAll("img")].forEach(function (item) {
        item.onclick = function () {
            new B({
                url: item.src,
            })
        }
    })
})