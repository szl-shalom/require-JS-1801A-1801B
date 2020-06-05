define(function () {
    function Template(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Template.prototype = {
        constructor: Template,
        init: function () {
            this.render(this.data);
            this.bindEvent();
        },
        render: function (data) {
            this.list.innerHTML = data.map(function (item) {
                return `
                    <li>${item}</li>
                `
            }).join("")
        },
        bindEvent: function () {
            var that = this;
            this.userSearch.oninput = function () {
                that.list.style.display = "block"
                var val = this.value
                var data = that.data.filter(function (item) {
                    return item.includes(val)
                })
                that.render(data)

            }

            this.list.onclick = function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.userSearch.value = tar.innerHTML;
                    this.style.display = "none";
                }
            }
        }
    }

    return Template

})