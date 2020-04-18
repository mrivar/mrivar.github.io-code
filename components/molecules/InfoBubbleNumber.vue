<template>
  <InfoBubble :title="title">
    <div class="value-container">
      <p class="value">{{ value }}</p>
      <p class="note" v-if="note">{{ note }}</p>
    </div>
    <slot></slot>
  </InfoBubble>
</template>

<script>
import InfoBubble from '~/components/molecules/InfoBubble.vue';

export default {
  name: "InfoBubbleNumber",
  components: {
    InfoBubble
  },
  props: {
    title: {
      type: String
    },
    value: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "blue"
    },
    note: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.value-container {
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & .value {
    font-size: 2.5rem;
    top: 50%;
  }

  & .note {

  }

  & .chart {
    position: absolute;
  }
}

</style>
