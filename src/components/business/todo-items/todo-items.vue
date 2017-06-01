<template lang="jade">
.todo-items(v-if="todoItems.length")
  ul
    li.todo-item(v-for="item in todoItems")
      .todo-item__title {{ item.get('title') }}
      .todo-item__create-time 待办状态 {{ item.get('state') }}
</template>

<script>
/* @flow */
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      todoItems({ todos }) {
        return (todos.todoItems) ? (todos.todoItems) : ([])
      }
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
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.todo-item
  padding 15px
  margin-bottom 20px

  text-align left
  background rgba(255, 255, 255, .7)
  border 1px solid $border
  border-radius $borderRadius
</style>
