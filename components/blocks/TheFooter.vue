<template>
  <footer>
    <NuxtLink to="https://github.com/mrivar" class="text" target="_blank">
      <Icon name="grommet-icons:github"></Icon>
    </NuxtLink>
    <NuxtLink to="https://www.linkedin.com/in/martin-de-la-riva/" class="text" target="_blank">
      <Icon name="devicon-plain:linkedin"></Icon>
    </NuxtLink>
    <NuxtLink to="https://mrivar.github.io" class="text">
      <Icon name="tabler:world"></Icon>
    </NuxtLink>
    <NuxtLink to="https://open.spotify.com/user/bedjnwu0qyjkktda8zx2wvxmn" class="text" target="_blank">
      <Icon name="streamline:spotify"></Icon>
    </NuxtLink>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;

  & a {
    font-size: $text-l;
  }
}

@include phone {
  footer {
    padding-bottom: 20px;
  }
}
</style>
