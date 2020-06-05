define(function () {
    function get36() {
        return Math.random().toString(36).substr(2, 10)
    }

    var str = "";
    for (var i = 0; i < 10; i++) {
        str += get36();
    }
    return str.split("")
})