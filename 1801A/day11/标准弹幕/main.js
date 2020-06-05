require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        m: "mes",
        $: "dom",
        V: "../lib/a",
    }
})


require(["d", "m", "$"], function (data, Mes, $) {
    new Mes({
        data: data,
        left: $.get(".left"),
        content: $.get(".content"),
        ipt: $.get(".ipt"),
        btn: $.get(".btn"),
        header: $.get(".header"),
    })
})