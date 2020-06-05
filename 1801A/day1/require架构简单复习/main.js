require(["js/add"], function (a) {
    var res = a(1, 2, 3)
    var res1 = a(1, 2, 3, 4)
    var res2 = a(1)
    var res3 = a(1, 2)
    console.log(res, res1, res2, res3)
})