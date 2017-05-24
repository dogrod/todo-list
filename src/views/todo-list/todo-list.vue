<template lang="jade">
.todo
  todoHeader
  todoNew
  todoItems
</template>

<script>
/* @flow */
import todoHeader from '@/components/business/todo-header/todo-header'
import todoNew from '@/components/business/todo-new/todo-new'
import todoItems from '@/components/business/todo-items/todo-items'

export default {
  components: {
    todoHeader,
    todoNew,
    todoItems
  }
}
</script>

<style lang="stylus">
.todo
  margin: 0 auto

  width: 60%
  min-width: 500px
</style>
