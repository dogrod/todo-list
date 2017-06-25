<template lang="pug">
.todo__new
  .todo__input__bar(
    :class=" { 'todo__input__bar--focus': inputFocused } "
  )
    .todo__input__text
      input(
        placeholder="What needs to be done?",
        v-model="newTodoItemInstance",
        @focus="handleFocus",
        @blur="handleBlur"
      )
    .todo__input__icon(v-show="inputFocused")
      Icon(type="android-add")
</template>

<script src="./new-todo.js"></script>

<style lang="stylus">
@import '~assets/styles/variables'
@import '~assets/styles/mixins'

.todo__input__bar
  display flex
  justify-content space-between
  margin-bottom 80px
  overflow hidden

  color $content
  font-size $fontLarge
  background transparent
  // border 1px solid $border
  border-radius $borderRadius
  transition all .5s ease

  &:hover,
  &.todo__input__bar--focus
    background $white
    box-shadow 0 3px 8px 0 rgba(0,0,0,0.1)

  &.todo__input__bar--focus input
      text-align left

.todo__input__text
  flex-grow 1

  input
    display inline-block
    padding 6px 9px 0 22px


    width 100%
    height 60px

    text-align center
    color $themeColor
    line-height 1.5

    &::-webkit-input-placeholder
      color rgba(75, 93, 107, .5)
      font-style italic

.todo__input__icon
  flex-grow 0
  width 44px

  cursor pointer
  font-size 28px

  flex-center()
</style>
