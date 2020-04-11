<template>
  <main>
    <TheHeader />
    <nuxt />
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
  grid-template-rows: -webkit-min-content -webkit-max-content -webkit-min-content;
  grid-template-rows: min-content max-content min-content;
  grid-template-areas:
      ". header ."
      ". content ."
      ". footer .";
}

header {
  grid-area: header;
  padding: 1.75rem 1rem .5rem;
  position: relative;
}

.main-container {
  grid-area: content;
  min-height: 90vh;
}

footer {
  grid-area: footer;
}
</style>
