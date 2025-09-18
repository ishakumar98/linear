<template>
  <div class="textBlock paragraph textBodyM" :class="{ active: isActive }" :style="containerStyle">
    <p class="textBlock__inner" :style="textStyle">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    textStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>