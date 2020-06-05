define(function () {
    return {
        get: function (el) {
            return document.querySelector(el)
        },
        gets: function (el) {
            return document.querySelectorAll(el)
        },
        addClass: function (el, str) {
            el.classList.add(str)
        },
        removeClass: function (el, str) {
            el && el.classList.remove(str)
        }
    }
})