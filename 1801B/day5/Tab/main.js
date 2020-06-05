require.config({
    baseUrl: "js",
    paths: {
        t: "tab"
    }
})


require(["tab"], function (T) {
    new T({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
        type: "mouseover",
        // className: "active"
    })



    new T({
        title: document.querySelector(".a"),
        content: document.querySelector(".b"),
        // type: "click",
        className: "qwe"
    })
})