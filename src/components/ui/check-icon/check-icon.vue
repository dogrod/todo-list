<template lang="pug">
span(:class="classes")
  Icon(:type="iconType")
</template>

<script>
const prefixClass = 'check-icon'

export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    /**
     * dynamic class of root element
     * @return {Array} classes
     */
    classes() {
      return [
        `${prefixClass}`,
        this.checked ? `${prefixClass}--checked` : `${prefixClass}--unchecked`,
        {
          [`${prefixClass}--disabled`]: this.disabled,
        }
      ]
    },
    /**
     * dynamic type of iview icon
     * @return {string} icon type
     */
    iconType() {
      return this.checked ? 'ios-checkmark' : 'ios-checkmark-outline'
    },
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/variables'

$fontCheckIcon = 32px
$unchecked = $disabled
$checked = $content

.check-icon
  font-size $fontCheckIcon
  cursor: pointer;

  &--checked
    color $checked

  &--unchecked
    color $unchecked

  &--disabled
    cursor: not-allowed;
</style>
