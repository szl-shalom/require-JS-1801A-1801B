define(function () {
    function BigImg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    BigImg.prototype = {
        constructor: BigImg,
        init: function () {
            this.create()
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                width:100%;
                height:100%;
                position:fixed;
                left:0;
                top:0;
                background:rgba(0,0,0,0.3);
            `
            document.body.appendChild(this.mask);
            this.content = document.createElement("div");
            this.content.innerHTML = `
                <input type="date">
            `
            this.content.style = `
                position:fixed;
                bottom:0;
                left:50%;
                transform:translate(-50%,0);
            `
            document.body.appendChild(this.content)
        }
    }

    return BigImg
})