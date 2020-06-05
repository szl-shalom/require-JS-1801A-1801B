require(["js/data", "js/sanji"], function (data, S) {
    console.log(data)
    console.log((data[0].children))
    console.log(data[0].children[0].children)

    new S({
        province: document.querySelector("#province"),
        city: document.querySelector("#city"),
        area: document.querySelector("#area"),
        data: data,
    })
})