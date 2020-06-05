require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        e: "exp"
    }
})


require(["$", "e"], function ($, Exp) {
    new Exp({
        username: $.get(".username"),
        level: $.get(".level"),
        add: $.get(".add"),
        tbody: $.get("tbody"),
    })
})