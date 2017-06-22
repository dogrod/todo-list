/* @flow */
import AV from 'leancloud-storage'

export default {
  /**
   * 登陆方法
   * @param {string} username 用户名
   * @param {string} password 密码
   * @return {Function} 返回promise
   */
  login(username: string, password: string): Function {
    return AV.User.logIn(username, password)
  },
  /**
   * 获取当前用户信息
   * @return {Object} 返回当前用户信息
   */
  getCurrentUser(): Object {
    return AV.User.current()
  },
  /**
   * 登出方法
   */
  logout() {
    AV.User.logOut()
  },
  /**
   * 判断用户是否已经登陆
   * @return {boolean} 是否登陆的值
   */
  isLogged(): boolean {
    const currentUser = AV.User.current()
    return !!currentUser
  },
  /**
   * 获取数据方法
   * @param {string} className 所需class名称
   * @return {Object} 数据对象
   */
  fetchData(className: string): Object {
    const query: Object = new AV.Query(className)
    return query.find()
  },
}
