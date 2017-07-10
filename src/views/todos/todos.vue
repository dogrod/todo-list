<template lang="pug">
.todos
  .todos__container
    todo-header
    new-todo
    todo-items
      todo-item(
        v-for="todo in todos",
        :key="todo.title",
        :title="todo.title",
        :priority="todo.priority",
        :state="todo.state",
        :createTime="todo.createTime",
      )
</template>

<script>
/* @flow */
import todoHeader from '@/components/business/todo-header/todo-header'
import newTodo from '@/components/business/new-todo/new-todo.vue'
import todoItems from '@/components/business/todo-items/todo-items.vue'
import todoItem from '@/components/business/todo-items/todo-item.vue'

export default {
  name: 'Todos',
  components: {
    todoHeader,
    newTodo,
    todoItems,
    todoItem,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    fetchTodos() {
      this.$leancloud.fetchData('TodoList')
        .then((todos) => {
          global._.forEach(todos, (todo) => {
            // assembling todo item
            const todoTask = this.transferTodoItem(todo)
            // push assembled todo item to todo list in store
            this.pushTodoItem(todoTask)
          })
        })
    },
    transferTodoItem(todo) {
      return {
        priority: todo.get('priority'),
        state: todo.get('state'),
        title: todo.get('title'),
        createTime: todo.get('createdAt').toLocaleString(),
      }
    },
    pushTodoItem(todo) {
      this.todos.push(todo)
    },
  },
  created() {
    this.fetchTodos()
  },
}
</script>

<style lang="stylus">
.todos
  position relative
  width 100%

  &::-webkit-scrollbar
    display none

  &__container
    margin 0 auto

    width 60%
    max-width 800px
    min-width 350px
    height 100%
</style>
