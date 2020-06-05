require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom",
        V: "../lib/a"
    }
})


require(["d", "$"], function (Dialog, $) {
    // 开始核心代码
    // 新增点击事件
    $.get(".add").addEventListener("click", function () {
        new Dialog({
            html: `
                <input type="text" class="username">
                <input type="text" class="age">
                <input type="text" class="sex">
                <button class="submit">确定</button>
                <button class="cancel">取消</button>
            `,
            okClick: function (arr) {
                $.get("tbody").innerHTML += `
                <tr>
                    <td>${$.get("tbody").children.length + 1}</td>
                    <td>${arr[0]}</td>
                    <td>${arr[1]}</td>
                    <td>${arr[2]}</td>
                    <td>
                        <button class="mod">
                            编辑
                        </button>
                        <button class="del">
                            删除
                        </button>
                    </td>
                </tr>
                `
            }
        })
    })

    // 编辑和删除功能
    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.className === "mod") {
            new Dialog({
                html: `
                    <input type="text" class="username" value="${tar.parentNode.parentNode.children[1].innerHTML}">
                    <input type="text" class="age" value="${tar.parentNode.parentNode.children[2].innerHTML}">
                    <input type="text" class="sex" value="${tar.parentNode.parentNode.children[3].innerHTML}">
                    <button class="submit">确定</button>
                    <button class="cancel">取消</button>
                `,
                okClick: function (arr) {
                    tar.parentNode.parentNode.children[1].innerHTML = arr[0]
                    tar.parentNode.parentNode.children[2].innerHTML = arr[1]
                    tar.parentNode.parentNode.children[3].innerHTML = arr[2]
                }
            })
        } else if (tar.className === "del") {
            tar.parentNode.parentNode.remove();
        }
    })

    // 简单模糊搜索
    $.get(".search").addEventListener("input", function () {
        var val = this.value;
        [...$.get("tbody").children].forEach(function (item) {
            item.style.display = item.children[1].innerHTML.includes(val) ? "block" : "none";
        })
    })
})