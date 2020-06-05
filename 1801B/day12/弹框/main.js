require(["js/dialog"], function (Dialog) {
    var btn = document.querySelector("button");

    btn.onclick = function () {
        new Dialog({
            title: "我叫弹框",
            okValue: "yes!",
            noValue: "no!!!"
        })
    }
})