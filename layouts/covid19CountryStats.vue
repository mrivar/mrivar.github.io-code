<template>
  <covid19>
    <div class="main-container">
      <nuxt/>
    </div>
  </covid19>
</template>

<script>
// this works as a nested layout
import covid19 from '~/layouts/covid19.vue';

export default {
  name: "covid19CountryStats",
  components: {
    covid19
  }
}
</script>

<style scoped lang="scss">
.main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  //grid-template-rows: min-content max-content min-content;
  grid-column-gap: 10px;
  grid-template-areas:"infobubble infobubble infobubble";
}
</style>
