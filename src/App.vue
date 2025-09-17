<template>
  <div class="app">
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

    <!-- Debug Info -->
    <div style="position: fixed; top: 10px; right: 10px; background: green; color: white; padding: 10px; z-index: 10000; font-size: 16px;">
      Section: {{ currentSection }} | Scroll: {{ Math.round(scrollY) }}px | Progress: {{ Math.round(section1Progress * 100) }}%
    </div>

    <!-- Three.js Canvas -->
    <div class="gl">
      <canvas ref="threeCanvas"></canvas>
    </div>

    <!-- Getty-style Scroll Container -->
    <div class="page" :style="{ height: totalHeight + 'px' }">
      <!-- Section Anchors for scroll position tracking -->
      <div class="section-1-anchor" :style="{ top: '0px' }"></div>
      <div class="section-2-anchor" :style="{ top: section2Start + 'px' }"></div>
      <div class="section-3-anchor" :style="{ top: section3Start + 'px' }"></div>
    </div>

    <!-- Fixed Content Layer -->
    <div class="fillFixed">
      <!-- Section 1: Title Animation -->
      <div class="section1" :class="{ active: currentSection === 1 }">
        <!-- Getty's wrapper div structure -->
        <div>
          <div class="assetTransaction" :class="{ active: currentSection === 1 }">
            <h1 class="transactionTitle title top" :style="topTitleStyle">
              <span class="transactionTitle__inner">Hello, Linear</span>
            </h1>
            <h1 class="transactionTitle title bottom" :style="bottomTitleStyle">
              <span class="transactionTitle__inner">I'm Isha</span>
            </h1>
            <div class="assetTransaction__media" :style="mediaStyle">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Text Block -->
      <div class="section2" :class="{ active: currentSection === 2 }">
        <div class="textBlock" style="left: 50%; top: 50%; transform: translate(-50%, -50%); width: 45rem;">
          <p class="textBlock__inner" style="transform: translate(0px, 0px);">
            In 1892, Claude Monet purchased <br>
            <i>La Jatte de lait</i> by Berthe Morisot at her first solo show. Both were active members of the social and artistic circles of the Impressionists in Paris.
          </p>
        </div>
      </div>

      <!-- Section 3: Final Content -->
      <div class="section3" :class="{ active: currentSection === 3 }">
        <div class="section-content">
          <h2 class="section-title">Collectors, Museums and the Market</h2>
          <p class="section-description">Discover the complex relationships between private collectors, museums, and the art market.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import * as THREE from 'three'

export default {
  name: 'App',
  setup() {
    // Refs
    const threeCanvas = ref(null)
    const scrollY = ref(0)
    const currentSection = ref(1)

    // Getty-style dimensions (using viewport heights like Getty)
    const vh = window.innerHeight
    const totalHeight = ref(vh * 60) // Getty uses 8950lvh, we'll use 60vh for simplicity
    const section1Height = vh * 20
    const section2Start = vh * 20
    const section2Height = vh * 20
    const section3Start = vh * 40

    const sections = ref([
      { progress: 0 },
      { progress: 0 },
      { progress: 0 }
    ])

    // Three.js setup
    let scene, camera, renderer
    let textMesh1, textMesh2

    // Calculate section 1 progress (0-1) based on scroll position
    const section1Progress = computed(() => {
      if (scrollY.value < 0) return 0
      if (scrollY.value > section1Height) return 1
      return scrollY.value / section1Height
    })

    // Calculate current section based on scroll position
    const updateCurrentSection = () => {
      if (scrollY.value < section2Start) {
        currentSection.value = 1
        sections.value[0].progress = section1Progress.value
      } else if (scrollY.value < section3Start) {
        currentSection.value = 2
        sections.value[1].progress = (scrollY.value - section2Start) / section2Height
      } else {
        currentSection.value = 3
        sections.value[2].progress = (scrollY.value - section3Start) / (totalHeight.value - section3Start)
      }
    }

    // Getty-style transforms based on natural scroll position
    const topTitleStyle = computed(() => {
      const progress = section1Progress.value

      if (currentSection.value !== 1) {
        return {
          transform: `translate(0px, -120vh) scale(0.25)`,
          opacity: 0
        }
      }

      // Continuous movement based on scroll position
      const translateY = -(progress * 80) // Move up 80vh over the course of section 1

      // Fast scaling in first 20% of section
      let scale = 1
      if (progress <= 0.2) {
        const scaleProgress = progress / 0.2
        scale = 1 - (scaleProgress * 0.75) // Scale from 1 to 0.25
      } else {
        scale = 0.25
      }

      return {
        transform: `translate(0px, ${translateY}vh) scale(${scale})`,
        opacity: 1
      }
    })

    const bottomTitleStyle = computed(() => {
      const progress = section1Progress.value

      if (currentSection.value !== 1) {
        return {
          transform: `translate(0px, -120vh) scale(1)`,
          opacity: 0
        }
      }

      const translateY = -(progress * 80)

      // Inverse scaling for bottom title
      let scale = 0.25
      if (progress <= 0.2) {
        const scaleProgress = progress / 0.2
        scale = 0.25 + (scaleProgress * 0.75) // Scale from 0.25 to 1
      } else {
        scale = 1
      }

      return {
        transform: `translate(0px, ${translateY}vh) scale(${scale})`,
        opacity: 1
      }
    })

    const mediaStyle = computed(() => {
      const progress = section1Progress.value

      if (currentSection.value !== 1) {
        return {
          transform: `translate(0px, -100vh)`,
          opacity: 0
        }
      }

      // Slower parallax movement for image
      const translateY = -(progress * 60)

      return {
        transform: `translate(0px, ${translateY}vh)`,
        opacity: 1
      }
    })

    // Navigation
    const goToSection = (sectionNumber) => {
      let targetScroll = 0

      if (sectionNumber === 1) {
        targetScroll = 0
      } else if (sectionNumber === 2) {
        targetScroll = section2Start
      } else if (sectionNumber === 3) {
        targetScroll = section3Start
      }

      // Smooth scroll to target position
      if (lenis) {
        lenis.scrollTo(targetScroll)
      }
    }

    // Lenis setup
    let lenis = null

    const handleScroll = (e) => {
      scrollY.value = e.scroll
      updateCurrentSection()
    }

    onMounted(() => {
      // Initialize Three.js
      initThree()

      // Initialize Lenis for natural smooth scrolling
      lenis = new Lenis({
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
        smooth: true,
        wheelMultiplier: 1.2,
        lerp: 0.15,
      })

      lenis.on('scroll', handleScroll)

      // Start animation loop
      function raf(time) {
        lenis.raf(time)
        if (renderer) {
          renderer.render(scene, camera)
        }
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // Handle resize
      window.addEventListener('resize', onResize)
    })

    const initThree = () => {
      if (!threeCanvas.value) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({
        canvas: threeCanvas.value,
        alpha: true,
        antialias: true
      })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      camera.position.z = 5

      // Add some basic content to Three.js scene
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.1 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
    }

    const onResize = () => {
      if (!camera || !renderer) return

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    onUnmounted(() => {
      if (lenis) {
        lenis.destroy()
      }
      window.removeEventListener('resize', onResize)

      // Cleanup Three.js
      if (renderer) {
        renderer.dispose()
      }
    })

    return {
      // Template refs
      threeCanvas,

      // Data
      scrollY,
      currentSection,
      sections,
      totalHeight,
      section2Start,
      section3Start,
      section1Progress,

      // Computed styles
      topTitleStyle,
      bottomTitleStyle,
      mediaStyle,

      // Methods
      goToSection
    }
  }
}
</script>