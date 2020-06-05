define(function () {
    return {
        get: function (el, parentNode) {
            parentNode = parentNode || document
            return parentNode.querySelector(el)
        },
        gets: function (el, parentNode) {
            parentNode = parentNode || document
            return parentNode.querySelectorAll(el)
        },
    }
})