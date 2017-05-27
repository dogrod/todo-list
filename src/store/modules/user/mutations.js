/* @flow */
import _ from 'lodash'
import * as types from '@/store/types'

export default {
  /**
   * set currentUser 方法
   * @param {Object} state vuex state
   * @param {Object} currentUser 当前用户信息
   */
  [types.SET_CURRENT_USER](state: Object, currentUser: Object) {
    _.set(state, 'currentUser', currentUser)
  }
}
