(function(Vue) {

    Vue.component('app-content', {
        template: `
        <section class="note-list" v-cloak>
            <section v-for="(item,i) in filteredTodos">
                <!-- 显示所有 -->
                <ul>
                    <input type="checkbox" class="nameCheck" v-model="item.checked">
                    <li @dblclick.stop="edittext(i)" :class="[{hidden:edit_index==i}]">{{item.title}}</li>
                    <!-- 双击修改 --><input type="text" :class="['hidden',{show:edit_index==i}]" v-model="item.title" @keyup.esc="cancelEdit(i)" @keyup.enter="saveEdit(i)" @blur="saveEdit(i)">
                    <input type="button" class="removeBtn" value="×" @click="remove(item)">
                </ul>
            </section>
        </section>
        `,
        computed: {
            visited: function() {
                return this.$root.visited
            },
            filteredTodos: function() {
                let arr = filters[this.visited](this.todoList)
                this.$root.filters = arr
                return arr
            },
        },
        watch: {
            todoList: {
                handler: function(todoList) {
                    todoStorage.save(todoList);
                },
                deep: true
            },

        },
        data() {
            return {
                todoList: todoStorage.fetch(),

                content_cache: "", //编辑缓存的内容
                edit_index: -1,
            }
        },
        methods: {
            edittext: function(index) {
                this.content_cache = this.todoList[index].title
                this.edit_index = index
            },
            cancelEdit: function(index) {
                this.todoList[index].title = this.content_cache
                this.content_cache = ""
                this.edit_index = -1
            },
            saveEdit: function(index) {
                //如果输入为空，删除该项
                if (!this.todoList[index].title) {
                    this.todoList.splice(index, 1)
                }
                this.edit_index = -1;
            },
            remove: function(item) {
                // console.log(this.todoList.indexOf(item));
                // console.log(this.todoList.item);
                this.todoList.splice(this.todoList.indexOf(item), 1)
            },
        },


    })
})(Vue)