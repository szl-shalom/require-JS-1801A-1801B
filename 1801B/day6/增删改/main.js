require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom",
        V: "../lib/a"
    }
})

require(["d", "$"], function (Dialog, $) {
    //  新增点击
    $.get(".add").addEventListener("click", function () {
        new Dialog({
            html: `
                <h1>
                信息
                    <span>X</span>
                </h1>
                <h3>firstname</h3>
                <input type="text">
                <h3>lasttname</h3>
                <input type="text">
                <h3>usernametname</h3>
                <input type="text">
                <button>取消</button>
                <button>提交</button>
                `,
            okclick: function (val1, val2, val3) {
                $.get("tbody").innerHTML += `
                <tr>
                    <td>${$.get("tbody").children.length + 1}</td>
                    <td>${val1}</td>
                    <td>${val2}</td>
                    <td>${val3}</td>
                    <td>
                        <button class="mod">编辑</button>
                        <button class="del">删除</button>
                    </td>
                </tr>
                `
            }
        })
    })

    // 编辑
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.classList.contains("mod")) {

            new Dialog({
                html: `
                <h1>
                信息
                    <span>X</span>
                </h1>
                <h3>firstname</h3>
                <input type="text" value=${tar.parentNode.parentNode.children[1].innerHTML}>
                <h3>lasttname</h3>
                <input type="text" value=${tar.parentNode.parentNode.children[2].innerHTML}>
                <h3>usernametname</h3>
                <input type="text" value=${tar.parentNode.parentNode.children[3].innerHTML}>
                <button>取消</button>
                <button>提交</button>
                `,
                okclick: function (val1,val2,val3) {
                    tar.parentNode.parentNode.children[1].innerHTML = val1
                    tar.parentNode.parentNode.children[2].innerHTML = val2
                    tar.parentNode.parentNode.children[3].innerHTML = val3
                }
            })
        }
    })
})