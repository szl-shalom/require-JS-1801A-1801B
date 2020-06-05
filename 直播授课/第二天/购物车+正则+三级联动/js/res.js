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
            // console.log(this)
            this.data.forEach(function (item) {
                // console.log(item)
                item.input.addEventListener("blur", function () {
                    this.nextElementSibling.innerHTML = item.reg.test(this.value) ? item.ok : item.error;
                })
            })
        }
    }

    return Reg;
})