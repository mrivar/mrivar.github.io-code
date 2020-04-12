<template>
  <InfoBubble :title="title">
    <p class="value">{{ value }}</p>
    <p class="note" v-if="note">{{ note }}</p>
  </InfoBubble>
</template>

<script>
import InfoBubble from '~/components/atoms/InfoBubble.vue';

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

<style scoped>
.value {
  font-size: 2.5rem;
  margin-top: 50%;
}

.note {

}
</style>
