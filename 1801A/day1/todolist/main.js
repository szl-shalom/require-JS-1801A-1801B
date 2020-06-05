require(["js/list"], function (L) {
    new L({
        input: document.querySelector(".ipt"),
        ulHeader: document.querySelector(".ul-header"),
        ulFooter: document.querySelector(".ul-footer"),
        spanHeader: document.querySelector(".span-header"),
        spanFooter: document.querySelector(".span-footer"),
        box:document.querySelector(".box")
    })
})