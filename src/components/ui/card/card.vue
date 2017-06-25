<template lang="pug">
.card
  slot
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

.card
  display: flex;
  margin-bottom 30px
  // padding 25px

  color $content
  // background-image linear-gradient(-45deg, $primary 2%, $lightPrimary 100%)
  background $white
  border-radius $borderRadius
  box-shadow 0 3px 15px 0 rgba(0,0,0,0.1)
</style>
