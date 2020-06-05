

require(["js/reg", "js/dom"], function (R, $) {
    new R({
        data: [{
            input: $.get(".username"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            okInfo: "√",
            noInfo: "用户名必须是2-4个汉字",
            emptyInfo: "用户名不可以为空！！！！"
        }, {
            input: $.get(".password"),
            reg: /^\w{5,12}$/,
            okInfo: "√√",
            noInfo: "密码必须是5到12个数字 字母 下划线组成",
            emptyInfo: "密码不可以为空！！！！"
        }, {
            input: $.get(".tel"),
            reg: /^1[3-9]\d{9}$/,
            okInfo: "√√√",
            noInfo: "手机号格式不正确",
            emptyInfo: "手机号不可以为空！！！！"
        }, {
            input: $.get(".email"),
            reg: /^\w+@\w+\.(com|con)$/,
            okInfo: "√√√√",
            noInfo: "邮箱格式不正确",
            emptyInfo: "邮箱不可以为空！！！！"
        }],
        rePassword: $.get(".rePassword"),
        password: $.get(".password"),
        btn: $.get(".btn"),
        userCode: $.get(".userCode"),
        code: $.get(".code")
    })
})