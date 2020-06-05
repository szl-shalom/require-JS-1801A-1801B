require.config({
    baseUrl: 'js',
    paths: {
        d: "data",
        s: "sel",
        V: "../lib/velocity.min"
    }
})

require(["d", "s", "V"], function (data, Sel, V) {
    new Sel({
        data: data,
        list: document.querySelector(".list"),
    })
})