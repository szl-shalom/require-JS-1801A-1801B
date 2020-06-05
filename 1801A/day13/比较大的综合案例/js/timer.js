define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init()
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            setInterval(function () {
                that.cortDownTime()
            }, 1000)
            that.cortDownTime()
        },
        cortDownTime: function () {
            var that = this;
            var curTimer = +new Date();
            var timer = that.furTimer - curTimer;
            var sec = Math.floor(timer / 1000 % 60) // 获取秒
            var min = Math.floor(timer / 1000 / 60 % 60)// 获取分钟
            var hour = Math.floor(timer / 1000 / 60 / 60 % 24)// 获取小时
            var day = Math.floor(timer / 1000 / 60 / 60 / 24) // 获取小时
            that.timer.innerHTML = `距离放假还有${day}天${hour}小时${min}分${sec}秒`
        }
    }
    return Template;
})