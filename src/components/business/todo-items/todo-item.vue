<template lang="pug">
card
  .todo-item__check
    check-icon(
      :checked="state === 1",
      :disabled="state === 3"
    )
  .todo-item__main
    .todo-item__content
      .todo-item__content__main
        div(:class="titleClasses") {{ title }}
        .todo-item__desc Todo description
      .todo-item__state {{ stateConversion }}
    .todo-item__info
      .todo-item__create-time 创建于 {{ createTime }}
      .todo-item__operation
        Button(
          type="text",
          v-if="state === 0"
        ) 编辑
        Button(
          type="text",
          @click="handleDeleteTodo"
        ) 删除
</template>

<script>
import card from '@/components/ui/card/card.vue'
import checkIcon from '@/components/ui/check-icon/check-icon.vue'

import * as classNames from '@/class-names.js'

const prefixClass = 'todo-item'

export default {
  name: 'TodoItem',
  props: {
    title: {
      type: String,
    },
    createTime: {
      type: String,
    },
    state: {
      type: Number,
    },
    id: {
      type: String,
    },
  },
  components: {
    card,
    checkIcon,
  },
  computed: {
    stateConversion() {
      let convertedState = ''
      switch (this.state) {
        case 0: {
          convertedState = '未完成'
          break
        }
        case 1: {
          convertedState = '已完成'
          break
        }
        default: {
          convertedState = '已删除'
        }
      }
      return convertedState
    },
    titleClasses() {
      return [
        `${prefixClass}__title`,
        {
          [`${prefixClass}__title--deleted`]: this.state === 3,
        },
      ]
    },
  },
  methods: {
    /**
     * delete todo item event handler
     */
    handleDeleteTodo() {
      this.deleteTodo()
    },
    /**
     * delete todo item function
     */
    async deleteTodo() {
      try {
        const res = await this.$leancloud.deleteObject(classNames.TODOS, this.id)

        this.emitDeletedEvent()
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * emit deleted event
     */
    emitDeletedEvent() {
      this.$emit('deleted', this.id)
    },
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

$deleted = $disabled

.todo-item

  &__check
    padding: 10px 15px

  &__main
    flex-grow 1
    padding 0 20px 0 10px

    width 0%
    text-align left

  &__content
    display: flex;
    justify-content: space-between;
    padding 15px 0

  &__title
    color $title
    font-size $fontLarge

    &--deleted
      color $deleted
      text-decoration: line-through;

  &__desc
    color #ddd

  &__state
    padding-left: 10px;
    white-space: nowrap;

  &__info
    display flex
    justify-content space-between
    padding 5px 0 10px

    border-top 1px solid $border

  &__create-time
    display: flex;
    align-items: center;
</style>
