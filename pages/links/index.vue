<script setup lang="ts">

</script>

<template>
  <div>
    <div class="title-container">
      <h1 class="title">Links</h1>
      <div class="red-block"></div>
    </div>
    <div class="link-main-container">
      <NuxtLink to="https://github.com/mrivar" class="link-container text" target="_blank">
        <Icon name="grommet-icons:github"></Icon> Github
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/martin-de-la-riva/" class="link-container text" target="_blank">
        <Icon name="devicon-plain:linkedin"></Icon> LinkedIn
      </NuxtLink>
      <NuxtLink to="https://mrivar.github.io" class="link-container text">
        <Icon name="tabler:world"></Icon> Website (you're already on it!)
      </NuxtLink>
      <div class="last-links-container">
        <NuxtLink to="https://open.spotify.com/user/bedjnwu0qyjkktda8zx2wvxmn" class="text">
          <Icon name="streamline:spotify"></Icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-container {
  margin-bottom: 50px;
  & .title {
    margin-bottom: 15px;
  }
}
.link-main-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  & .link-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 300px;
    border-radius: 10px;
    margin: 15px 0;
    padding: 20px 0;
    background-color: $light-red;
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 7px 6px 0 $dark-red;
    font-size: $text-m;
    transition: all  0.1s ease-in-out;

    &:hover {
      box-shadow: 3px 4px 0 $dark-red;
      transform: translate(3px, 1px);
    }

    html.dark-mode & {
      background-color: $skull-white;
      box-shadow: 7px 6px 0 $light-gray;
      color: $dark-gray;

      &:hover {
        box-shadow: 3px 4px 0 $light-gray;
      }
    }
  }

  & .last-links-container {
    display: flex;
    margin-top: 26px;
  }

  span {
    font-size: $text-xl;
  }
}
</style>
