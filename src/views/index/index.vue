<template lang="pug">
.index
  user-info
  todos
</template>

<script>
import userInfo from '@/components/business/user-info/user-info'
import todos from '@/views/todos/todos'

export default {
  components: {
    userInfo,
    todos,
  },
}
</script>

<style lang="stylus">
.index
  position relative
  height 100%
  width 100%

  overflow auto

  &::-webkit-scrollbar
    display none
</style>
