require.config({
    baseUrl: "js",
    paths: {
        f: "floor",
        $: "dom"
    }
})

require(["f"], function (F) {
    new F({
        nav: document.querySelector(".nav"),
        list: document.querySelector(".list"),
        listLeft: document.querySelector(".list-left"),
    })
})