<template lang="pug">
.burger-menu(
  :class="classes",
  @click="handleClick"
)
  span
  span
  span
  span
</template>

<script>
const baseClass = 'burger-menu'

export default {
  data() {
    return {
      opened: false,
    }
  },
  computed: {
    classes() {
      return [
        baseClass,
        {
          [`${baseClass}--opened`]: this.opened,
        },
      ]
    },
  },
  methods: {
    handleClick(e) {
      this.opened = !this.opened

      if (this.opened) {
        this.$emit('click', e)
      }
    },
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

$lineSize = 4px

.burger-menu
  position relative
  margin 20px

  width 30px
  height 20px

  z-index 2017
  cursor pointer
  transform rotate(0deg)
  transition .5s ease-in-out

  span
    display block
    position absolute
    height $lineSize
    width 100%
    background $darkNavBlue
    border-radius $lineSize
    opacity 1
    left 0
    transform rotate(0deg)
    transition .25s ease-in-out

    &:nth-child(1)
      top 0px

    &:nth-child(2),
    &:nth-child(3)
      top 2 * $lineSize

    &:nth-child(4)
      top 4 * $lineSize

  &.burger-menu--opened span
    &:nth-child(1)
      top 2 * $lineSize
      width 0%
      left 50%

    &:nth-child(2)
      transform rotate(45deg)

    &:nth-child(3)
      transform rotate(-45deg)

    &:nth-child(4)
      top 2 * $lineSize
      width 0%
      left 50%
</style>
