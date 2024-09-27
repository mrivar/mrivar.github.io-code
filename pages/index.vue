<template>
  <div class="main-container">
    <div class="grid-rows">
      <TheHeader />
      <div class="grid-columns-container">
        <div class="grid-left">
          <h1 class="title loading">Hi, I'm Martín<br> and I'm a<br> developer</h1>
          <div class="red-block"></div>
        </div>
        <div class="grid-right">
          <h2 class="text">
            I am a Full Stack Developer with 8+ years of experience.<br>
            I enjoy building both the front end and back end of applications.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/blocks/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped lang="scss">
@import "./assets/styles/devices.scss";

.grid-rows {
  display: grid;
  grid-template-rows: auto 1fr;
}
.grid-columns-container {
  column-gap: 30px;
  padding-top: 100px;
}
.grid-left {
  & .title {
    font-size: 66px;
    text-align: left;
    margin-bottom: 30px;
  }
}
.grid-right {
  justify-self: right;
  & h2 {
    text-align: left;
    max-width: 275px;
  }
}

@include phone {
  .grid-columns-container {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "left""right";
  }
  .grid-right {
    justify-self: center;
  }
}
</style>
