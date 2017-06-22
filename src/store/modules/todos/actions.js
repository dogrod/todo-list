/* @flow */
import * as types from '@/store/types'
import leancloud from '@/utils/leancloud'

export default {
  /**
   * 设置新建todo item内容
   * @param {Object} store vuex store
   * @param {string} value 需要更新的数据
   */
  setNewTodoItem(store: Object, value: String) {
    store.commit(types.SET_NEW_TODO_ITEM, value)
  },
  /**
   * 更新todo 列表的内容
   * @param {Obejct} store vuex store
   */
  fetchTodoItems(store: Object) {
    leancloud.fetchData('TodoList')
      .then((todos) => {
        store.commit(types.SET_TODO_ITEMS, todos)
      })
  },
}
