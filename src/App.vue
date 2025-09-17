<template>
  <div class="app" :style="{ backgroundColor: backgroundColor }">
    <!-- Navigation -->
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

    <!-- Main content -->
    <main class="main">
      <!-- Section 1: Landing/Intro -->
      <section
        class="section section-1"
        :class="{ active: currentSection === 1 }"
        id="section-1"
      >
        <div>
          <div class="assetTransaction active">
            <h1
              class="transactionTitle title top"
              :style="topTitleStyle"
            >
              <span class="transactionTitle__inner">Hello, Linear</span>
            </h1>
            <h1
              class="transactionTitle title bottom"
              :style="bottomTitleStyle"
            >
              <span class="transactionTitle__inner">I'm Isha</span>
            </h1>
            <div
              class="assetTransaction__media"
              :style="mediaStyle"
            >
              <div class="assetTransaction__mediaInner">
                <div class="featuredAsset assetTransaction__img">
                  <picture class="picture useFade featuredAsset__img loaded">
                    <source media="(max-width: 1200px)" srcset="/Lilies.jpeg">
                    <source media="(min-width: 1200px)" srcset="/Lilies.jpeg">
                    <img src="/Lilies.jpeg" alt="La Jatte de lait by Berthe Morisot" loading="eager">
                  </picture>
                  <div class="imageCredits">
                    <h2 class="imageCredits__title textPaintingDescription">
                      <a href="#" target="_blank">La Jatte de lait</a>, Berthe Morisot
                    </h2>
                    <p class="imageCredits__credit textPaintingDescription small">Private Collection, Photograph Courtesy of Sotheby's, Inc. ©</p>
                    <div class="imageCredits__icon d-only"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Artists as Collectors -->
      <section
        class="section section-2"
        :class="{ active: currentSection === 2 }"
        id="section-2"
      >
        <div class="section-content">
          <h2 class="section-title">Artists as Collectors</h2>
          <p class="section-description">Explore how artists throughout history have collected and influenced the art market.</p>
        </div>
      </section>

      <!-- Section 3: Collectors, Museums and the Market -->
      <section
        class="section section-3"
        :class="{ active: currentSection === 3 }"
        id="section-3"
      >
        <div class="section-content">
          <h2 class="section-title">Collectors, Museums and the Market</h2>
          <p class="section-description">Discover the complex relationships between private collectors, museums, and the art market.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

export default {
  name: 'App',
  setup() {
    const currentSection = ref(1)
    const scrollProgress = ref(0)
    const sectionTransitionProgress = ref(0) // Track transition between sections

    const sections = ref([
      { progress: 0 },
      { progress: 0 },
      { progress: 0 }
    ])

    // Section background colors
    const sectionColors = [
      { r: 251, g: 229, b: 238 }, // Section 1: #FBE5EE (pink)
      { r: 230, g: 224, b: 221 }, // Section 2: #E6E0DD (beige)
      { r: 255, g: 255, b: 255 }  // Section 3: #FFFFFF (white)
    ]

    // Three-phase animation: scaling first, then gentle container movement, then section exit
    const topTitleStyle = computed(() => {
      const progress = scrollProgress.value

      // Keep content off-screen when not in section 1
      if (currentSection.value !== 1) {
        return {
          transform: `translate(0px, -120lvh) scale(0.25, 0.25)`,
          opacity: 0
        }
      }

      if (progress <= 0.6) {
        // Phase 1: Scale animation only (0 to 0.6 progress) - text scaling
        const scaleProgress = progress / 0.6 // Normalize to 0-1
        const scale = Math.max(0.25, 1 - (scaleProgress * 0.75)) // Scale from 1 to min 0.25

        return {
          transform: `translate(0px, 0lvh) scale(${scale}, ${scale})`,
          opacity: 1
        }
      } else {
        // Phase 2: Maintain min scale and translate out completely (0.6 to 1 progress)
        const translateProgress = (progress - 0.6) / 0.4 // Normalize to 0-1
        const translateY = -(translateProgress * 120) // Stronger movement - fully exit screen

        return {
          transform: `translate(0px, ${translateY}lvh) scale(0.25, 0.25)`,
          opacity: Math.max(0, 1 - (translateProgress * 2)) // Fade out as it exits
        }
      }
    })

    const bottomTitleStyle = computed(() => {
      const progress = scrollProgress.value

      // Keep content off-screen when not in section 1
      if (currentSection.value !== 1) {
        return {
          transform: `translate(0px, -120lvh) scale(1, 1)`,
          opacity: 0
        }
      }

      if (progress <= 0.6) {
        // Phase 1: Scale animation only (0 to 0.6 progress) - text scaling
        const scaleProgress = progress / 0.6 // Normalize to 0-1
        const scale = 0.25 + (scaleProgress * 0.75) // Scale from 0.25 to 1

        return {
          transform: `translate(0px, 0lvh) scale(${scale}, ${scale})`,
          opacity: 1
        }
      } else {
        // Phase 2: Maintain full scale and translate out completely (0.6 to 1 progress)
        const translateProgress = (progress - 0.6) / 0.4 // Normalize to 0-1
        const translateY = -(translateProgress * 120) // Stronger movement - fully exit screen

        return {
          transform: `translate(0px, ${translateY}lvh) scale(1, 1)`,
          opacity: Math.max(0, 1 - (translateProgress * 2)) // Fade out as it exits
        }
      }
    })

    const mediaStyle = computed(() => {
      const progress = scrollProgress.value

      // Keep content off-screen when not in section 1
      if (currentSection.value !== 1) {
        return {
          transform: `translate(0px, -100lvh)`,
          opacity: 0
        }
      }

      if (progress <= 0.6) {
        // Phase 1: Image stays put during text scaling
        return {
          transform: `translate(0px, 0lvh)`,
          opacity: 1
        }
      } else {
        // Phase 2: Strong upward movement with the titles (0.6 to 1 progress)
        const translateProgress = (progress - 0.6) / 0.4 // Normalize to 0-1
        const translateY = -(translateProgress * 100) // Strong movement - fully exit screen

        return {
          transform: `translate(0px, ${translateY}lvh)`,
          opacity: Math.max(0, 1 - (translateProgress * 2)) // Fade out as it exits
        }
      }
    })

    // Computed background color that interpolates between sections
    const backgroundColor = computed(() => {
      // Calculate which two colors to interpolate between
      let fromIndex, toIndex, progress

      if (currentSection.value === 1) {
        fromIndex = 0
        toIndex = 1
        // Use sectionTransitionProgress when in section 1
        progress = sectionTransitionProgress.value
      } else if (currentSection.value === 2) {
        fromIndex = 1
        toIndex = 2
        // Use sectionTransitionProgress when in section 2
        progress = sectionTransitionProgress.value
      } else {
        // Section 3 - stay at white
        fromIndex = 2
        toIndex = 2
        progress = 0
      }

      const currentColor = sectionColors[fromIndex]
      const nextColor = sectionColors[toIndex]

      const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * progress)
      const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * progress)
      const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * progress)

      return `rgb(${r}, ${g}, ${b})`
    })

    // Navigation
    const goToSection = (sectionNumber) => {
      if (sectionNumber === currentSection.value) return

      // Smoothly transition without abrupt resets
      currentSection.value = sectionNumber

      // Start new section at true beginning - no content should be visible yet
      scrollProgress.value = 0
      sectionTransitionProgress.value = 0

      // Update the previous section's progress to show completion
      if (sectionNumber > 1) {
        sections.value[sectionNumber - 2].progress = 1 // Mark previous section as complete
      }
    }

    // Lenis smooth scroll setup
    let lenis = null

    const handleLenisScroll = (e) => {
      if (currentSection.value === 1) {
        // Handle scroll within section 1 for title animations - very slow progression like Getty
        const delta = e.velocity > 0 ? 0.0005 : -0.0005 // Much smaller increments - requires lots of scrolling
        const newProgress = Math.max(0, Math.min(1, scrollProgress.value + delta))

        if (newProgress !== scrollProgress.value) {
          scrollProgress.value = newProgress
          sections.value[0].progress = newProgress
        } else if (e.velocity > 0 && scrollProgress.value >= 0.95) {
          // Only move to next section when progress is 95% complete (nav dot nearly full)
          goToSection(Math.min(3, currentSection.value + 1))
        } else if (e.velocity < 0 && scrollProgress.value <= 0.05) {
          // Only move to previous section when progress is nearly at 0
          goToSection(Math.max(1, currentSection.value - 1))
        }
      } else {
        // Handle section navigation for other sections
        if (e.velocity > 0) {
          goToSection(Math.min(3, currentSection.value + 1))
        } else {
          goToSection(Math.max(1, currentSection.value - 1))
        }
      }
    }

    // Keyboard navigation
    const handleKeydown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault()
          goToSection(Math.max(1, currentSection.value - 1))
          break
        case 'ArrowDown':
          e.preventDefault()
          goToSection(Math.min(3, currentSection.value + 1))
          break
      }
    }

    onMounted(() => {
      // Initialize Lenis smooth scroll but disable it for manual control
      lenis = new Lenis({
        duration: 1.2,        // Duration of scroll animation
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        smooth: false,        // Disable smooth scrolling - we'll handle manually
        syncTouch: false,     // Disable on touch devices for better performance
      })

      // Use wheel event directly instead of Lenis scroll events
      document.addEventListener('wheel', handleWheelEvent, { passive: false })
      document.addEventListener('keydown', handleKeydown)
    })

    const handleWheelEvent = (e) => {
      e.preventDefault() // Prevent default page scroll

      if (currentSection.value === 1) {
        // Handle scroll within section 1 for title animations - much faster speed
        const delta = e.deltaY > 0 ? 0.003 : -0.003 // Doubled again from 0.0015 to 0.003 (4x faster than original)
        const newProgress = Math.max(0, Math.min(1, scrollProgress.value + delta))

        if (newProgress !== scrollProgress.value) {
          scrollProgress.value = newProgress
          sections.value[0].progress = newProgress

          // Update section transition progress for smooth color transitions
          if (scrollProgress.value >= 0.85) {
            // Start background color transition in the final 15% of scroll
            sectionTransitionProgress.value = (scrollProgress.value - 0.85) / 0.15
          } else {
            sectionTransitionProgress.value = 0
          }
        } else if (e.deltaY > 0 && scrollProgress.value >= 0.99) {
          // Only move to next section when progress is 99% complete - ensure full exit
          // DON'T reset sectionTransitionProgress - let it continue smoothly
          goToSection(Math.min(3, currentSection.value + 1))
        } else if (e.deltaY < 0 && scrollProgress.value <= 0.05) {
          // Only move to previous section when progress is nearly at 0
          // DON'T reset sectionTransitionProgress - let it continue smoothly
          goToSection(Math.max(1, currentSection.value - 1))
        }
      } else {
        // Handle scroll in other sections with color transitions
        const delta = e.deltaY > 0 ? 0.003 : -0.003
        const newProgress = Math.max(0, Math.min(1, scrollProgress.value + delta))

        if (newProgress !== scrollProgress.value) {
          scrollProgress.value = newProgress

          // Update current section's navigation dot progress
          sections.value[currentSection.value - 1].progress = newProgress

          // Update section transition progress for smooth color transitions
          if (scrollProgress.value >= 0.85) {
            // Start background color transition in the final 15% of scroll
            sectionTransitionProgress.value = (scrollProgress.value - 0.85) / 0.15
          } else {
            sectionTransitionProgress.value = 0
          }
        } else if (e.deltaY > 0 && scrollProgress.value >= 0.99) {
          // Move to next section - wait until very end for consistency
          goToSection(Math.min(3, currentSection.value + 1))
        } else if (e.deltaY < 0 && scrollProgress.value <= 0.01) {
          // Move to previous section - consistent threshold
          goToSection(Math.max(1, currentSection.value - 1))
        }
      }
    }

    onUnmounted(() => {
      if (lenis) {
        lenis.destroy()
      }
      document.removeEventListener('wheel', handleWheelEvent)
      document.removeEventListener('keydown', handleKeydown)
    })

    return {
      currentSection,
      sections,
      scrollProgress,
      topTitleStyle,
      bottomTitleStyle,
      mediaStyle,
      backgroundColor,
      goToSection
    }
  }
}
</script>

