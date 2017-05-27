/* @flow */
import _ from 'lodash'
import * as types from '@/store/types'

export default {
  /**
   * set newTodoItem 方法
   * @param {Object} state vuex state
   * @param {string} value 字段值
   */
  [types.SET_NEW_TODO_ITEM](state: Object, value: string) {
    _.set(state, 'newTodoItem', value)
  },
}
