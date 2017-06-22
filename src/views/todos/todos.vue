<template lang="pug">
.todos
  .todos__container
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
    userInfo,
  },
}
</script>

<style lang="stylus">
.todos
  position relative
  width 100%
  height 100%

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
