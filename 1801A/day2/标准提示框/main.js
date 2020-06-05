require.config({
    baseUrl: "js",
    paths: {
        D: "dialog"
    }
})

require(["D"], function (D) {
    var btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        new D({
            title: "今天开心吗？",
            okValue: "开心",
            noValue: "不开心"
        })
    })
})