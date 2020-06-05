define(function () {
    function Template(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Template.prototype = {
        constructor: Template,
        init: function () {
            var that = this;
            setInterval(function () {
                that.cortDownTimer()
            }, 1000)
            that.cortDownTimer()
        },
        cortDownTimer: function () {
            var that = this;
            var time = +that.furTimer - +new Date();
            var sec = Math.floor(time / 1000 % 60);
            var min = Math.floor(time / 1000 / 60 % 60);
            var hour = Math.floor(time / 1000 / 60 / 60 % 24);
            var day = Math.floor(time / 1000 / 60 / 60 / 24);
            day = day >= 10 ? day : "0" + day;
            hour = hour >= 10 ? hour : "0" + hour;
            min = min >= 10 ? min : "0" + min;
            sec = sec >= 10 ? sec : "0" + sec;
            that.timer.innerHTML = `距离放假还有${day}天${hour}小时${min}分${sec}秒`
        }
    }
    return Template;

})