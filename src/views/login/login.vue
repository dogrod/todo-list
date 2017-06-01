<template lang="jade">
.login
  .login__content
    .login__content__title 长得就像登陆页
    .login__content__input-group
      Input(
        v-model="userInfo.username",
        placeholder="请输入用户名",
        @keyup.13.native="handleLogin"
      )
      Input(
        v-model="userInfo.password",
        placeholder="请输入密码",
        type="password",
        @keyup.13.native="handleLogin"
      )
    .login__content__button-group
      Button(
        type="primary",
        long,
        @click="handleLogin"
      ) 戳我登陆
</template>

<script>
/* @flow */
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      userInfo: { // 用户信息，非全局状态故不进入store
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      // 获取当前用户action
      'login',
      'setCurrentUser'
    ]),
    /**
     * 登陆事件
     */
    handleLogin() {
      this.login(this.userInfo)
        .then(() => {
          this.$router.push('/')
        })
    },
  },
  created() {
    if (this.$leancloud.isLogged()) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.login
  width 100%
  height 100%

  display flex
  align-items center

  &__content
    padding 30px
    margin 0 auto

    width 30%
    min-width 300px

    font-size $fontLarge
    background $white
    border-radius $borderRadius

    &__title
      margin-bottom 20px

    &__input-group
      > *
        @extend .login__content__title

    // &__button-group

</style>
