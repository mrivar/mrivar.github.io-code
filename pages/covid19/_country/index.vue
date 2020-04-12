<template>
  <div class="main-container">
    <InfoBubbleNumber title="title name" value="10" note="asd"></InfoBubbleNumber>
    <InfoBubbleNumber value="100" note="asd"></InfoBubbleNumber>
    <InfoBubbleNumber title="title3" value="1000"></InfoBubbleNumber>
  </div>
</template>

<script>
import InfoBubbleNumber from '~/components/atoms/InfoBubbleNumber.vue';

export default {
  layout: "covid19",
  validate ({ params }) {
    //country must exist
    return true
  },
  components: {
    InfoBubbleNumber
  },
  data() {
    return {
      infected: 500,
      infected_new: 100,
      dead: 50,
      dead_new: 10,
      recovered: 200,
      recovered_new: 50
    }
  }
}
</script>

<style scoped lang="scss">
.main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
