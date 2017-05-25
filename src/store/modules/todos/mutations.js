import Vue from 'vue'
import * as types from '@/store/types'

export default {
  [types.SET_NEW_TODO_ITEM](state, value) {
    Vue.set(state, 'newTodoItem', value)
  },
}
