<template>
  <nav class="nav">
    <!-- Navigation dots -->
    <div class="navDots nav__dots">
      <div class="navDots__bg fill blurredBg"></div>
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="navDots__dot"
        :class="{ active: currentSection === index + 1 }"
        :style="{ '--progress': section.progress }"
        @click="goToSection(index + 1)"
      >
        <div class="navDots__dotBg"></div>
        <div class="navDots__dotProgress"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationDots',
  props: {
    sections: {
      type: Array,
      required: true
    },
    currentSection: {
      type: Number,
      required: true
    }
  },
  emits: ['goToSection'],
  methods: {
    goToSection(sectionIndex) {
      this.$emit('goToSection', sectionIndex);
    }
  }
}
</script>