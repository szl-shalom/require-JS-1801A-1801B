define(function () {
    function Word(opt) {
        Object.assign(this, {
            index: 0, //正确下标
            ind: 0,//错误
        }, opt);
        this.init();
    }


    Word.prototype = {
        constructor: Word,
        init: function () {
            // 绑定事件
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            document.addEventListener("keydown", function (e) {
                that.keyword.querySelector(".ok") && that.keyword.querySelector(".ok").classList.remove("ok")
                that.keyword.querySelector(".error") && that.keyword.querySelector(".error").classList.remove("error")
                if (e.keyCode === 32) {
                    // 开始游戏
                    // 渲染
                    that.render();
                    // 时间开始递增
                    that.compluteTime();
                } else if (e.key === that.word.children[that.index].innerHTML) {
                    that.index++;
                    that.word.style.left = -that.index * 80 + 320 + "px";
                    that.lis.forEach(function (item) {
                        item.innerHTML === e.key && item.classList.add("ok");
                    });
                    that.num.innerHTML = 100 - that.index;
                } else {
                    that.lis.forEach(function (item) {
                        item.innerHTML === e.key && item.classList.add("error");
                    })
                    that.ind++;
                }
            })

            this.end.addEventListener("click", function () {
                clearInterval(that.timer);
                that.res.innerHTML = `你正确输入了${that.index}字符，错误输入${that.ind}个字符
                                      每秒钟正确输入${that.index / that.time.innerHTML}个字符
                `
            })
        },
        render: function () {
            this.word.innerHTML = this.data.map(function (item) {
                return `
                    <span>${item}</span>
                `
            }).join("")
        },
        compluteTime: function () {
            var s = 0, that = this;
            that.timer = setInterval(function () {
                s = +s;
                s += 0.1;
                s = s.toFixed(1);
                that.time.innerHTML = s;
            }, 100)
        }
    }
    return Word;

})

// 23.25478   => 23.2   slice(0, 4)
// 2

