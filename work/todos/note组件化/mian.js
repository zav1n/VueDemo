(function(Vue) {


    let app = new Vue({
        el: ".noteapp",
        data: {
            visited: "alltext",
            filters: "",

        },
    })
    window.app = app
})(Vue)