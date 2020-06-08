(function(Vue) {
    Vue.component('app-footer', {
        template: `
        <section class="note-buttom">
            <div class="checkAll"><input type="checkbox" v-model="allDone">全选</div>
            <span>剩下{{remaining}}项</span>
            <ul class="filters">
                <li>
                    <a href="#/alltext" :class="{ selected: visited == 'alltext' }">所有</a>
                </li>
                <li>
                    <a href="#/doingtext" :class="{ selected: visited == 'doingtext' }">未完成</a>
                </li>
                <li>
                    <a href="#/donetext" :class="{ selected: visited == 'donetext' }">已完成</a>
                </li>
            </ul>
            <input type="button" value="清除已完成" @click="removeAllText">
        </section>
        `,
        computed: {
            //剩下几项未完成
            remaining() {
                return filters.doingtext(this.todoList).length;
            },
            todoList: function() {
                return this.$root.filters
            },
            //全选
            allDone: {
                get: function() {
                    return this.remaining === 0;
                },
                set: function(value) {
                    this.todoList.forEach(function(todo) {
                        todo.checked = value;
                    });
                }
            },
            visited: function() {
                return this.$root.visited
            },
        },
        methods: {
            removeAllText: function() {
                // this.$root.todoList.forEach(e=>{

                // }) 
                // = filters.doingtext(this.todoList);
                let arr = this.$root.filters
                for (let i = arr.length - 1; i >= 0; i--) {
                    if (arr[i].checked) {
                        arr.splice(i, 1)
                    }
                }
            },
        },
    })



})(Vue)