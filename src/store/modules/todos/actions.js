/* @flow */
import * as types from '@/store/types'

export default {
  /**
   * 更新新建todo item内容
   * @param {Object} store vuex store
   * @param {String} value 需要更新的数据
   */
  updateNewTodoItem(store: Object, value: String) {
    store.commit(types.SET_NEW_TODO_ITEM, value)
  }
}
