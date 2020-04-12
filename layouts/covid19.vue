<template>
  <main>
    <TheHeader />
    <nuxt v-if="!$slots.default" />
    <slot />
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from '~/components/organisms/TheHeader.vue';
import TheFooter from '~/components/organisms/TheFooter.vue';

export default {
  name: "covid19",
  head() {
    return {
      title: 'Martín Riva'
    }
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/style/colors.scss";

main {
  background-color: $white;
  display: grid;
  grid-template-columns: minmax(1.875rem,1fr) minmax(auto,86.25rem) minmax(1.875rem,1fr);
  grid-template-rows: min-content max-content min-content;
  grid-template-areas:
      ". header ."
      ". content ."
      ". footer .";
}

header {
  grid-area: header;
  padding: 1.5rem 0 .5rem;
  position: relative;
}

.main-container {
  grid-area: content;
  margin: 0;
  min-height: 85vh;
  padding: 20px;
  background-color: $light-light-gray;
}

footer {
  grid-area: footer;
}
</style>
