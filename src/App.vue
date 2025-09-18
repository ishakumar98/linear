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
      Section: {{ currentSection }} | Scroll: {{ Math.round(scrollY) }}px | Progress: {{ Math.round(section1Progress * 100) }}% | Dir: {{ scrollDirection }}
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
            <span class="transactionTitle__inner">Linear</span>
          </h1>
          <h1 class="transactionTitle title bottom" :style="transaction1BottomTitleStyle">
            <span class="transactionTitle__inner">I'm Isha</span>
          </h1>
          <div class="assetTransaction__media" :style="transaction1MediaStyle">
            <div class="assetTransaction__mediaInner">
              <div class="featuredAsset assetTransaction__img">
                <div class="logo-container">
                  <div class="flower flower-logo" logo="" intro="" :style="flowerLogoStyle">
                    <a class="logo" href="https://bloomtype.com" target="_blank">
                      <div class="top"></div>
                      <div class="bottom"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Text Block 1 (appears during scroll overlap) -->
        <div class="textBlock paragraph textBodyM" :class="{ active: textBlockActive }" style="left: 50%; top: 50%; transform: translate(-50%, -50%); width: 65rem;">
          <p class="textBlock__inner" :style="textBlockInnerStyle">
            I'm currently a senior product designer at Slack. Currently, I lead design for huddles. Before that, I was at Stanford University, where I got my B.S. and M.S. in Computer Science, with a minor in Art History.
          </p>
        </div>

        <!-- Text Block 2 (appears after first text block) -->
        <div class="textBlock paragraph textBodyM" :class="{ active: textBlock2Active }" style="left: 50%; top: 50%; transform: translate(-50%, -50%); width: 65rem;">
          <p class="textBlock__inner" :style="textBlock2InnerStyle">
            I am drawn to things that feel both natural and surprising, and I hope to create work that inspires that same feeling in others. I am so excited to be here. Thank you for sharing your time, and your workplace.
          </p>
        </div>

        <!-- Image Block (PNG Portfolio Showcase) -->
        <div class="imageBlock" :class="{ active: imageBlockActive }" :style="imageBlockCameraStyle">
          <!-- Image Block Text -->
          <div class="textBlock paragraph textBodyM" :class="{ active: imageBlockTextActive }" :style="imageBlockTextContainerStyle">
            <div class="textBlock__inner" :style="imageBlockTextInnerStyle">
              <p>A few of my favorite things</p>
              <p class="textBlock__subtitle">Projects that brought me joy</p>
            </div>
          </div>

          <!-- PNG Image 1 - Top Left -->
          <div class="png-image png-image-1" :style="pngImage1Style">
            <img src="/Ballymaloe.png" alt="Ballymaloe project" class="png-img">
          </div>

          <!-- PNG Image 2 - Top Right -->
          <div class="png-image png-image-2" :style="pngImage2Style">
            <img src="/Bridesmaids.jpg" alt="Bridesmaids project" class="png-img">
          </div>

          <!-- PNG Image 3 - Center Left -->
          <div class="png-image png-image-3" :style="pngImage3Style">
            <img src="/Warmies.png" alt="Warmies project" class="png-img">
          </div>

          <!-- PNG Image 4 - Bottom Right -->
          <div class="png-image png-image-4" :style="pngImage4Style">
            <img src="/Passport.png" alt="Passport project" class="png-img">
          </div>

          <!-- PNG Image 5 - Bottom Center -->
          <div class="png-image png-image-5" :style="pngImage5Style">
            <img src="/Lost.png" alt="Lost project" class="png-img">
          </div>
        </div>

      </div>

      <!-- Section 2: Time Machine Image Stack -->
      <div class="section2" :class="{ active: currentSection === 2 }">
        <div class="timeMachine" :style="timeMachineContainerStyle">
          <!-- Time Machine Image Stack -->
          <div class="timeMachine__stack">
            <!-- Image 1 (Front) -->
            <div class="timeMachine__item" :style="timeMachineItem1Style">
              <img src="/Placeholder(1).jpeg" alt="Time Machine Item 1" class="timeMachine__img">
            </div>

            <!-- Image 2 -->
            <div class="timeMachine__item" :style="timeMachineItem2Style">
              <img src="/Placeholder(2).png" alt="Time Machine Item 2" class="timeMachine__img">
            </div>

            <!-- Image 3 -->
            <div class="timeMachine__item" :style="timeMachineItem3Style">
              <img src="/Placeholder(3).png" alt="Time Machine Item 3" class="timeMachine__img">
            </div>

            <!-- Image 4 -->
            <div class="timeMachine__item" :style="timeMachineItem4Style">
              <img src="/Placeholder(1).jpeg" alt="Time Machine Item 4" class="timeMachine__img">
            </div>

            <!-- Image 5 (Back) -->
            <div class="timeMachine__item" :style="timeMachineItem5Style">
              <img src="/Placeholder(2).png" alt="Time Machine Item 5" class="timeMachine__img">
            </div>
          </div>
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

    // Mouse tracking for camera movement effect
    const mouseX = ref(0)
    const mouseY = ref(0)

    // Scroll direction tracking for hysteresis
    const scrollDirection = ref('down')
    const lastScrollY = ref(0)

    // Getty-style dimensions (using viewport heights like Getty) - Expanded Section 1
    const vh = window.innerHeight
    const totalHeight = ref(vh * 50)  // Increased total height
    const section1Height = vh * 35    // Much larger Section 1 to accommodate all blocks
    const transaction1Height = vh * 10  // First transaction within section 1
    const transaction2Start = vh * 10   // Second transaction starts
    const transaction2Height = vh * 10  // Second transaction height
    const section2Start = vh * 35     // Section 2 starts later
    const section2Height = vh * 8     // Compact Section 2 for Time Machine only

    const sections = ref([
      { progress: 0 },
      { progress: 0 }
    ])

    // Transaction tracking - Getty style with overlapping active states
    const transaction1Progress = ref(0)
    const textBlockProgress = ref(0)
    const textBlock2Progress = ref(0)
    const imageBlockProgress = ref(0)

    // Section 2 tracking
    const section2Progress = ref(0)

    // Active states for overlapping transactions - transaction1 starts active
    const transaction1Active = ref(true)
    const textBlockActive = ref(false)
    const textBlock2Active = ref(false)
    const imageBlockActive = ref(false)
    const imageBlockTextActive = ref(false)

    // Three.js setup
    let scene, camera, renderer
    let textMesh1, textMesh2

    // Calculate section 1 progress (0-1) based on scroll position
    const section1Progress = computed(() => {
      if (scrollY.value < 0) return 0
      if (scrollY.value > section1Height) return 1
      return scrollY.value / section1Height
    })

    // Getty-style overlapping transaction logic with directional hysteresis
    const updateTransactionStates = () => {
      const scrollProgress = scrollY.value / section1Height

      // Update scroll direction
      const currentDirection = scrollY.value > lastScrollY.value ? 'down' : 'up'
      if (Math.abs(scrollY.value - lastScrollY.value) > 1) { // Only update if significant movement
        scrollDirection.value = currentDirection
      }
      lastScrollY.value = scrollY.value

      // Handle initial state - if we're at the very beginning, ensure transaction1 is active
      if (scrollProgress === 0) {
        transaction1Active.value = true
        transaction1Progress.value = 0
        textBlockActive.value = false
        textBlockProgress.value = 0
        textBlock2Active.value = false
        textBlock2Progress.value = 0
        imageBlockActive.value = false
        imageBlockProgress.value = 0
        return
      }

      // Asset Transaction: Expanded range with more breathing room (0-25%)
      const transaction1EndThreshold = scrollDirection.value === 'down' ? 0.25 : 0.22

      // Transaction 1: Different end points based on scroll direction
      if (scrollProgress >= 0 && scrollProgress <= transaction1EndThreshold) {
        transaction1Active.value = true
        transaction1Progress.value = Math.min(1, scrollProgress / transaction1EndThreshold)
      } else {
        transaction1Active.value = false
        transaction1Progress.value = 1
      }

      // Text Block 1: Expanded range (35-55%) with breathing room
      const textBlock1StartThreshold = scrollDirection.value === 'down' ? 0.35 : 0.32
      const textBlock1EndThreshold = scrollDirection.value === 'down' ? 0.55 : 0.55

      if (scrollProgress >= textBlock1StartThreshold && scrollProgress <= textBlock1EndThreshold) {
        textBlockActive.value = true
        const progressRange = textBlock1EndThreshold - textBlock1StartThreshold
        textBlockProgress.value = Math.min(1, (scrollProgress - textBlock1StartThreshold) / progressRange)
      } else {
        textBlockActive.value = false
        textBlockProgress.value = 0
      }

      // Text Block 2: Extended range (65-80%) with more breathing room
      const textBlock2StartThreshold = scrollDirection.value === 'down' ? 0.65 : 0.65
      const textBlock2EndThreshold = scrollDirection.value === 'down' ? 0.80 : 0.80

      if (scrollProgress >= textBlock2StartThreshold && scrollProgress <= textBlock2EndThreshold) {
        textBlock2Active.value = true
        const progressRange = textBlock2EndThreshold - textBlock2StartThreshold
        textBlock2Progress.value = Math.min(1, (scrollProgress - textBlock2StartThreshold) / progressRange)
      } else {
        textBlock2Active.value = false
        textBlock2Progress.value = 0
      }

      // Image Block: Extended range (75-100%) for more interaction time
      const imageBlockStartThreshold = scrollDirection.value === 'down' ? 0.75 : 0.75
      const imageBlockEndThreshold = 1.0

      if (scrollProgress >= imageBlockStartThreshold && scrollProgress <= imageBlockEndThreshold) {
        imageBlockActive.value = true
        const progressRange = imageBlockEndThreshold - imageBlockStartThreshold
        imageBlockProgress.value = Math.min(1, (scrollProgress - imageBlockStartThreshold) / progressRange)
      } else {
        imageBlockActive.value = false
        imageBlockProgress.value = 0
      }

      // Image Block Text: Starts at 85% overall scroll (like other text blocks)
      const imageBlockTextStartThreshold = 0.85
      const imageBlockTextEndThreshold = 1.0

      if (scrollProgress >= imageBlockTextStartThreshold && scrollProgress <= imageBlockTextEndThreshold) {
        imageBlockTextActive.value = true
      } else {
        imageBlockTextActive.value = false
      }
    }

    // Calculate current section based on scroll position
    const updateCurrentSection = () => {
      if (scrollY.value < section2Start) {
        currentSection.value = 1
        sections.value[0].progress = section1Progress.value
        section2Progress.value = 0
        updateTransactionStates() // Update overlapping transaction states
      } else {
        currentSection.value = 2
        const rawProgress = (scrollY.value - section2Start) / section2Height
        section2Progress.value = Math.max(0, Math.min(1, rawProgress))
        sections.value[1].progress = section2Progress.value
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

      // Modified movement: slower during scaling phase, faster after
      let translateY
      if (progress <= 0.25) {
        // During scaling phase: move only 2vh (minimal movement)
        translateY = -(progress / 0.25) * 2
      } else {
        // After scaling: move remaining 98lvh over remaining 75% of scroll
        const remainingProgress = (progress - 0.25) / 0.75
        translateY = -2 - (remainingProgress * 98)
      }

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

      // Modified movement: slower during scaling phase, faster after
      let translateY
      if (progress <= 0.25) {
        // During scaling phase: move only 2vh (minimal movement)
        translateY = -(progress / 0.25) * 2
      } else {
        // After scaling: move remaining 95lvh over remaining 75% of scroll
        const remainingProgress = (progress - 0.25) / 0.75
        translateY = -2 - (remainingProgress * 95)
      }

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


    // Text block inner style - Getty approach with subtle scale animation
    const textBlockInnerStyle = computed(() => {
      const progress = textBlockProgress.value

      if (progress === 0) {
        return {
          transform: 'scale(0.85)'
        }
      } else {
        // Getty uses translate(0px, 0px) when active, with scale animation
        const scale = 0.85 + (progress * 0.15) // Scale from 0.85 to 1.0
        return {
          transform: `translate(0px, 0px) scale(${scale})`
        }
      }
    })

    // Text block 2 inner style - same pattern as first text block
    const textBlock2InnerStyle = computed(() => {
      const progress = textBlock2Progress.value

      if (progress === 0) {
        return {
          transform: 'scale(0.85)'
        }
      } else {
        // Getty uses translate(0px, 0px) when active, with scale animation
        const scale = 0.85 + (progress * 0.15) // Scale from 0.85 to 1.0
        return {
          transform: `translate(0px, 0px) scale(${scale})`
        }
      }
    })

    // Image block styles - Getty three-layer animation
    const imageBlockContainerStyle = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          transform: 'translate3d(0%, 0vh, 0px)'
        }
      } else {
        // Container shifts left as animation progresses
        const translateX = -(progress * 63.9) // Move left to -63.9%
        const translateY = -(progress * 14.8) // Move up slightly to -14.8vh
        return {
          transform: `translate3d(${translateX}%, ${translateY}vh, 0px)`
        }
      }
    })

    const imageBlockFirstImageStyle = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        // Start centered
        return {
          transform: 'translate(-50%, -50%) scale(1, 1)'
        }
      } else {
        // First image: move LEFT of center using viewport units
        const translateX = -50 - (progress * 25) // Move to -75% (well left of center)
        const translateY = -50 // Stay vertically centered
        const scale = 1 - (progress * 0.1) // Scale from 1.0 to 0.9
        return {
          transform: `translate(${translateX}%, ${translateY}%) scale(${scale}, ${scale})`
        }
      }
    })

    const imageBlockSecondImageStyle = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        // Start centered behind first image, smaller scale
        return {
          transform: 'translate(-50%, -50%) scale(0.5, 0.5)'
        }
      } else {
        // Second image: move RIGHT of center (positive direction)
        const translateX = -50 + (progress * 75) // Move to +25% (well right of center)
        const translateY = -50 // Stay vertically centered
        const scale = 0.5 + (progress * 0.4) // Scale from 0.5 to 0.9 (same as first)
        return {
          transform: `translate(${translateX}%, ${translateY}%) scale(${scale}, ${scale})`
        }
      }
    })

    // Camera/viewport style for the entire imageBlock - Getty-style perspective shift
    const imageBlockCameraStyle = computed(() => {
      if (!imageBlockActive.value) {
        return {
          transform: 'translate3d(0px, 0px, 0px)'
        }
      }

      // Subtle camera movement based on mouse position - much more subtle than individual image movement
      const cameraInfluence = 30 // Pixels of movement
      const translateX = (mouseX.value - 0.5) * cameraInfluence
      const translateY = (mouseY.value - 0.5) * cameraInfluence

      return {
        transform: `translate3d(${translateX}px, ${translateY}px, 0px)`,
        transition: 'transform 0.2s ease-out'
      }
    })

    // Image Block Text container style - centered like other text blocks
    const imageBlockTextContainerStyle = computed(() => {
      return {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '65rem',
        position: 'absolute'
      }
    })

    // Image Block Text inner style - scales from 85% to 90% scroll progress
    const imageBlockTextInnerStyle = computed(() => {
      const progress = imageBlockProgress.value

      // Text starts scaling at 85% overall scroll (imageBlockProgress = 0.4)
      // and reaches full scale at 90% overall scroll (imageBlockProgress = 0.6)
      // 85% overall = (85% - 75%) / (100% - 75%) = 10% / 25% = 0.4
      // 90% overall = (90% - 75%) / (100% - 75%) = 15% / 25% = 0.6

      if (progress < 0.4) {
        return {
          transform: 'scale(0.85)'
        }
      } else {
        // Text scales from 85% to 90% scroll (imageBlockProgress 0.4 to 0.6)
        const textProgress = Math.min(1, (progress - 0.4) / 0.2)
        const scale = 0.85 + (textProgress * 0.15) // Scale from 0.85 to 1.0
        return {
          transform: `translate(0px, 0px) scale(${scale})`
        }
      }
    })

    // Time Machine Container Style
    const timeMachineContainerStyle = computed(() => {
      return {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        perspective: '1000px',
        perspectiveOrigin: '50% 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    })

    // Time Machine Item Styles - create the 3D stack effect
    // Time Machine cycling logic - two phases: scale-in then cycle
    const getTimeMachineItemStyle = (itemIndex) => {
      const progress = section2Progress.value
      const totalImages = 5

      // Phase 1: Scale in (first 30% of scroll)
      const scalePhase = Math.min(progress / 0.3, 1)

      // Phase 2: Cycle through images (remaining 70% of scroll)
      const cyclePhase = Math.max(0, (progress - 0.3) / 0.7)

      if (progress < 0.3) {
        // Phase 1: All images scale in together
        const baseZ = itemIndex * -50 // Tighter spacing
        const scale = 0.4 + (scalePhase * 0.6) // Scale from 0.4 to 1.0
        const opacity = 0.3 + (scalePhase * 0.7) // Fade in

        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateZ(${baseZ}px) scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.2s ease-out'
        }
      } else {
        // Phase 2: Cycle through images
        const cyclePosition = cyclePhase * (totalImages - 1) // 0 to 4
        const activeIndex = Math.round(cyclePosition)
        const distanceFromActive = Math.abs(itemIndex - activeIndex)

        // Position in z-space based on distance from active image
        const baseZ = distanceFromActive * -100
        const scale = distanceFromActive === 0 ? 1.0 : Math.max(0.3, 1 - (distanceFromActive * 0.2))
        const opacity = distanceFromActive === 0 ? 1.0 : Math.max(0.2, 1 - (distanceFromActive * 0.25))

        // Add slight offsets for stacking effect - images behind are slightly offset
        const offsetX = distanceFromActive * 8 // Horizontal offset in pixels
        const offsetY = distanceFromActive * 6 // Vertical offset in pixels

        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) translateZ(${baseZ}px) scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.3s ease-out'
        }
      }
    }

    const timeMachineItem1Style = computed(() => getTimeMachineItemStyle(0))

    const timeMachineItem2Style = computed(() => getTimeMachineItemStyle(1))
    const timeMachineItem3Style = computed(() => getTimeMachineItemStyle(2))
    const timeMachineItem4Style = computed(() => getTimeMachineItemStyle(3))
    const timeMachineItem5Style = computed(() => getTimeMachineItemStyle(4))

    // PNG Image styles - reach full scale by 90% scroll progress
    const pngImage1Style = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          position: 'absolute',
          top: '8%',
          left: '10%',
          transform: 'scale(0)',
          opacity: 0
        }
      } else {
        // Scale reaches 100% when imageBlockProgress is 0.6 (which corresponds to 90% overall scroll)
        // imageBlockProgress 0.6 = (90% - 75%) / (100% - 75%) = 15% / 25% = 0.6
        const scaleProgress = Math.min(1, progress / 0.6)
        const scale = scaleProgress * 1.0
        const opacity = progress

        return {
          position: 'absolute',
          top: '8%',
          left: '10%',
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.3s ease-out'
        }
      }
    })

    const pngImage2Style = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          position: 'absolute',
          top: '15%',
          right: '8%',
          transform: 'scale(0)',
          opacity: 0
        }
      } else {
        // Scale reaches 100% at 90% overall scroll progress
        const scaleProgress = Math.min(1, progress / 0.6)
        const scale = scaleProgress * 1.0
        const opacity = progress

        return {
          position: 'absolute',
          top: '15%',
          right: '8%',
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.4s ease-out'
        }
      }
    })

    const pngImage3Style = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          position: 'absolute',
          top: '45%',
          left: '2%',
          transform: 'scale(0)',
          opacity: 0
        }
      } else {
        // Scale reaches 100% at 90% overall scroll progress
        const scaleProgress = Math.min(1, progress / 0.6)
        const scale = scaleProgress * 1.0
        const opacity = progress

        return {
          position: 'absolute',
          top: '45%',
          left: '2%',
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.5s ease-out'
        }
      }
    })

    const pngImage4Style = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          position: 'absolute',
          bottom: '20%',
          right: '12%',
          transform: 'scale(0)',
          opacity: 0
        }
      } else {
        // Scale reaches 100% at 90% overall scroll progress
        const scaleProgress = Math.min(1, progress / 0.6)
        const scale = scaleProgress * 1.0
        const opacity = progress

        return {
          position: 'absolute',
          bottom: '20%',
          right: '12%',
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.6s ease-out'
        }
      }
    })

    const pngImage5Style = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%) scale(0)',
          opacity: 0
        }
      } else {
        // Scale reaches 100% at 90% overall scroll progress
        const scaleProgress = Math.min(1, progress / 0.6)
        const scale = scaleProgress * 1.0
        const opacity = progress

        return {
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: `translateX(-50%) scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.7s ease-out'
        }
      }
    })

    // Background style for section 1 (gradual transition based on overlapping transactions)
    const section1BackgroundStyle = computed(() => {
      const textBlock1Progress = textBlockProgress.value
      const textBlock2ProgressValue = textBlock2Progress.value

      // Calculate overall progress through the text blocks
      const hasSeenTextBlock1 = textBlock1Progress > 0 || textBlock2ProgressValue > 0

      if (!hasSeenTextBlock1) {
        // Pure pink gradient when no text blocks have appeared yet
        return {
          background: 'linear-gradient(135deg, #FBE5EE 0%, #FFF0F6 5%, #FBE5EE 54%, #FBE5EE 90%, #FFF0F6 100%)'
        }
      } else if (textBlock2ProgressValue > 0) {
        // Second text block active - transition from blue to purple
        const r1 = 229, g1 = 239, b1 = 251 // #E5EFFB (blue - starting point)
        const r2 = 234, g2 = 229, b2 = 251 // #EAE5FB (purple - end point)

        const r = Math.round(r1 + (r2 - r1) * textBlock2ProgressValue)
        const g = Math.round(g1 + (g2 - g1) * textBlock2ProgressValue)
        const b = Math.round(b1 + (b2 - b1) * textBlock2ProgressValue)

        return {
          background: `rgb(${r}, ${g}, ${b})`
        }
      } else {
        // First text block active or completed - show blue
        const r1 = 251, g1 = 229, b1 = 238 // #FBE5EE (pink)
        const r2 = 229, g2 = 239, b2 = 251 // #E5EFFB (blue)

        const progress = Math.max(textBlock1Progress, textBlock1Progress > 0 ? 1 : 0)
        const r = Math.round(r1 + (r2 - r1) * progress)
        const g = Math.round(g1 + (g2 - g1) * progress)
        const b = Math.round(b1 + (b2 - b1) * progress)

        return {
          background: `rgb(${r}, ${g}, ${b})`
        }
      }
    })

    // Flower logo style - animation based on scroll progress
    const flowerLogoStyle = computed(() => {
      const progress = transaction1Progress.value

      // Animate rotation based on scroll progress
      const rotation = progress * 360 // Full rotation during scroll
      const scale = 0.5 + (progress * 0.5) // Scale from 0.5 to 1.0

      // Position flower center at viewport center (no translate needed)
      return {
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transition: progress === 0 ? 'none' : 'transform 0.1s ease-out'
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

    // Mouse tracking for camera movement effect
    const handleMouseMove = (e) => {
      // Track mouse position for camera movement effect
      mouseX.value = e.clientX / window.innerWidth
      mouseY.value = e.clientY / window.innerHeight
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

      // Add mouse tracking for camera movement effect
      window.addEventListener('mousemove', handleMouseMove)

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
      window.removeEventListener('mousemove', handleMouseMove)

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
      scrollDirection,
      mouseX,
      mouseY,

      // Getty-style overlapping transaction states
      transaction1Active,
      textBlockActive,
      textBlock2Active,
      imageBlockActive,
      imageBlockTextActive,
      transaction1Progress,
      textBlockProgress,
      textBlock2Progress,
      imageBlockProgress,
      section2Progress,

      // Computed styles
      transaction1TopTitleStyle,
      transaction1BottomTitleStyle,
      transaction1MediaStyle,
      textBlockInnerStyle,
      textBlock2InnerStyle,
      imageBlockContainerStyle,
      imageBlockFirstImageStyle,
      imageBlockSecondImageStyle,
      imageBlockCameraStyle,
      imageBlockTextContainerStyle,
      imageBlockTextInnerStyle,
      pngImage1Style,
      pngImage2Style,
      pngImage3Style,
      pngImage4Style,
      pngImage5Style,
      section1BackgroundStyle,
      flowerLogoStyle,
      timeMachineContainerStyle,
      timeMachineItem1Style,
      timeMachineItem2Style,
      timeMachineItem3Style,
      timeMachineItem4Style,
      timeMachineItem5Style,

      // Methods
      goToSection
    }
  }
}
</script>