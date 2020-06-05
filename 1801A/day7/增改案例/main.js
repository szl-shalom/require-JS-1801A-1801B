require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        $: "dom",
        user: "user",
        V: "../lib/a"
    }
})

require(["d", "$", "user"], function (data, $, User) {
    $.get("tbody").innerHTML = data.map(function (item) {
        return `
        <tr>
            <td>${item.name}</td>
            <td>${item.code}</td>
            <td>${item.tel}</td>
            <td>${item.pro}</td>
            <td>${item.level}</td>
            <td>${item.type}</td>
            <td>
                <button class="mod">编辑</button>
                <button>删除</button>
            </td>
        </tr>
        `
    }).join("")

    $.get(".add").addEventListener("click", function () {
        new User({
            html: `
                    <div class="con">
                    <p>
                        <input type="text" class="qq">
                        <span>姓名：</span>
                    </p>
                    <p>
                        <input type="text" class="qq">
                        <span>手机号：</span>
                    </p>
                    <p>
                        <select name="" id="" class="qq">
                            <option value="一">一</option>
                            <option value="二">二</option>
                            <option value="三">三</option>
                        </select>
                        <span>技能等级：</span>
                    </p>
                </div>
                <div class="con">
                    <p>
                        <input type="text" class="qq">
                        <span>工号：</span>
                    </p>
                    <p>
                        <input type="text" class="qq">
                        <span>产品名称</span>
                    </p>
                    <p>
                        <select name="" id="" class="qq">
                            <option value="初级">初级</option>
                            <option value="中级">中级</option>
                            <option value="高级">高级</option>
                        </select>
                        <span>用户类型：</span>
                    </p>
                </div>
                <button>确定</button>
                <button>取消</button>
            `,
            okclick: function (val) {
                $.get("tbody").innerHTML += `
                <tr>
                    ${val.map(function (item) {
                    return `<td>${item}</td>`
                }).join("")}
                    <td>
                        <button class="mod">编辑</button>
                        <button>删除</button>
                    </td>
                </tr>
                `
            }
        })
    })

    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.className === "mod") {
            new User({
                html: `
                        <div class="con">
                        <p>
                            <input class="qq" type="text" value=${tar.parentNode.parentNode.children[0].innerHTML}>
                            <span>姓名：</span>
                        </p>
                        <p>
                            <input class="qq" type="text" value=${tar.parentNode.parentNode.children[2].innerHTML}>
                            <span>手机号：</span>
                        </p>
                        <p>
                            <select name="" id=""  class="qq">
                                <option value="一级">一</option>
                                <option value="二级">二</option>
                                <option value="三级">三</option>
                            </select>
                            <span>技能等级：</span>
                        </p>
                    </div>
                    <div class="con">
                        <p>
                            <input  class="qq" type="text" value=${tar.parentNode.parentNode.children[1].innerHTML}>
                            <span>工号：</span>
                        </p>
                        <p>
                            <input class="qq" type="text" value=${tar.parentNode.parentNode.children[3].innerHTML}>
                            <span>产品名称</span>
                        </p>
                        <p>
                            <select name="" id="" class="qq">
                                <option value="初级" ${tar.parentNode.parentNode.children[5].innerHTML === "初级" ? "selected" : ""}>初级</option>
                                <option value="中级" ${tar.parentNode.parentNode.children[5].innerHTML === "中级" ? "selected" : ""}>中级</option>
                                <option value="高级" ${tar.parentNode.parentNode.children[5].innerHTML === "高级" ? "selected" : ""}>高级</option>
                            </select>
                            <span>用户类型：</span>
                        </p>
                    </div>
                    <button>确定</button>
                    <button>取消</button>
                `,
                okclick: function (val) {
                    console.log(val)
                    tar.parentNode.parentNode.children[0].innerHTML = val[0]
                    tar.parentNode.parentNode.children[1].innerHTML = val[3]
                    tar.parentNode.parentNode.children[2].innerHTML = val[1]
                    tar.parentNode.parentNode.children[3].innerHTML = val[4]
                    tar.parentNode.parentNode.children[4].innerHTML = val[2]
                    tar.parentNode.parentNode.children[5].innerHTML = val[5]
                }
            })
        }
        if (tar.innerHTML === "删除") {
            tar.parentNode.parentNode.remove();
        }
    })
})