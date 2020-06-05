require(["js/data", "js/sel"], function (data, Sel) {
    var nav = document.querySelector(".nav");
    nav.innerHTML = data.map(function (item) {
        return `
        <li>
            ${item.title}
            <ol>
                ${item.children.map(function (item) {
            return `
                    <li>
                        ${item.title}
                        <ul class="list">
                            ${item.children.map(function (item) {
                return `
                                <li>${item.title}</li>
                                `
            }).join("")}
                        </ul>
                    </li>
                    `
        }).join("")}
            </ol>
        </li>
        `
    }).join("")


    new Sel({
        nav: document.querySelector(".nav")
    })
})