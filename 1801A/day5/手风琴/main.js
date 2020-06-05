require.config({
    baseUrl: "js",
    paths: {
        s: "sfq",
        V: "../lib/velocity.min"
    }
})



require(["s"], function (S) {
    new S({
        ul:document.querySelector("ul")
    })
})