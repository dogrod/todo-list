<template lang="pug">
.todo-items(v-if="todoItems.length")
  .todo-items__label What's next
  card(
    v-for="item in todoItems",
    :key="item.get('title')"
  )
    .todo-item
      .todo-item__title {{ item.get('title') }}
      .todo-item__create-time 待办状态 {{ item.get('state') }}
</template>

<script>
/* @flow */
import { mapState, mapActions } from 'vuex'
import Card from '@/components/ui/card/card.vue'

export default {
  components: {
    Card,
  },
  computed: {
    ...mapState({
      todoItems({ todos }) {
        return (todos.todoItems) ? (todos.todoItems) : ([])
      },
    }),
  },
  methods: {
    ...mapActions([
      // 更新待办列表actions
      'fetchTodoItems',
    ]),
  },
  mounted() {
    this.fetchTodoItems()
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.todo-items__label
  padding-left 10px
  margin-bottom 10px

  text-align left
  font-size $fontExtraLarge


.todo-item
  text-align left

  > *
    margin-bottom 10px
</style>
