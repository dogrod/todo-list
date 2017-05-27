/* @flow */
import * as types from '@/store/types'
import leancloud from '@/utils/leancloud'

export default {
  /**
   * 登陆方法
   * @param {Object} store vuex store
   * @param {Object} userInfo 用户信息
   * @return {Function} 成功方法处理
   */
  login(store: Object, userInfo: Object) {
    return new Promise((resolve) => {
      leancloud.login(userInfo.username, userInfo.password)
        .then(() => {
          store.dispatch('setCurrentUser', leancloud.getCurrentUser())
          resolve()
        })
    })
  },
  /**
   * 获取当前用户数据，页面初始化或者登陆后调用
   * @param {Object} store vuex store
   * @param {Object} currentUser 需要设置的用户
   */
  setCurrentUser(store: Object, currentUser: Object) {
    if (!currentUser) return
    store.commit(types.SET_CURRENT_USER, currentUser)
  },
}
