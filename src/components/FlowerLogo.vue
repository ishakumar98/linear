<template>
  <div class="logo-container">
    <div class="flower flower-logo" logo="" intro="" :style="logoStyle">
      <a class="logo">
        <div class="top"></div>
        <div class="bottom"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlowerLogo',
  props: {
    logoStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>