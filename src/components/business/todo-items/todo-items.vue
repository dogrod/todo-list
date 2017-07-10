<template lang="pug">
.todo-items
  .todo-items__label What's next
  slot
</template>

<script>
export default {
  name: 'todoItems',
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.todo-items__label
  padding-left 10px
  margin-bottom 10px

  text-align left
  font-size $fontExtraLarge

</style>
