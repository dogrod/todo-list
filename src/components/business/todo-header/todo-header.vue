<template lang="jade">
.todo__header
  .todo__header__content todos
</template>

<script>
/* @flow */
export default {
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

$bannerSize = 60px

.todo__header
  display inline-block
  padding 15px 60px
  margin 100px auto
  background $themeColor
  border-radius 35px
  box-shadow inset 0 7em 10em -5em rgba(255, 255, 255, .6)
  transition box-shadow .3s ease

  &:hover
    box-shadow inset 0 7em 10em -5em rgba(255, 255, 255, .6),
               0 0.3em 0.5em -0.2em rgba(75, 93, 107, 1),
               0 1em 2em -0.75em rgba(75, 93, 107, .75),
               0 1em 3em -0.5em rgba(75, 93, 107, .5),
               0 3em 3em -0.25em rgba(75, 93, 107, .2)

.todo__header__content
  display inline-block

  cursor default
  user-select none
  color $subThemeColor
  font-weight 200
  font-size $bannerSize
  border-radius $borderRadius
</style>
