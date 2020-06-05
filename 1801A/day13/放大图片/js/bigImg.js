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
            this.content = document.createElement("img");
            this.content.src = this.url;
            this.content.style = `
                width:1000px;
                height:600px;
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
            `
            document.body.appendChild(this.content)
        }
    }

    return BigImg
})