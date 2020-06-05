require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        dialog: "dialog",
    }
})


require(["d", "dialog"], function (data, Dialog) {
    var list = document.querySelector(".list"),
        add = document.querySelector(".add");
    // 渲染
    list.innerHTML = data.map(function (item) {
        return `
        <li>
            <img src=${item.url} alt="">
            <p>${item.title}</p>
            <b>编辑</b>
        </li>
        `
    }).join("")
    // 事件委托
    list.addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.nodeName === "B") {
            // 编辑
            new Dialog({
                html: `
                    <h2>修改快方式</h2>
                    <p>名称</p>
                    <input type="text" value=${tar.previousElementSibling.innerHTML}>
                    <p>网址</p>
                    <input type="text" value=${tar.previousElementSibling.previousElementSibling.src}>
                    </br>
                    <button>删除</button>
                    <button>取消</button>
                    <button>完成</button>
                `,
                // 确认回调
                okclick: function (val1, val2) {
                    tar.previousElementSibling.innerHTML = val1;
                    tar.previousElementSibling.previousElementSibling.src = val2
                },
                // 取消回调
                noclick: function () {

                },
                // 删除回调
                removeclick: function () {
                    tar.parentNode.remove();
                }
            })
        }
    })
    // 添加点击事件
    add.addEventListener("click", function () {
        new Dialog({
            html: `
            <h2>修改快方式</h2>
            <p>名称</p>
            <input type="text">
            <p>网址</p>
            <input type="text">
            </br>
            <button disabled>删除</button>
            <button>取消</button>
            <button>完成</button>
        `,
            // 确认回调
            okclick: function (val1, val2) {
                list.innerHTML += `
            <li>
                <img src=${val2} alt="">
                <p>${val1}</p>
                <b>编辑</b>
            </li>
            `
            },
            // 取消回调
            noclick: function () {

            },
            // 删除回调
            removeclick: function () {

            }
        })
    })
})