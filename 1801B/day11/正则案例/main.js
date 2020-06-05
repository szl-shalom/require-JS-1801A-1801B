require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        reg: "reg"
    }
})


require(["$", "reg"], function ($, Reg) {
    new Reg({
        data: [{
            input: $.get(".username"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            okInfo: "√",
            errorInfo: "X",
            emptyInfo: "用户名不可以为空！！！"
        },
        {
            input: $.get(".password"),
            reg: /^\w{5,12}$/,
            okInfo: "√",
            errorInfo: "X",
            emptyInfo: "密码不可以为空！！！"
        }, {
            input: $.get(".tel"),
            reg: /^1[3-9]\d{9}$/,
            okInfo: "√",
            errorInfo: "X",
            emptyInfo: "电话不可以为空！！！"
        }, {
            input: $.get(".email"),
            reg: /^\w+@\w+\.(com|con)$/,
            okInfo: "√",
            errorInfo: "X",
            emptyInfo: "邮箱不可以为空！！！"
        }, {
            input: $.get(".address"),
            reg: /^.+$/,
            okInfo: "√",
            errorInfo: "X",
            emptyInfo: "地址不可以为空！！！"
        }],
        rePassword: $.get(".rePassword"),
        password: $.get(".password"),
        userCode:$.get(".userCode"),
        code:$.get(".code"),
        btn:$.get(".btn")
    })
})