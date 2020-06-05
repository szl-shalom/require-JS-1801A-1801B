require([], function () {

    var box = document.querySelector(".box"),
        progress = document.querySelector(".progress"),
        slide = document.querySelector(".slide"),
        span = document.querySelector("span"),
        pos = null,
        flag = false;


    box.onmousedown = function (e) {
        pos = {
            x: e.offsetX,
        }
        flag = true
    }

    document.onmousemove = function (e) {
        if (flag) {
            var x = e.pageX - pos.x - progress.offsetLeft;
            if (x < 0) x = 0;
            if (x > 1000) x = 1000
            box.style.left = x + "px"
            slide.style.width = x + 25 + "px"
            span.innerHTML = Math.floor(x / 1000 * 100) + "%"
        }

    }

    document.onmouseup = function () {
        flag = false;
    }



})