// 解析地址栏参数
// // 去掉？
var str = decodeURI(location.search).slice(1), obj = {};
// 按钮&切割成数组
str.split("&").forEach(function (item) {
    // 按照=切割成数组
    var arr = item.split("=");
    obj[arr[0]] = arr[1]
})

var h1 = document.querySelector("h1"),
    h3s = document.querySelectorAll("h3");


h1.innerHTML = obj.movie;
h3s[1].innerHTML = `单价：${obj.price}`

// 动态生成座次表
var html = "";
for (var i = 1; i <= 10; i++) {
    html += "<ul>"
    for (var y = 1; y <= 10; y++) {
        html += `<li x=${i} y=${y}></li>`
    }
    html += "</ul>"
}
document.querySelector(".left").innerHTML = html;

// 选做
var sit = document.querySelector(".sit")
document.addEventListener("click", function (e) {
    var tar = e.target;
    if (tar.nodeName === "LI") {
        if (document.querySelectorAll(".active").length >= 5 && !tar.classList.contains("active")) {
            alert("最多购买5张")
            return;
        }



        tar.classList.toggle("active");
        sit.innerHTML = [...document.querySelectorAll(".active")].map(function (item) {
            return `<span>${item.getAttribute("x")}排${item.getAttribute("y")}座</span>`
        }).join("")
        h3s[0].innerHTML = "票数：" + document.querySelectorAll(".active").length;
        h3s[2].innerHTML = "总价：" + document.querySelectorAll(".active").length * obj.price;
    }
})