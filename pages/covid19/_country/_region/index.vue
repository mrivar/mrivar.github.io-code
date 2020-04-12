<template>
  <div>{{ this.$route.params }}</div>
</template>

<script>
export default {
  layout: "covid19CountryStats",
  validate ({ params }) {
    // region must exist
    return false
  }
}
</script>

<style>

</style>
