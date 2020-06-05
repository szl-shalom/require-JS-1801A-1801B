require.config({
    baseUrl: "js",
    paths: {
        d: "dialog",
        $: "dom",
    }
})


require(["d", "$"], function (Dialog, $) {
    $.get(".add").addEventListener("click", function () {
        new Dialog({
            html: `
                    <h1>
                    <span>添加</span>
                    <b>X</b>
                </h1>
                <ul>
                    <li>
                        <input type="text" class="qq">
                        <span>姓名：</span>
                    </li>
                    <li>
                        <input type="text" class="qq">
                        <span>工号：</span>
                    </li>
                    <li>
                        <input type="text" class="qq">
                        <span>手机号:</span>
                    </li>
                    <li>
                        <input type="text" class="qq">
                        <span>产品类型：</span>
                    </li>
                    <li>
                        <select name="" id="" class="qq">
                            <option value="一级">一级</option>
                            <option value="二级">二级</option>
                            <option value="三级">三级</option>
                        </select>
                        <span>技能等级：</span>

                    </li>
                    <li>
                        <select name="" id="" class="qq">
                            <option value="初级">初级</option>
                            <option value="中级">中级</option>
                            <option value="高级">高级</option>
                        </select>
                        <span>用户类型</span>
                    </li>
                    <button>确定</button>
                    <button>取消</button>
                </ul>
            `,
            okclick: function (arr) {
                $.get("tbody").innerHTML += `
                <tr>
                    <td>${arr[0]}</td>
                    <td>${arr[1]}</td>
                    <td>${arr[2]}</td>
                    <td>${arr[3]}</td>
                    <td>${arr[4]}</td>
                    <td>${arr[5]}</td>
                    <td>
                        <button class="mod">编辑</button>
                        <button class="del">删除</button>
                    </td>
                </tr>
                `
            }
        })
    })

    $.get("tbody").addEventListener("click", function (e) {
        var tar = e.target;
        if (tar.className === "mod") {
            new Dialog({
                html: `
                        <h1>
                        <span>添加</span>
                        <b>X</b>
                    </h1>
                    <ul>
                        <li>
                            <input type="text" class="qq" value=${tar.parentNode.parentNode.children[0].innerHTML}>
                            <span>姓名：</span>
                        </li>
                        <li>
                            <input type="text" class="qq" value=${tar.parentNode.parentNode.children[1].innerHTML}>
                            <span>工号：</span>
                        </li>
                        <li>
                            <input type="text" class="qq" value=${tar.parentNode.parentNode.children[2].innerHTML}>
                            <span>手机号:</span>
                        </li>
                        <li>
                            <input type="text" class="qq" value=${tar.parentNode.parentNode.children[3].innerHTML}>
                            <span>产品类型：</span>
                        </li>
                        <li>
                            <select name="" id="" class="qq">
                                <option value="一级" ${tar.parentNode.parentNode.children[4].innerHTML === "一级" ? "selected" : ""}>一级</option>
                                <option value="二级" ${tar.parentNode.parentNode.children[4].innerHTML === "二级" ? "selected" : ""}>二级</option>
                                <option value="三级" ${tar.parentNode.parentNode.children[4].innerHTML === "三级" ? "selected" : ""}>三级</option>
                            </select>
                            <span>技能等级：</span>

                        </li>
                        <li>
                            <select name="" id="" class="qq">
                                <option value="初级">初级</option>
                                <option value="中级">中级</option>
                                <option value="高级">高级</option>
                            </select>
                            <span>用户类型</span>
                        </li>
                        <button>确定</button>
                        <button>取消</button>
                    </ul>
                `,
                okclick: function (arr) {
                    arr.forEach(function (item,index) {
                        tar.parentNode.parentNode.children[index].innerHTML = item
                    })
                    // tar.parentNode.parentNode.children[0].innerHTML = arr[0]
                    // tar.parentNode.parentNode.children[1].innerHTML = arr[1]
                    // tar.parentNode.parentNode.children[2].innerHTML = arr[2]
                    // tar.parentNode.parentNode.children[3].innerHTML = arr[3]
                    // tar.parentNode.parentNode.children[4].innerHTML = arr[4]
                    // tar.parentNode.parentNode.children[5].innerHTML = arr[5]
                }
            })
        }
    })
})