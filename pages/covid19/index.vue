<template>
  <div>
    <h1 class="title">Pick a city to see its situation</h1>
    <el-input
        placeholder="Pick a city"
        prefix-icon="el-icon-office-building"
        v-model="city"
    />
  </div>
</template>

<script>
export default {
  layout: "covid19",
}
</script>

<style scoped lang="scss">
@import "~/assets/style/colors.scss";

.title {
  color: $blue;
  font-weight: 400;
  letter-spacing: inherit;
  margin-bottom: 40px;
}
</style>
