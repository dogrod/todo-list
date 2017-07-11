/* @flow */
import AV from 'leancloud-storage'

export default {
  /**
   * login
   * @param {string} username - username
   * @param {string} password - password
   * @return {promise} return leancloud inside function which returns a promise object
   */
  login(username: string, password: string): Function {
    return AV.User.logIn(username, password)
  },
  /**
   * get current user info
   * @return {Object} user info object
   */
  getCurrentUser(): Object {
    return AV.User.current()
  },
  /**
   * logout
   */
  logout() {
    AV.User.logOut()
  },
  /**
   * determine whether user has logged
   * @return {boolean} is logged
   */
  isLogged(): boolean {
    const currentUser = AV.User.current()
    return !!currentUser
  },
  /**
   * fetch data function
   * @param {string} className - class name in leancloud
   * @return {Object} data object
   */
  fetchData(className: string): Object {
    const query: Object = new AV.Query(className)
    return query.find()
  },
  /**
   * append new object to leancloud server
   * @param {string} className - class name in leancloud
   * @param {object} model - data model
   * @return {promise.<obj, obj>} return promise object
   */
  async appendObject(className: string, model: Object) {
    const ObjConstructor = AV.Object.extend(className)
    const obj = new ObjConstructor()

    global._.forIn(model, (value, key) => {
      if (!key) return

      obj.set(key, value)
    })

    try {
      const res = await obj.save()

      return res
    } catch (e) {
      return Promise.reject(e)
    }
  },
  /**
   * delete object from leancloud
   * @param {string} className - class name in leancloud
   * @param {string} id - object id
   * @return {promise.<obj, obj>} return a promise object
   */
  async deleteObject(className: string, id: string) {
    const obj = AV.Object.createWithoutData(className, id)
    try {
      const res = await obj.destroy()

      return res
    } catch (e) {
      return Promise.reject(e)
    }
  },
}
