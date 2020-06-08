(function(Vue) {




    let TODOLIST_KEY = "todolist"
    window.todoStorage = {
        fetch() {
            let todoList = JSON.parse(localStorage.getItem(TODOLIST_KEY) || "[]")
            todoStorage.uid = todoList.length
                // todoList.forEach((todo, index) => {
                //     todo.id = index
                // })
            return todoList
        },
        save(todoList) {
            localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoList))
        }
    }



})(Vue)