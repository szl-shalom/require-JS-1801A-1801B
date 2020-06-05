define(['V'], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0
        }, opt);
        this.time = null;
        this.init();
    }
    Swiper.prototype = {
        constructor: Swiper,
        init: function () {
            var el = this.container.children[0].cloneNode(true);
            this.container.appendChild(el);
            this.auto()
            this.bindEvent();
        },
        auto: function () {
            var that = this;
            this.time = setInterval(function () {
                that.next.onclick()
            }, 2000)
        },
        bindEvent: function () {
            var that = this;
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.time)
            })
            this.wrap.addEventListener("mouseleave", function () {
                that.auto();
            })
            this.next.onclick = function () {
                if (that.index === that.container.children.length - 1) {
                    that.index = 0
                    that.container.style.top = 0
                }
                that.auyt(that.index + 1);

            }
            this.prev.addEventListener('click', function () {
                if (that.index === 0) {
                    that.index = that.container.children.length - 1
                    that.container.style.top = -that.index * 400 + 'px'
                }
                that.auyt(that.index - 1);
            });
            [...this.page.children].map(function (item, index) {
                item.addEventListener("click", function () {
                    that.auyt(index)
                })
            })
        },
        auyt: function (item) {
            var that = this;
            that.page.children[that.index === that.container.children.length - 1 ? '0' : that.index].classList.remove('active');
            that.index = item;
            that.page.children[that.index === that.container.children.length - 1 ? '0' : that.index].classList.add('active');
            V(that.container, { top: -that.index * 400 + 'px' })
        }

    }

    return Swiper;
})