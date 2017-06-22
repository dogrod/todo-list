<template lang="pug">
.todo__header
  .todo__header__icon
    img(:src="logoSrc")
  .todo__header__content todos
</template>

<script>
/* @flow */
import logoSrc from '@/assets/images/logo.png'

export default {
  data() {
    return {
      logoSrc,
    }
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

$bannerSize = 100px

.todo__header
  display inline-block
  padding 15px 60px 10px
  margin 100px auto 10px
  // background $themeColor
  border-radius 35px
  // box-shadow inset 0 7em 10em -5em rgba(255, 255, 255, .6)
  transition box-shadow .3s ease

  // &:hover
  //   box-shadow inset 0 7em 10em -5em rgba(255, 255, 255, .6),
  //              0 0.3em 0.5em -0.2em rgba(75, 93, 107, 1),
  //              0 1em 2em -0.75em rgba(75, 93, 107, .75),
  //              0 1em 3em -0.5em rgba(75, 93, 107, .5),
  //              0 3em 3em -0.25em rgba(75, 93, 107, .2)

  &__icon
    display inline-block
    margin-right 30px

    img
      width 80px

  &__content
    display inline-block

    cursor default
    user-select none
    color $themeColor
    line-height 1
    font-weight 200
    font-size $bannerSize
    border-radius $borderRadius
</style>
