require(["js/dialog"], function (D) {
    document.querySelector("button").onclick = function () {
        new D({
            title: "我叫弹框",
            okValue: "ok",
            noValue: "no"
        })
    }

})