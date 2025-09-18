<template>
  <div class="section2" :class="{ active: isActive }">
    <div class="timeMachine" :style="timeMachineStyle">
      <div class="timeMachine__item" :style="item1Style">
        <img src="/images/timemachine/Huddles.png" alt="Time Machine Item 1" class="timeMachine__img">
        <div class="timeMachine__title" :style="title1Style">
          <div class="timeMachine__title-top">Huddles (2025)</div>
          <div class="timeMachine__title-bottom">Lead Designer</div>
        </div>
      </div>
      <div class="timeMachine__item" :style="item2Style">
        <img src="/images/timemachine/Huddles(2).png" alt="Time Machine Item 2" class="timeMachine__img">
        <div class="timeMachine__title" :style="title2Style">
          <div class="timeMachine__title-top">Huddles (2025)</div>
          <div class="timeMachine__title-bottom">Lead Designer</div>
        </div>
      </div>
      <div class="timeMachine__item" :style="item3Style">
        <img src="/images/timemachine/Calendar.png" alt="Time Machine Item 3" class="timeMachine__img">
        <div class="timeMachine__title" :style="title3Style">
          <div class="timeMachine__title-top">Calendar (2025)</div>
          <div class="timeMachine__title-bottom">Lead Designer</div>
        </div>
      </div>
      <div class="timeMachine__item" :style="item4Style">
        <img src="/images/timemachine/Lists.png" alt="Time Machine Item 4" class="timeMachine__img">
        <div class="timeMachine__title" :style="title4Style">
          <div class="timeMachine__title-top">Lists (2024)</div>
          <div class="timeMachine__title-bottom">Senior Designer</div>
        </div>
      </div>
      <div class="timeMachine__item" :style="item5Style">
        <img src="/images/timemachine/Items.png" alt="Time Machine Item 5" class="timeMachine__img">
        <div class="timeMachine__title" :style="title5Style">
          <div class="timeMachine__title-top">Lists (2024)</div>
          <div class="timeMachine__title-bottom">Senior Designer</div>
        </div>
      </div>
      <div class="timeMachine__item" :style="item6Style">
        <img src="/images/timemachine/Onboarding.gif" alt="Time Machine Item 6" class="timeMachine__img">
        <div class="timeMachine__title" :style="title6Style">
          <div class="timeMachine__title-top">Onboarding (2021)</div>
          <div class="timeMachine__title-bottom">Lead Designer</div>
        </div>
      </div>
    </div>

    <div class="textBlock paragraph textBodyM" style="position: absolute; bottom: 10vh; left: 50%; transform: translateX(-50%); width: 65rem; text-align: center;">
      <p class="textBlock__inner" :style="textStyle">
        thank you! let's keep in touch
      </p>
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
</template>

<script>
export default {
  name: 'TimeMachine',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    timeMachineStyle: {
      type: Object,
      default: () => ({})
    },
    item1Style: {
      type: Object,
      default: () => ({})
    },
    item2Style: {
      type: Object,
      default: () => ({})
    },
    item3Style: {
      type: Object,
      default: () => ({})
    },
    item4Style: {
      type: Object,
      default: () => ({})
    },
    item5Style: {
      type: Object,
      default: () => ({})
    },
    item6Style: {
      type: Object,
      default: () => ({})
    },
    textStyle: {
      type: Object,
      default: () => ({})
    },
    title1Style: {
      type: Object,
      default: () => ({})
    },
    title2Style: {
      type: Object,
      default: () => ({})
    },
    title3Style: {
      type: Object,
      default: () => ({})
    },
    title4Style: {
      type: Object,
      default: () => ({})
    },
    title5Style: {
      type: Object,
      default: () => ({})
    },
    title6Style: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>