(function(Vue) {
    Vue.component('app-header', {
        template: `
        <header class="header">
            <h2>备忘录</h2>
            <input class="new-text" type="text" placeholder="请输入事项" @keyup.enter="addText" v-model="newText" @input="showTips" @blur="hdInputting">
            <ul :class="['tips','hidden',{show:inputting}]">
                <li class="inputting-list" v-for="tip,index in tips" @click.stop="addTodolist(tip)">{{tip}}</li>
            </ul>
        </header>
        `,
        data() {
            return {
                todoList: todoStorage.fetch(),
                newText: "",
                inputting: false,
            }
        },
        methods: {
            addText: function() {
                let value = this.newText && this.newText.trim()
                    //判断如果输入框为空就返回不执行
                if (!value) {
                    return
                }
                this.todoList.unshift({
                        id: todoStorage.uid++,
                        title: value,
                        checked: false
                    })
                    // console.log(value);
                this.newText = ""
            },
            addTodolist: function(tip) {
                this.todoList.unshift({
                        id: todoStorage.uid++,
                        title: tip,
                        checked: false,
                    })
                    // this.inputting = false;
            },
            showTips: function() {
                this.inputting = true;
            },
            hdInputting: function() {
                setTimeout(() => {
                    this.inputting = false
                }, 100);
            },
        },
        computed: {
            tips: function() {
                let tips = []
                this.todoList.forEach((v, i) => {
                    if (v.title.indexOf(this.newText) != -1) {
                        tips.push(v.title)
                    }
                })
                return tips;
            }
        },
        watch: {
            todoList: {
                handler: function(todoList) {
                    todoStorage.save(todoList);
                },
                deep: true
            }
        },
    })
})(Vue)