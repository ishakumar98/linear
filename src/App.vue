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
    </div>

    <!-- Fixed Content Layer -->
    <div class="fillFixed">
      <!-- Section 1: Multi-transaction structure -->
      <div class="section1" :class="{ active: currentSection === 1 }" :style="section1BackgroundStyle">

        <!-- Transaction 1: Hello Linear / I'm Isha -->
        <div class="assetTransaction" :class="{ active: transaction1Active }">
          <h1 class="transactionTitle title top" :style="transaction1TopTitleStyle">
            <span class="transactionTitle__inner">Hello, Linear</span>
          </h1>
          <h1 class="transactionTitle title bottom" :style="transaction1BottomTitleStyle">
            <span class="transactionTitle__inner">I'm Isha</span>
          </h1>
          <div class="assetTransaction__media" :style="transaction1MediaStyle">
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

        <!-- Transaction 2: Second content block -->
        <div class="assetTransaction" :class="{ active: transaction2Active }">
          <h1 class="transactionTitle title top" :style="transaction2TopTitleStyle">
            <span class="transactionTitle__inner">Caravaggio</span>
          </h1>
          <h1 class="transactionTitle title bottom" :style="transaction2BottomTitleStyle">
            <span class="transactionTitle__inner">Giuseppe Cesari</span>
          </h1>
          <div class="assetTransaction__media" :style="transaction2MediaStyle">
            <div class="assetTransaction__mediaInner">
              <div class="featuredAsset assetTransaction__img">
                <picture class="picture useFade featuredAsset__img loaded">
                  <source media="(max-width: 1200px)" srcset="/Lilies.jpeg">
                  <source media="(min-width: 1200px)" srcset="/Lilies.jpeg">
                  <img src="/Lilies.jpeg" alt="La Jatte de lait by Berthe Morisot" loading="eager">
                </picture>
                <div class="imageCredits">
                  <h2 class="imageCredits__title textPaintingDescription">
                    <a href="#" target="_blank">Boy with Basket of Fruit</a>, Caravaggio
                  </h2>
                  <p class="imageCredits__credit textPaintingDescription small">Galleria Borghese, © Galleria Borghese</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Block (appears when transaction 2 is active) -->
        <div class="textBlock" :class="{ active: textBlockActive }" :style="textBlockStyle" style="width: 45rem;">
          <p class="textBlock__inner">
            300 years earlier in Rome, artist Giuseppe Cesari was Caravaggio's first teacher, and obtained two of the artist's most famous paintings.
          </p>
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
    const totalHeight = ref(vh * 40)
    const section1Height = vh * 20
    const transaction1Height = vh * 10  // First transaction within section 1
    const transaction2Start = vh * 10   // Second transaction starts
    const transaction2Height = vh * 10  // Second transaction height
    const section2Start = vh * 20
    const section2Height = vh * 20

    const sections = ref([
      { progress: 0 },
      { progress: 0 }
    ])

    // Transaction tracking - Getty style with overlapping active states
    const transaction1Progress = ref(0)
    const transaction2Progress = ref(0)
    const textBlockProgress = ref(0)

    // Active states for overlapping transactions
    const transaction1Active = ref(false)
    const transaction2Active = ref(false)
    const textBlockActive = ref(false)

    // Three.js setup
    let scene, camera, renderer
    let textMesh1, textMesh2

    // Calculate section 1 progress (0-1) based on scroll position
    const section1Progress = computed(() => {
      if (scrollY.value < 0) return 0
      if (scrollY.value > section1Height) return 1
      return scrollY.value / section1Height
    })

    // Getty-style overlapping transaction logic
    const updateTransactionStates = () => {
      const scrollProgress = scrollY.value / section1Height

      // Transaction 1: Active from 0% to 80% (elements move -100lvh over this range)
      if (scrollProgress >= 0 && scrollProgress <= 0.8) {
        transaction1Active.value = true
        transaction1Progress.value = Math.min(1, scrollProgress / 0.8) // 0-1 over first 80%
      } else {
        transaction1Active.value = false
        transaction1Progress.value = 1
      }

      // Transaction 2: Active from 20% to 100% (Caravaggio content)
      if (scrollProgress >= 0.2 && scrollProgress <= 1.0) {
        transaction2Active.value = true
        transaction2Progress.value = Math.min(1, (scrollProgress - 0.2) / 0.8) // 0-1 over 20%-100%
      } else {
        transaction2Active.value = false
        transaction2Progress.value = 0
      }

      // Text Block: Active from 50% to 100% (overlaps with Transaction 2)
      if (scrollProgress >= 0.5 && scrollProgress <= 1.0) {
        textBlockActive.value = true
        textBlockProgress.value = Math.min(1, (scrollProgress - 0.5) / 0.5) // 0-1 over 50%-100%
      } else {
        textBlockActive.value = false
        textBlockProgress.value = 0
      }
    }

    // Calculate current section based on scroll position
    const updateCurrentSection = () => {
      if (scrollY.value < section2Start) {
        currentSection.value = 1
        sections.value[0].progress = section1Progress.value
        updateTransactionStates() // Update overlapping transaction states
      } else {
        currentSection.value = 2
        sections.value[1].progress = (scrollY.value - section2Start) / section2Height
      }
    }

    // Transaction 1 styles - Getty approach with movement + scaling
    const transaction1TopTitleStyle = computed(() => {
      const progress = transaction1Progress.value

      // Fast scaling in first 25% of transaction, then hold
      let scale = 1
      if (progress <= 0.25) {
        const scaleProgress = progress / 0.25
        scale = 1 - (scaleProgress * 0.75) // Scale from 1 to 0.25
      } else {
        scale = 0.25
      }

      // Getty style: Move to -100lvh over full transaction range
      const translateY = -(progress * 100) // Move from 0 to -100lvh

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px) scale(${scale})`
      }
    })

    const transaction1BottomTitleStyle = computed(() => {
      const progress = transaction1Progress.value

      // Fast inverse scaling in first 25% (matching top title), then hold
      let scale = 0.25
      if (progress <= 0.25) {
        const scaleProgress = progress / 0.25
        scale = 0.25 + (scaleProgress * 0.75) // Scale from 0.25 to 1
      } else {
        scale = 1
      }

      // Getty style: Move to -100lvh (but different speed than top title)
      const translateY = -(progress * 97) // Move slightly slower than top title

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px) scale(${scale})`
      }
    })

    const transaction1MediaStyle = computed(() => {
      const progress = transaction1Progress.value
      // Getty style: Move slower than titles for parallax effect
      const translateY = -(progress * 75) // Move to about -75lvh (slower than titles)

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px)`
      }
    })

    // Transaction 2 styles - starts off-screen, moves into view
    const transaction2TopTitleStyle = computed(() => {
      const progress = transaction2Progress.value

      // Start at 100lvh (off-screen), move to final position
      const translateY = 100 - (progress * 90) // 100lvh → 10lvh

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px)`
      }
    })

    const transaction2BottomTitleStyle = computed(() => {
      const progress = transaction2Progress.value
      const translateY = 100 - (progress * 85) // Different final position

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px) scale(0.25)`
      }
    })

    const transaction2MediaStyle = computed(() => {
      const progress = transaction2Progress.value
      const translateY = 100 - (progress * 95) // Media movement

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px)`
      }
    })

    // Text block style - Getty approach with subtle scale animation
    const textBlockStyle = computed(() => {
      const progress = textBlockProgress.value

      // Subtle scale animation like Getty
      const scale = 0.85 + (progress * 0.15) // Scale from 0.85 to 1.0

      return {
        transform: `translate(-50%, -50%) scale(${scale})`
      }
    })

    // Background style for section 1 (gradual transition based on overlapping transactions)
    const section1BackgroundStyle = computed(() => {
      // Use textBlockProgress for background transition (starts at 50% scroll)
      const progress = textBlockProgress.value

      if (progress === 0) {
        // Pure pink gradient when no text block
        return {
          background: 'linear-gradient(135deg, #FBE5EE 0%, #FFF0F6 5%, #FBE5EE 54%, #FBE5EE 90%, #FFF0F6 100%)'
        }
      } else {
        // Interpolate from pink tones to warm beige tones as text block appears
        const r1 = 251, g1 = 229, b1 = 238 // #FBE5EE (pink)
        const r2 = 230, g2 = 224, b2 = 221 // #E6E0DD (beige)

        const r = Math.round(r1 + (r2 - r1) * progress)
        const g = Math.round(g1 + (g2 - g1) * progress)
        const b = Math.round(b1 + (b2 - b1) * progress)

        return {
          background: `rgb(${r}, ${g}, ${b})`
        }
      }
    })

    // Navigation
    const goToSection = (sectionNumber) => {
      let targetScroll = 0

      if (sectionNumber === 1) {
        targetScroll = 0
      } else if (sectionNumber === 2) {
        targetScroll = section2Start
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
        wheelMultiplier: 1.8,
        lerp: 0.25,
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
      section1Progress,

      // Getty-style overlapping transaction states
      transaction1Active,
      transaction2Active,
      textBlockActive,
      transaction1Progress,
      transaction2Progress,
      textBlockProgress,

      // Computed styles
      transaction1TopTitleStyle,
      transaction1BottomTitleStyle,
      transaction1MediaStyle,
      transaction2TopTitleStyle,
      transaction2BottomTitleStyle,
      transaction2MediaStyle,
      textBlockStyle,
      section1BackgroundStyle,

      // Methods
      goToSection
    }
  }
}
</script>