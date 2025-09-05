<template>
  <div class="grid-columns-container">
    <div class="grid-left">
      <h1 class="title">Hi, I'm Martín<br> and I'm a<br> developer</h1>
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

<script>
</script>

<style scoped lang="scss">
.grid-columns-container {
  column-gap: 30px;
  padding-top: 100px;
}
.grid-left {
  & .title {
    font-size: $text-xxxl;
    text-align: left;
    margin-bottom: 30px;
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
    grid-template-rows: auto auto;
    grid-template-areas: "left""right";
  }
  .grid-right {
    padding-top: 20px;
    justify-self: left;
  }
}
</style>
