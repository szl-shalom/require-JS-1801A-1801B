require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom",
        V: "../lib/a"
    }
})

require(["d", "$"], function (Dialog, $) {
    // 点击新增
    $.get(".add").addEventListener("click", function () {
        new Dialog({
            html: `
                <h2>first name</h2>
                <input type="text">
                <h2>last name</h2>
                <input type="text">
                <h2>username</h2>
                <input type="text">
                <button>确定</button>
                <button>取消</button>
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
                        <button>删除</button>
                    </td>
                </tr>
                `
            }
        })
    })
    // 点击编辑
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.className === "mod") {
            new Dialog({
                html: `
                    <h2>first name</h2>
                    <input type="text" value=${tar.parentNode.parentNode.children[1].innerHTML}>
                    <h2>last name</h2>
                    <input type="text" value=${tar.parentNode.parentNode.children[2].innerHTML}>
                    <h2>username</h2>
                    <input type="text" value=${tar.parentNode.parentNode.children[3].innerHTML}>
                    <button>确定</button>
                    <button>取消</button>
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