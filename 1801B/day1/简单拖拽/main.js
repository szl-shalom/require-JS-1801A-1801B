// 加载模块
require(["js/drag"], function (D) {
    var els = [...document.body.querySelectorAll("*")];
    els.forEach(function (item) {
        new D({
            box: item
        })
    })

})