<template lang="jade">
.todos
  user-info
  todo-header
  todo-new
  todo-items
</template>

<script>
/* @flow */
import todoHeader from '@/components/business/todo-header/todo-header'
import todoNew from '@/components/business/todo-new/todo-new'
import todoItems from '@/components/business/todo-items/todo-items'
import userInfo from '@/components/business/user-info/user-info'

export default {
  components: {
    todoHeader,
    todoNew,
    todoItems,
    userInfo
  }
}
</script>

<style lang="stylus">
.todos
  margin 0 auto

  width 50%
  min-width 300px
  max-width 600px
</style>
