<template lang="jade">
.user-info
  .user-info--logged(v-if="currentUser.id")
    span.user-info__nickname 当前用户：{{ currentUser.get('nickname') }} ( {{ currentUser.get('email') }} )
    span.user-info__logout(@click="handleLogOut") 登出
  .user-info--unlogged(v-else)
    span.user-info__login(@click="handleLogin") 登陆
    span.user-info__signup 注册
</template>

<script>
/* @flow */
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      currentUser({ user }) {
        return (user.currentUser) ? (user.currentUser) : ({})
      }
    }),
  },
  methods: {
    ...mapActions([
      // 获取当前用户action
      'setCurrentUser',
    ]),
    /**
     * 登出事件
     */
    handleLogOut() {
      this.logout()
      this.goLogin()
    },
    /**
     * 获取当前用户信息
     */
    fetchCurrentUser() {
      let currentUser = this.$leancloud.getCurrentUser()
      this.setCurrentUser(currentUser)
    },
    /**
     * 登陆事件
     */
    handleLogin() {
      this.goLogin()
    },
    /**
     * 登出方法
     */
    logout() {
      this.setCurrentUser({})
      this.$leancloud.logout()
    },
    /**
     * 跳转登陆页方法
     */
    goLogin() {
      this.$router.push('login')
    },
  },
  mounted() {
    this.fetchCurrentUser()
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.user-info
  position absolute
  top 0
  left 0
  padding 10px 10px 0 0

  width 100%
  height 28px

  display flex
  flex-direction row-reverse

  // text 按钮样式
  &__logout,
  &__login,
  &__signup
    text-decoration underline
    cursor pointer

    &:hover
      color $black
      transition color .2s

  &--logged,
  &--unlogged
    > :last-child
      margin-left 20px
</style>
