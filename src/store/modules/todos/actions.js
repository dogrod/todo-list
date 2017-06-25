/* @flow */
import _ from 'lodash'
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
        _.forEach(todos, (todo) => {
          // assembling todo item
          const todoItem = {
            priority: todo.get('priority'),
            state: todo.get('state'),
            title: todo.get('title'),
            createTime: todo.get('createdAt').toLocaleString(),
          }
          // push assembled todo item to todo list in store
          store.commit(types.PUSH_TODO_ITEM, todoItem)
        })
      })
  },
}
