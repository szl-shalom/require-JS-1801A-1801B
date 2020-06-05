require.config({
    baseUrl: "js",
    paths: {
        $: "dom",
        d: "dialog",
        V: "../lib/a"
    }
})


require(["$", "d"], function ($, Dialog) {
    $.get(".btn").addEventListener("click", function () {
        new Dialog({
            keyword: 789456,//用户密码
            html:`
                <b class="del">X</b>
                </br>
                <div class="header">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="keyword">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li></li>
                        <li>0</li>
                        <li>X</li>
                    </ul>
                </div>
            `
        })
    })
})  