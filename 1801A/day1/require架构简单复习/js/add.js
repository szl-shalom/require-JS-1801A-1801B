// 定义模块
define([], function () {
    // 代码块
    function sum() {
        var res = 0;
        [...arguments].forEach(function (item) {
            res += item
        })


        return res;

    }



    return sum //抛出接口

})