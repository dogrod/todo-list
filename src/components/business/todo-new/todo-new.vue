<template lang="jade">
.todo__new
  .todo__input__bar
    .todo__input__text
      input(
        placeholder="What needs to be done?",
        v-model="newTodoItemInstance"
      )
    .todo__input__icon
      Icon(type="android-add")
</template>

<script>
/* @flow */
import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/types'

export default {
  computed: {
    newTodoItemInstance: {
      get() {
        return this.newTodoItem
      },
      set(value: String) {
        return this.setNewTodoItem(value)
      }
    },
    ...mapState({
      newTodoItem: ({ todos }) => todos.newTodoItem
    }),
  },
  methods: {
    ...mapMutations({
      setNewTodoItem: types.SET_NEW_TODO_ITEM
    })
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.todo__input__bar
  display flex
  justify-content space-between
  margin-bottom 50px
  overflow hidden

  height 44px

  font-size $fontLarge
  background $white
  border-radius 22px
  transition box-shadow .3s ease

  &:hover
    box-shadow 0 3px 8px 0 rgba(0,0,0,0.1),
               0 0 0 1px rgba(0,0,0,0.08)

.todo__input__text
  flex-grow 1

  input
    display inline-block
    padding 6px 9px 0 22px


    width 100%
    height 100%

    color $themeColor
    border none
    outline none
    line-height 1.5

    &::-webkit-input-placeholder
      color rgba(75, 93, 107, .5)
      font-style italic

.todo__input__icon
  flex-grow 0
  width 44px

  cursor pointer
  font-size 28px
</style>
