require.config({
    baseUrl: "js",
    paths: {
        a: "add",
        $: "dom",
        d: "dialog"
    }
})


require(["a", "$", "d"], function (A, $, Dialog) {
    new A({
        inputs: $.gets("input"),
        btn: $.get(".btn"),
        tbody: $.get("tbody")
    })

    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.innerHTML === "编辑") {
            new Dialog({
                tar: tar,
            })
        }

        if (tar.innerHTML === "删除") {
            tar.parentNode.parentNode.remove()
        }
    })

})