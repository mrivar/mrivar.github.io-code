<template>
  <footer>
    <div class="footer-left text">
      <NuxtLink to="/" class="text">
        <span class="bold">martín</span>
        <span class="light">riva</span>
      </NuxtLink>
    </div>
    <div class="footer-center">
      <NuxtLink to="https://github.com/mrivar" class="text" target="_blank">
        <Icon name="grommet-icons:github"></Icon>
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/martin-de-la-riva/" class="text" target="_blank">
        <Icon name="devicon-plain:linkedin"></Icon>
      </NuxtLink>
      <NuxtLink to="https://www.strava.com/athletes/martin_riva" class="text" target="_blank">
        <Icon name="simple-icons:strava"></Icon>
      </NuxtLink>
      <NuxtLink to="https://letterboxd.com/martin__rv/" class="text" target="_blank">
        <Icon name="simple-icons:letterboxd"></Icon>
      </NuxtLink>
      <NuxtLink to="https://www.goodreads.com/martin-riva/" class="text" target="_blank">
        <Icon name="simple-icons:goodreads"></Icon>
      </NuxtLink>
    </div>
    <div></div>
  </footer>
</template>

<script>
</script>

<style scoped lang="scss">
footer {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 30px 0;

  .footer-left {
    display: flex;
    align-self: start;
    font-size: $text-l;

    @include phone {
      & a {
        display: none;
      }
    }
  }
  .footer-center {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 20px;

    & a {
      display: flex;
      font-size: $text-l;
    }
  }
}

@include phone {
  footer {
    padding-bottom: 20px;
  }
}
</style>
