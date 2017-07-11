<template lang="pug">
.todo__new
  .todo__input__bar(
    :class=" { 'todo__input__bar--focus': inputFocused } "
  )
    .todo__input__text
      input(
        placeholder="What needs to be done?",
        v-model="newTodoItem",
        @focus="handleFocus",
        @blur="handleBlur",
        @keyup.13="handleSubmitNewTodo"
      )
    .todo__input__icon(
      v-show="inputFocused",
      @click="handleSubmitNewTodo"
    )
      Icon(type="android-add")
</template>

<script>
import * as classNames from '@/class-names'

export default {
  data() {
    return {
      newTodoItem: '',
      inputFocused: false,
    }
  },
  methods: {
    /**
     * submit new todo event handler
     */
    async handleSubmitNewTodo() {
      if (!this.newTodoItem.trim()) return

      try {
        const res = await this.submitNewTodo()

        this.emitAppendTodoEvent(res)

        this.newTodoItem = ''
        this.setInputFocused(false)
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * focus event handler
     */
    handleFocus() {
      if (this.inputFocused) return

      this.setInputFocused(true)
    },
    /**
     * blur event handler
     */
    handleBlur() {
      if (!this.inputFocused || this.newTodoItem.trim()) return

      this.setInputFocused(false)
    },
    /**
     * submit new todo function
     * @return {promise.<object>} return a promise object
     */
    async submitNewTodo() {
      try {
        const res = await this.$leancloud.appendObject(classNames.TODOS, {
          priority: 5,
          state: 0,
          title: this.newTodoItem,
        })

        return res
      } catch (e) {
        return Promise.reject(e)
      }
    },
    /**
     * emit append-todo event
     * @param {object} e - event data model
     */
    emitAppendTodoEvent(e) {
      this.$emit('append-todo', e)
    },
    /**
     * set input-focused state
     * @param {boolean} isFocused - isFocused
     */
    setInputFocused(isFocused) {
      this.inputFocused = isFocused
    },
  },
}

</script>

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

  &:hover
    input
      border-bottom: 1px solid rgba(0,0,0,.2);

  &.todo__input__bar--focus
    background $white
    box-shadow 0 3px 8px 0 rgba(0,0,0,0.1)
    input
      border-color transparent

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
