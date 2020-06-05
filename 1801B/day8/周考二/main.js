require.config({
    paths: {
        d: "data",
        dialog: "dialog"
    },
    baseUrl: "js"
})


require(["d", "dialog"], function (data, Dialog) {
    var ul = document.querySelector(".list"),
        add = document.querySelector(".add");
    // 渲染
    ul.innerHTML = data.map(function (item) {
        return `
        <li>
            <dl>
                <dd>
                    <img src="${item.url}" alt="">
                </dd>
                <dt>
                    ${item.title}
                </dt>
                <b>编辑</b>
            </dl>
        </li>
        `
    }).join("")

    // 事件委托
    ul.addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.nodeName === "B") {
            new Dialog({
                html: `
                    <h1>修改快捷方式</h1>
                    <p>名称</p>
                    <input type="text" value=${tar.previousElementSibling.innerHTML}>
                    <p>网址</p>
                    <input type="text" value=${tar.parentNode.children[0].children[0].src}></br >
                    <button>删除</button>
                    <button>取消</button>
                    <button>完成</button>
                `,
                // 确定
                okclick: function (val1, val2) {
                    tar.previousElementSibling.innerHTML = val1
                    tar.parentNode.children[0].children[0].src = val2
                },
                // 取消
                noclick: function () {

                },
                // 删除
                delclick: function () {
                    tar.parentNode.parentNode.remove();
                }
            })
        }
    })
    // 添加事件
    add.addEventListener("click", function () {
        new Dialog({
            html: `
                <h1>修改快捷方式</h1>
                <p>名称</p>
                <input type="text">
                <p>网址</p>
                <input type="text"></br >
                <button disabled>删除</button>
                <button>取消</button>
                <button>完成</button>
            `,
            // 确定
            okclick: function (val1, val2) {
                ul.innerHTML += `
                <li>
                    <dl>
                        <dd>
                            <img src=${val2} alt="">
                        </dd>
                        <dt>
                            ${val1}
                        </dt>
                        <b>编辑</b>
                    </dl>
                </li>
                `
            },
            // 取消
            noclick: function () {

            },
            // 删除
            delclick: function () {
               
            }
        })
    })

})