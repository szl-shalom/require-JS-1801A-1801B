define(function () {
    function List(opt) {
        Object.assign(this, opt)
        this.init()
    }

    List.prototype = {
        constructor: List,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            var that = this;
            this.input.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    that.ulHeader.innerHTML += `
                    <li>
                        <input type="checkbox">
                        <span>${this.value}</span>
                        <span class="del">X</span>
                    </li>
                    `
                }
                that.complateLength();
            })

            this.box.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.className === "del") {
                    tar.parentNode.remove()
                }
                if (tar.nodeName === "INPUT") {
                   tar.checked ?  that.ulFooter.appendChild(tar.parentNode) : that.ulHeader.appendChild(tar.parentNode) 
                }
                that.complateLength();
            })

            // this.ulFooter.addEventListener("click", function (e) {
            //     var tar = e.target;
            //     if (tar.className === "del") {
            //         tar.parentNode.remove()
            //     }
            //     if (tar.nodeName === "INPUT") {
            //         that.ulHeader.appendChild(tar.parentNode)
            //     }
            //     that.complateLength();
            // })
        },
        complateLength: function () {
            this.spanHeader.innerHTML = this.ulHeader.children.length;
            this.spanFooter.innerHTML = this.ulFooter.children.length;
        }
    }

    return List;
})