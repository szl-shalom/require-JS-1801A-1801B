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
            // 循环data绑定失去焦点
            this.data.forEach(function (item) {
                item.input.onblur = function () {
                    if (this.value === "") {
                        this.nextElementSibling.innerHTML = item.emptyInfo;
                        return;
                    }
                    if (!item.reg.test(this.value)) {
                        this.nextElementSibling.innerHTML = item.noInfo;
                        return;
                    }
                    this.nextElementSibling.innerHTML = item.okInfo;
                    return true;
                }
            })
            // 重复密码
            this.rePassword.onblur = function () {
                this.nextElementSibling.innerHTML = this.value === that.password.value ? "√" : "X"
                return this.value === that.password.value
            }
            // 提交
            this.btn.onclick = function () {
                var flag = that.data.every(function (item) {
                    return item.input.onblur()
                })
         
                if (that.code.innerHTML === that.userCode.value && that.rePassword.onblur() && flag) {
                    location.href = ""
                }
            }
        }
    }
    return Reg;
})