import { mapState, mapActions } from 'vuex'
import todoItem from './todo-item'

export default {
  components: {
    todoItem,
  },
  computed: {
    ...mapState({
      todoItems({ todos }) {
        return (todos.todoItems) ? (todos.todoItems) : ([])
      },
    }),
  },
  methods: {
    ...mapActions([
      // 更新待办列表actions
      'fetchTodoItems',
    ]),
  },
  mounted() {
    this.fetchTodoItems()
  },
}
