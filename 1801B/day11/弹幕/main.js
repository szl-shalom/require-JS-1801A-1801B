require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        mes: "mes",
        V: "../lib/a"
    }
})

require(["d", "$", "mes"], function (data, $, Mes) {
    new Mes({
        data: data,
        left: $.get(".left"),
        middle: $.get(".middle"),
        ipt: $.get(".ipt"),
        btn: $.get(".btn"),
    })
})