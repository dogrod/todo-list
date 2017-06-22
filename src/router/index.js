import Vue from 'vue'
import Router from 'vue-router'

import routes from './config'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: '/todos',
  routes,
})

router.beforeEach((to, from, next) => {
  const document = window.document

  document.title = to.name || '页面标题'
  /** 微信无法识别单页应用的标题切换，hack下 */
  if (window.weixin) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = 'https://www.xkeshi.net/developer/assets/favicon.ico'
    document.body.appendChild(iframe)
    const newIframe = document.querySelector('iframe')
    newIframe.addEventListener('load', () => {
      setTimeout(() => { document.body.removeChild(newIframe) }, 0)
    })
  }
  next()
})

export default router
