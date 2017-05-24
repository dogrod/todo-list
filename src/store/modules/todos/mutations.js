import Vue from 'vue'
import * as types from '@/store/types'

export default {
  [types.SET_NEW_TODO_ITEM](state, value) {
    console.log(value)
    Vue.set(state, 'newTodoItem', value)
  },
}
