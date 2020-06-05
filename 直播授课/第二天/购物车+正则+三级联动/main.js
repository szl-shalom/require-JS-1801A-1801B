require.config({
    baseUrl: "js",
    paths: {
        c: "car",
        d: "data",
        $: "dom",
        r: "res",
        s: "sanji",
    }
})

require(["c", "d", "$", "r", "s"], function (Car, data, $, Reg, Sanji) {
    // 购物车模块
    new Car({
        box: $.get(".car"),
        allPrice: $.get(".allPrice")
    })
    // 正则验证
    new Reg({
        data: [{
            input: $.get(".username"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            error: "用户名不正确",
            ok: "√"
        }, {
            input: $.get(".tel"),
            reg: /^1[3-9]\d{9}$/,
            error: "手机号不正确",
            ok: "你真棒！！"
        }]
    })
    // 三级联动模块
    new Sanji({
        province: $.get("#province"),
        city: $.get("#city"),
        area: $.get("#area"),
        data: data
    })
})