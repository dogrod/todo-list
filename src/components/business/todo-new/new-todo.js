import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/types'

export default {
  data() {
    return {
      inputFocused: false,
    }
  },
  computed: {
    newTodoItemInstance: {
      get() {
        return this.newTodoItem
      },
      set(value) {
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
      if (this.inputFocused) return

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
    setInputFocused(isFocused) {
      this.inputFocused = isFocused
    }
  },
}
