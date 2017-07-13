<template lang="pug">
.todos
  .todos__container
    todo-header
    new-todo(@append-todo="handleAppendTodo")
    todo-items(v-if="todos.length")
      todo-item(
        v-for="todo in todos",
        :key="todo.title",
        :id="todo.id",
        :title="todo.title",
        :state="todo.state",
        :priority="todo.priority",
        :createTime="todo.createTime",
        @deleted="handleTodoDeleted"
      )
</template>

<script>
/* @flow */
import todoHeader from '@/components/business/todo-header/todo-header'
import newTodo from '@/components/business/new-todo/new-todo.vue'
import todoItems from '@/components/business/todo-items/todo-items.vue'
import todoItem from '@/components/business/todo-items/todo-item.vue'

import * as classNames from '@/class-names.js'

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
    handleAppendTodo(res) {
      const todoTask = this.transferTodoItem(res)

      this.unshiftTodoItem(todoTask)
    },
    handleTodoDeleted(id) {
      this.todos.forEach((value, index) => {
        if (value.id === id) {
          this.todos.splice(index, 1)
        }
      })
    },
    fetchTodos() {
      this.$leancloud.fetchData(classNames.TODOS)
        .then((todos) => {
          global._.forEach(todos, (todo) => {
            // assembling todo item
            const todoTask = this.transferTodoItem(todo)
            // push assembled todo item to todo list in store
            this.unshiftTodoItem(todoTask)
          })
        })
    },
    transferTodoItem(todo) {
      return {
        createTime: todo.get('createdAt').toLocaleString(),
        id: todo.id,
        priority: todo.get('priority'),
        state: todo.get('state'),
        title: todo.get('title'),
      }
    },
    unshiftTodoItem(todo) {
      this.todos.unshift(todo)
    },
  },
  created() {
    this.fetchTodos()
  },
}
</script>

<style lang="stylus">
.todos
  position absolute
  top 60px
  bottom  0
  width 100%
  overflow auto

  &::-webkit-scrollbar
    display none

  &__container
    margin 0 auto

    width 60%
    max-width 800px
    min-width 350px
    height 100%
</style>
