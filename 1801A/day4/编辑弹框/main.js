require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        V:"../lib/velocity.min"
    }
})


require(["d"], function (D) {
    document.querySelector("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.innerHTML === "编辑") {
            new D({
                tar: tar,
            })
        }

    })
})  