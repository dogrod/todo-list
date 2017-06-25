<template lang="pug">
.todo-items(v-if="todoItems.length")
  .todo-items__label What's next
  todo-item(
    v-for="item in todoItems",
    :key="item.title",
    :title="item.title",
    :priority="item.priority",
    :state="item.state",
    :createTime="item.createTime",
  )
</template>

<script src="./todo-items.js"></script>

<style lang="stylus">
@import '~assets/styles/variables'

.todo-items__label
  padding-left 10px
  margin-bottom 10px

  text-align left
  font-size $fontExtraLarge

</style>
