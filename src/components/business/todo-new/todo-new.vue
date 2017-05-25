<template lang="jade">
.todo__new
  .todo__input__bar(:class=" { 'todo__input__bar--focus': inputFocused } ")
    .todo__input__text
      input(
        placeholder="What needs to be done?",
        v-model="newTodoItemInstance",
        @focus="handleFocus",
        @blur="handleBlur"
      )
    .todo__input__icon
      Icon(type="android-add")
</template>

<script>
/* @flow */
import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/types'

export default {
  data() {
    return {
      inputFocused: false
    }
  },
  computed: {
    newTodoItemInstance: {
      get() {
        return this.newTodoItem
      },
      set(value: string) {
        return this.setNewTodoItem(value)
      }
    },
    ...mapState({
      newTodoItem: ({ todos }) => todos.newTodoItem
    }),
  },
  methods: {
    /**
     * Mutation 辅助函数
     */
    ...mapMutations({
      setNewTodoItem: types.SET_NEW_TODO_ITEM
    }),
    /**
     * 获得焦点事件
     */
    handleFocus() {
      // if (this.inputFocused) return

      this.setInputFocused(true)
    },
    /**
     * 失去焦点事件
     */
    handleBlur() {
      if (!this.inputFocused) return

      this.setInputFocused(false)
    },
    /**
     * 设置inputFocused
     * @param {boolean} isFocused 是否获得焦点
     */
    setInputFocused(isFocused: boolean) {
      this.inputFocused = isFocused
    }
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

  &:hover,
  &.todo__input__bar--focus
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
