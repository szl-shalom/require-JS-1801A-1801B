define(function () {
    function Reg(opt) {
        Object.assign(this, opt);
        this.init()
    }
    Reg.prototype = {
        constructor: Reg,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            // 循环绑定失去焦点事件
            this.data.forEach(function (item) {
                item.input.onblur = function () {
                    if (item.input.value === "") {
                        this.nextElementSibling.innerHTML = item.emptyInfo;
                        return;
                    }
                    if (!item.reg.test(this.value)) {
                        this.nextElementSibling.innerHTML = item.errorInfo;
                        return;
                    }
                    this.nextElementSibling.innerHTML = item.okInfo;
                    return true;
                }
            })
            // 确认密码失去焦点
            this.rePassword.onblur = function () {
                this.nextElementSibling.innerHTML = that.password.value === this.value ? "√" : "两次密码不一致";
                return that.password.value === this.value
            }
            // 提交
            this.btn.onclick = function () {
                var flag = that.data.every(function (item) {
                    return item.input.onblur()
                })
                var flag1 = that.userCode.value === that.code.innerHTML
                if (!flag1) {
                    alert("验证码不正确")
                }
                if (flag1 && that.rePassword.onblur() && flag) {
                    console.log(1)
                }
            }
            // 切换验证码
            this.code.onclick = function () {
                this.innerHTML = Math.random().toString(36).substr(2, 4)
            }
        }
    }
    return Reg;
})