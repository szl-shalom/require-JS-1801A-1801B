require.config({
    baseUrl: "js",
    paths: {
        t: "tab"
    }
})

require(["t"], function (T) {
    new T({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
        type: "mouseover"
    })
})