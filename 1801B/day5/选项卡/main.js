require.config({
    baseUrl: "js",
    paths: {
        t: "tab",
        V:"../lib/velocity.min"
    }
})


require(["t"], function (Tab) {
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
        back:document.querySelector(".back")
    })
})