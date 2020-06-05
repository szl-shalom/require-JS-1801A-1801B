require(["js/tab"], function (Tab) {
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
        className: "active",
        type: "mouseenter"
    })

    // var headers = document.querySelectorAll(".header"),
    //     buttomCons = document.querySelectorAll(".bottom")
    // headers.forEach(function (item, index) {
    //     new Tab({
    //         title: item,
    //         content: buttomCons[index],
    //         className: "active1",
    //         // click:
    //     })
    // })

})