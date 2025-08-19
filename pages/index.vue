<template>
  <div class="grid-columns-container">
    <div class="grid-left">
      <h1 class="title">
        Hi, I'm Martín<br>
        and I'm a<br>
        <NuxtLink v-if="random === 0" to="https://github.com/mrivar" target="_blank">developer <img src="@/public/arrow.svg" alt="arrow"/></NuxtLink>
        <span v-if="random === 1">climber</span>
        <NuxtLink v-if="random === 2" to="https://www.strava.com/athletes/martin_riva" target="_blank">runner <img src="@/public/arrow.svg"  alt="arrow"/></NuxtLink>
      </h1>
      <div class="red-block"></div>
    </div>
    <div class="grid-right">
      <h2 class="subtitle text">
        Welcome to my site!<br>
        I am a Full Stack Developer with 9+ years of experience.<br>
        I enjoy building both the front end and back end of applications.
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const random = useState('random', () => getRandomInt(3))
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
</script>

<style scoped lang="scss">
.grid-columns-container {
  grid-template-columns: 389px 1fr;
  column-gap: 30px;
  padding-top: 100px;
}
.grid-left {
  & .title {
    font-size: $text-xxxl;
    text-align: left;
    margin-bottom: 30px;
    & a {
      display: flex;
      & img {
        filter: invert(10%) sepia(5%) saturate(4496%) hue-rotate(195deg) brightness(93%) contrast(84%);
        align-self: center;
        height: 20px;
        html.dark-mode & {
          filter: invert(94%) sepia(51%) saturate(1620%) hue-rotate(183deg) brightness(114%) contrast(104%);
        }
      }
    }
  }
}
.grid-right {
  justify-self: right;
  padding-top: 60px;
  & h2 {
    text-align: left;
    max-width: 275px;
  }
}

@include phone {
  .grid-columns-container {
    padding-top: 0;
    grid-template-columns: auto;
    grid-template-rows: max-content max-content;
    grid-template-areas: "left""right";
  }
  .grid-right {
    padding-top: 20px;
    justify-self: left;
  }
}
</style>
