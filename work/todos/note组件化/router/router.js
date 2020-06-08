(function(Vue) {
    function onHashChange() {
        var visited = window.location.hash.replace(/#\/?/, "");
        if (filters[visited]) {
            app.visited = visited;
        } else {
            window.location.hash = "";
            app.visited = "alltext";
        }
    }

    window.addEventListener("hashchange", onHashChange);
    onHashChange();
})(Vue)