require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "data",
        w: "word",
    }
})


require(["$", "d", "w"], function ($, data, Word) {
    new Word({
        data: data,
        word: $.get(".word"),
        time: $.get(".time"),
        lis: [...$.gets(".keyword li")],
        keyword: $.get(".keyword"),
        num: $.get(".num"),
        end: $.get(".end"),
        res: $.get(".res")
    })
})

