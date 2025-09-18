<template>
  <div class="imageBlock" :class="{ active: isActive }" :style="blockStyle">
    <div class="imageBlock__camera" :style="cameraStyle">
      <div class="png-image png-image-1">
        <img src="/images/portfolio/Ballymaloe.png" alt="Ballymaloe project" class="png-img">
      </div>
      <div class="png-image png-image-2">
        <img src="/images/portfolio/Bridesmaids.jpg" alt="Bridesmaids project" class="png-img">
      </div>
      <div class="png-image png-image-3">
        <img src="/images/portfolio/Warmies.png" alt="Warmies project" class="png-img">
      </div>
      <div class="png-image png-image-4">
        <img src="/images/portfolio/Passport.png" alt="Passport project" class="png-img">
      </div>
      <div class="png-image png-image-5">
        <img src="/images/portfolio/Lost.png" alt="Lost project" class="png-img">
      </div>
      <div class="textBlock paragraph textBodyM" style="position: absolute; bottom: 10vh; left: 50%; transform: translateX(-50%); width: 65rem; text-align: center;">
        <p class="textBlock__inner" :style="textStyle">
          here are a few of my favorite things
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioGallery',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    blockStyle: {
      type: Object,
      default: () => ({})
    },
    cameraStyle: {
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