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


    <!-- Three.js Canvas -->
    <div class="gl">
      <canvas ref="threeCanvas"></canvas>
    </div>

    <!-- Scroll Container -->
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
            <span class="transactionTitle__inner">Hello Linear</span>
          </h1>
          <h1 class="transactionTitle title bottom" :style="transaction1BottomTitleStyle">
            <span class="transactionTitle__inner">I'm Isha</span>
          </h1>
          <div class="assetTransaction__media" :style="transaction1MediaStyle">
            <div class="assetTransaction__mediaInner">
              <div class="featuredAsset assetTransaction__img">
                <div class="logo-container">
                  <div class="flower flower-logo" logo="" intro="" :style="flowerLogoStyle">
                    <a class="logo">
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
            I'm currently a senior product designer at <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">Slack</a>. Currently, I lead design for <a href="https://slack.com/intl/en-gb/features/huddles" target="_blank" rel="noopener noreferrer">huddles</a>. Before that, I got my M.S. and B.S. in Computer Science from Stanford University.
          </p>
        </div>

        <!-- Text Block 2 (appears after first text block) -->
        <div class="textBlock paragraph textBodyM" :class="{ active: textBlock2Active }" style="left: 50%; top: 50%; transform: translate(-50%, -50%); width: 65rem;">
          <p class="textBlock__inner" :style="textBlock2InnerStyle">
            I am drawn to things that feel both natural and surprising, and hope to create that dynamic in my work. Thank you for sharing your time, and your workplace, with me. I'm so excited to be here.
          </p>
        </div>

        <!-- Image Block (PNG Portfolio Showcase) -->
        <div class="imageBlock" :class="{ active: imageBlockActive }" :style="imageBlockCameraStyle">
          <!-- Image Block Text -->
          <div class="textBlock paragraph textBodyM" :class="{ active: imageBlockTextActive }" :style="imageBlockTextContainerStyle">
            <div class="textBlock__inner" :style="imageBlockTextInnerStyle">
              <p>Some tidbits about me...</p>
            </div>
          </div>

          <!-- PNG Image 1 - Top Left -->
          <div class="png-image png-image-1" :style="pngImage1Style" @click="toggleProjectPopup('Ballymaloe')">
            <img src="/images/portfolio/Ballymaloe.png" alt="Ballymaloe project" class="png-img">
            <!-- Individual popup for this image -->
            <div v-if="activePopups.Ballymaloe" class="project-popup">
              <h3 class="project-popup__title">Ballymaloe</h3>
              <p class="project-popup__description">I love Ireland, I love potatoes, and I love cooking. Ballymaloe has all three, including a culinary school I plan to attend in 2027.</p>
            </div>
          </div>

          <!-- PNG Image 2 - Top Right -->
          <div class="png-image png-image-2" :style="pngImage2Style" @click="toggleProjectPopup('Bridesmaids')">
            <img src="/images/portfolio/Bridesmaids.jpg" alt="Bridesmaids project" class="png-img">
            <!-- Individual popup for this image -->
            <div v-if="activePopups.Bridesmaids" class="project-popup">
              <h3 class="project-popup__title">Bridesmaids</h3>
              <p class="project-popup__description">Bridesmaids is my favorite movie of all time. I think I can recite almost the entire script.</p>
            </div>
          </div>

          <!-- PNG Image 3 - Center Left -->
          <div class="png-image png-image-3" :style="pngImage3Style" @click="toggleProjectPopup('Warmies')">
            <img src="/images/portfolio/Warmies.png" alt="Warmies project" class="png-img">
            <!-- Individual popup for this image -->
            <div v-if="activePopups.Warmies" class="project-popup">
              <h3 class="project-popup__title">Warmies</h3>
              <p class="project-popup__description">I have started a Warmies cult. All my loved ones have them now. They smell like lavender, and can be used as a heating pad or cool compress.</p>
            </div>
          </div>

          <!-- PNG Image 4 - Bottom Right -->
          <div class="png-image png-image-4" :style="pngImage4Style" @click="toggleProjectPopup('Passport')">
            <img src="/images/portfolio/Passport.png" alt="Passport project" class="png-img">
            <!-- Individual popup for this image -->
            <div v-if="activePopups.Passport" class="project-popup">
              <h3 class="project-popup__title">British</h3>
              <p class="project-popup__description">That's right, everyone, I'm British. Regrettably, I don't have an accent, because we moved when I was little. But, I fake one when I need to increase my credibility.</p>
            </div>
          </div>

          <!-- PNG Image 5 - Bottom Center -->
          <div class="png-image png-image-5" :style="pngImage5Style" @click="toggleProjectPopup('Lost')">
            <img src="/images/portfolio/Lost.png" alt="Lost project" class="png-img">
            <!-- Individual popup for this image -->
            <div v-if="activePopups.Lost" class="project-popup">
              <h3 class="project-popup__title">Lost</h3>
              <p class="project-popup__description">Currently watching this for the first time — oscar worthy island drama.</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Section 2: Time Machine Image Stack -->
      <div class="section2" :class="{ active: currentSection === 2 }">
        <!-- Section 2 Text Block -->
        <div class="textBlock paragraph textBodyM" :class="{ active: section2TextActive }" style="left: 50%; top: 50%; transform: translate(-50%, -50%); width: 65rem;">
          <p class="textBlock__inner" :style="section2TextInnerStyle">
            Here's a snapshot of my work.
          </p>
        </div>

        <div class="timeMachine" :style="timeMachineContainerStyle">
          <!-- Time Machine Image Stack -->
          <div class="timeMachine__stack">
            <!-- Image 1 (Front) -->
            <div class="timeMachine__item" :style="timeMachineItem1Style">
              <img src="/images/timemachine/Huddles.png" alt="Time Machine Item 1" class="timeMachine__img">
              <div class="timeMachine__title" :style="timeMachineTitle1Style">
                <div class="timeMachine__title-top">Huddles (2025)</div>
                <div class="timeMachine__title-bottom">Lead Designer</div>
              </div>
            </div>

            <!-- Image 2 -->
            <div class="timeMachine__item" :style="timeMachineItem2Style">
              <img src="/images/timemachine/Huddles(2).png" alt="Time Machine Item 2" class="timeMachine__img">
              <div class="timeMachine__title" :style="timeMachineTitle2Style">
                <div class="timeMachine__title-top">Huddles (2025)</div>
                <div class="timeMachine__title-bottom">Lead Designer</div>
              </div>
            </div>

            <!-- Image 3 -->
            <div class="timeMachine__item" :style="timeMachineItem3Style">
              <img src="/images/timemachine/Calendar.png" alt="Time Machine Item 3" class="timeMachine__img">
              <div class="timeMachine__title" :style="timeMachineTitle3Style">
                <div class="timeMachine__title-top">Calendar (2025)</div>
                <div class="timeMachine__title-bottom">Lead Designer</div>
              </div>
            </div>

            <!-- Image 4 -->
            <div class="timeMachine__item" :style="timeMachineItem4Style">
              <img src="/images/timemachine/Lists.png" alt="Time Machine Item 4" class="timeMachine__img">
              <div class="timeMachine__title" :style="timeMachineTitle4Style">
                <div class="timeMachine__title-top">Lists (2024)</div>
                <div class="timeMachine__title-bottom">Senior Designer</div>
              </div>
            </div>

            <!-- Image 5 -->
            <div class="timeMachine__item" :style="timeMachineItem5Style">
              <img src="/images/timemachine/Items.png" alt="Time Machine Item 5" class="timeMachine__img">
              <div class="timeMachine__title" :style="timeMachineTitle5Style">
                <div class="timeMachine__title-top">Lists (2024)</div>
                <div class="timeMachine__title-bottom">Senior Designer</div>
              </div>
            </div>

            <!-- Image 6 (Back) -->
            <div class="timeMachine__item" :style="timeMachineItem6Style">
              <img src="/images/timemachine/Onboarding.gif" alt="Time Machine Item 6" class="timeMachine__img">
              <div class="timeMachine__title" :style="timeMachineTitle6Style">
                <div class="timeMachine__title-top">Onboarding (2021)</div>
                <div class="timeMachine__title-bottom">Lead Designer</div>
              </div>
            </div>
          </div>

          <!-- Thank You Text Block -->
          <div class="textBlock__inner text-block-thank-you" :style="thankYouTextInnerStyle">
            <p>Thank you 🫶🏾</p>
            <div class="textBlock__icons">
              <a href="https://www.linkedin.com/in/isha-kumar-29a479125" target="_blank" class="textBlock__icon">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn" class="icon-linkedin">
              </a>
              <a href="https://ishakumar.work/" target="_blank" class="textBlock__icon">
                <img src="/images/icons/bunny.png" alt="Bunny" class="icon-bunny">
              </a>
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

    // Viewport-based dimensions - Expanded Section 1
    const vh = window.innerHeight
    const totalHeight = ref(vh * 45)  // Total height with room for thank you text
    const section1Height = vh * 35    // Much larger Section 1 to accommodate all blocks
    const transaction1Height = vh * 10  // First transaction within section 1
    const transaction2Start = vh * 10   // Second transaction starts
    const transaction2Height = vh * 10  // Second transaction height
    const section2Start = vh * 35     // Section 2 starts later
    const section2Height = vh * 10    // Section 2 with room to scroll past last image to thank you text

    const sections = ref([
      { progress: 0 },
      { progress: 0 }
    ])

    // Transaction tracking with overlapping active states
    const transaction1Progress = ref(0)
    const textBlockProgress = ref(0)
    const textBlock2Progress = ref(0)
    const imageBlockProgress = ref(0)

    // Section 2 tracking
    const section2Progress = ref(0)
    const section2TextProgress = ref(0)

    // Active states for overlapping transactions - transaction1 starts active
    const transaction1Active = ref(true)
    const textBlockActive = ref(false)
    const textBlock2Active = ref(false)
    const imageBlockActive = ref(false)
    const imageBlockTextActive = ref(false)

    // Section 2 text block
    const section2TextActive = ref(false)

    // Individual popup states for each image
    const activePopups = ref({
      Ballymaloe: false,
      Bridesmaids: false,
      Warmies: false,
      Passport: false,
      Lost: false
    })

    // Toggle individual popup function
    const toggleProjectPopup = (projectName) => {
      // Close all other popups first
      Object.keys(activePopups.value).forEach(key => {
        if (key !== projectName) {
          activePopups.value[key] = false
        }
      })

      // Toggle the clicked popup
      activePopups.value[projectName] = !activePopups.value[projectName]
    }

    // Three.js setup
    let scene, camera, renderer
    let textMesh1, textMesh2

    // Calculate section 1 progress (0-1) based on scroll position
    const section1Progress = computed(() => {
      if (scrollY.value < 0) return 0
      if (scrollY.value > section1Height) return 1
      return scrollY.value / section1Height
    })

    // Overlapping transaction logic with directional hysteresis
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
        section2Progress.value = Math.max(0, rawProgress) // Allow progress > 1.0

        // Section 2 text block: appears at the start of section 2
        if (section2Progress.value >= 0 && section2Progress.value <= 0.3) {
          section2TextActive.value = true
          // Calculate progress within the active range (0-30%)
          section2TextProgress.value = Math.min(1, section2Progress.value / 0.3)
        } else {
          section2TextActive.value = false
          section2TextProgress.value = 0
        }

        // For display: show 100% when we've reached the point where text should be visible
        if (section2Progress.value >= 0.8) {
          sections.value[1].progress = 1.0
        } else {
          sections.value[1].progress = Math.min(1, section2Progress.value / 0.8)
        }
      }
    }

    // Transaction 1 styles with movement + scaling
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
      // Move slower than titles for parallax effect
      const translateY = -(progress * 75) // Move to about -75lvh (slower than titles)

      return {
        transform: `translate3d(0px, ${translateY}lvh, 0px)`
      }
    })


    // Text block inner style with subtle scale animation
    const textBlockInnerStyle = computed(() => {
      const progress = textBlockProgress.value

      if (progress === 0) {
        return {
          transform: 'scale(0.85)'
        }
      } else {
        // Uses translate(0px, 0px) when active, with scale animation
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
        // Uses translate(0px, 0px) when active, with scale animation
        const scale = 0.85 + (progress * 0.15) // Scale from 0.85 to 1.0
        return {
          transform: `translate(0px, 0px) scale(${scale})`
        }
      }
    })

    // Image block styles - three-layer animation
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

    // Camera/viewport style for the entire imageBlock - perspective shift
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

    // Section 2 Text Block style - matches section 1 text blocks exactly
    const section2TextInnerStyle = computed(() => {
      const progress = section2TextProgress.value

      if (progress === 0) {
        return {
          transform: 'scale(0.85)'
        }
      } else {
        // Uses translate(0px, 0px) when active, with scale animation
        const scale = 0.85 + (progress * 0.15) // Scale from 0.85 to 1.0
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
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    })

    // Time Machine Item Styles - create the 3D stack effect
    // Time Machine cycling logic - two phases: scale-in then cycle
    const getTimeMachineItemStyle = (itemIndex) => {
      const progress = section2Progress.value
      const totalImages = 6

      if (progress < 0.4) {
        // Phase 1: Scale in with fixed stacking positions - starts at 40% to give text time
        const scalePhase = Math.max(0, (progress - 0.3) / 0.1) // Only start scaling at 30% progress
        const opacity = scalePhase

        // Time Machine stacking: each image 15% smaller and positioned higher
        const stackScale = Math.pow(0.85, itemIndex) // 15% smaller than previous (1.0, 0.85, 0.72, 0.61, 0.52)
        const finalScale = stackScale * (0.4 + (scalePhase * 0.6)) // Apply overall scale-in

        // Position each image higher so tops are visible
        const stackOffsetY = itemIndex * -60 // Position progressively higher to show tops
        const baseZ = itemIndex * -100 // Z-depth for proper layering

        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, calc(-50% + ${stackOffsetY}px)) translateZ(${baseZ}px) scale(${finalScale})`,
          opacity: opacity,
          zIndex: totalImages - itemIndex, // Front image has highest z-index
          transition: 'all 0.2s ease-out'
        }
      } else {
        // Phase 2: Cycle through the stack - determine which image is currently active
        const tunnelPhase = (progress - 0.4) / 0.4 // Starts at 40% now, with shorter cycle time
        const rawActiveIndex = tunnelPhase * totalImages // 0 to 5 so we can scroll past the last image
        const activeImageIndex = Math.round(rawActiveIndex) // Which image should be active (0-5, where 5 means past all images)

        // Calculate this image's relative position in the stack from the active image
        const positionInStack = itemIndex - activeImageIndex

        // Each image maintains its stack characteristics based on position relative to active
        let stackScale, stackOffsetY, opacity, zIndex

        if (positionInStack < 0) {
          // This image has been passed - fade out smoothly without scaling
          stackScale = 1.0 // Keep original size, don't scale down
          stackOffsetY = 0 // Keep centered position
          opacity = 0 // Just fade out
          zIndex = 1
        } else if (positionInStack === 0) {
          // This is the active image - front and center
          stackScale = 1.0
          stackOffsetY = 0
          opacity = 1.0
          zIndex = totalImages + 1
        } else {
          // This image is ahead in the stack - adjust position based on how many images are left
          // Only count images that haven't been passed yet
          const remainingImagesAhead = totalImages - activeImageIndex - 1
          const adjustedPosition = positionInStack <= remainingImagesAhead ? positionInStack : remainingImagesAhead + 1

          stackScale = Math.pow(0.85, adjustedPosition)
          stackOffsetY = adjustedPosition * -60 // Position higher to show tops
          opacity = adjustedPosition <= remainingImagesAhead ? Math.max(0.4, 0.8 - (adjustedPosition * 0.1)) : 0
          zIndex = totalImages - adjustedPosition
        }

        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, calc(-50% + ${stackOffsetY}px)) translateZ(${positionInStack * -100}px) scale(${stackScale})`,
          opacity: opacity,
          zIndex: zIndex,
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }
      }
    }

    const timeMachineItem1Style = computed(() => getTimeMachineItemStyle(0))

    const timeMachineItem2Style = computed(() => getTimeMachineItemStyle(1))
    const timeMachineItem3Style = computed(() => getTimeMachineItemStyle(2))
    const timeMachineItem4Style = computed(() => getTimeMachineItemStyle(3))
    const timeMachineItem5Style = computed(() => getTimeMachineItemStyle(4))
    const timeMachineItem6Style = computed(() => getTimeMachineItemStyle(5))

    // Time Machine Title Styles - only show title for the front image
    const getTimeMachineTitleStyle = (itemIndex) => {
      const progress = section2Progress.value
      if (progress < 0.4) {
        // No titles during scale-in phase
        return {
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }
      } else {
        // Phase 2: Show title only for active (front) image
        const tunnelPhase = (progress - 0.4) / 0.4
        const totalImages = 6
        const rawActiveIndex = tunnelPhase * totalImages
        const activeImageIndex = Math.round(rawActiveIndex)

        // Only show title if this is the active image
        const isActive = activeImageIndex === itemIndex
        return {
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }
      }
    }

    const timeMachineTitle1Style = computed(() => getTimeMachineTitleStyle(0))
    const timeMachineTitle2Style = computed(() => getTimeMachineTitleStyle(1))
    const timeMachineTitle3Style = computed(() => getTimeMachineTitleStyle(2))
    const timeMachineTitle4Style = computed(() => getTimeMachineTitleStyle(3))
    const timeMachineTitle5Style = computed(() => getTimeMachineTitleStyle(4))
    const timeMachineTitle6Style = computed(() => getTimeMachineTitleStyle(5))

    // Thank You Text Block - appears after scrolling past all Time Machine images
    const thankYouTextInnerStyle = computed(() => {
      const progress = section2Progress.value

      if (progress < 0.4) {
        // Not visible during scale-in phase
        return {
          transform: 'scale(0.85)',
          opacity: 0,
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }
      }

      const tunnelPhase = (progress - 0.4) / 0.4 // Match Time Machine logic
      const totalImages = 6
      const rawActiveIndex = tunnelPhase * totalImages // 0 to 5 to match the Time Machine logic

      // Show thank you text when we've completely scrolled past all images
      if (rawActiveIndex > totalImages) {
        // Calculate how far past all images we are
        const pastLastImage = (rawActiveIndex - totalImages) / 1 // Normalize to 0-1
        const textProgress = Math.min(1, pastLastImage * 3) // Scale faster for quicker appearance

        const scale = 0.3 + (textProgress * 0.7) // Scale from 0.3 to 1.0
        const opacity = textProgress

        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: opacity,
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }
      }

      // Not visible if we haven't reached the end
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0.3)',
        opacity: 0,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    })

    // PNG Image styles - reach full scale by 90% scroll progress
    const pngImage1Style = computed(() => {
      const progress = imageBlockProgress.value

      if (progress === 0) {
        return {
          position: 'absolute',
          top: '8%',
          left: '15%',
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
          left: '15%',
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
          left: '5%',
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
          left: '5%',
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
          bottom: '12%',
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
          bottom: '12%',
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
      const overallScrollProgress = section1Progress.value

      // Only show pink gradient at the very beginning (before 30% scroll)
      // This prevents pink from reappearing during gaps between text blocks
      if (overallScrollProgress < 0.30) {
        // Pure pink gradient when still in initial transaction phase
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
      } else if (overallScrollProgress >= 0.55 && textBlock2ProgressValue === 0) {
        // Between text block 1 and 2 (55% - 65%), or after text block 2 ends - stay blue
        return {
          background: 'rgb(229, 239, 251)' // #E5EFFB (blue)
        }
      } else {
        // First text block active or transition from pink to blue
        const r1 = 251, g1 = 229, b1 = 238 // #FBE5EE (pink)
        const r2 = 229, g2 = 239, b2 = 251 // #E5EFFB (blue)

        // Use either text block progress or overall scroll progress for transition
        const progress = textBlock1Progress > 0 ? textBlock1Progress : Math.min(1, (overallScrollProgress - 0.30) / 0.25)
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

      // Overlapping transaction states
      transaction1Active,
      textBlockActive,
      textBlock2Active,
      imageBlockActive,
      imageBlockTextActive,
      section2TextActive,
      transaction1Progress,
      textBlockProgress,
      textBlock2Progress,
      imageBlockProgress,
      section2Progress,
      section2TextProgress,

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
      section2TextInnerStyle,
      flowerLogoStyle,
      timeMachineContainerStyle,
      timeMachineItem1Style,
      timeMachineItem2Style,
      timeMachineItem3Style,
      timeMachineItem4Style,
      timeMachineItem5Style,
      timeMachineItem6Style,
      timeMachineTitle1Style,
      timeMachineTitle2Style,
      timeMachineTitle3Style,
      timeMachineTitle4Style,
      timeMachineTitle5Style,
      timeMachineTitle6Style,
      thankYouTextInnerStyle,

      // Project popup
      activePopups,
      toggleProjectPopup,

      // Methods
      goToSection
    }
  }
}
</script>