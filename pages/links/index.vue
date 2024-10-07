<script setup lang="ts">
const links = [
  {
    name: "Github",
    icon: "grommet-icons:github",
    path: "https://github.com/mrivar"
  },
  {
    name: "LinkedIn",
    icon: "devicon-plain:linkedin",
    path: "https://www.linkedin.com/in/martin-de-la-riva/"
  },
  /*{
    name: "Website (you're already on it!)",
    icon: "tabler:world",
    path: "/",
    _blank: false
  },*/
  /*{
    name: "Curriculum Vitae",
    icon: "streamline:business-user-curriculum",
    path: "/cv/",
    _blank: false
  },*/
  {
    name: "Strava",
    icon: "simple-icons:strava",
    path: "https://www.strava.com/athletes/martin_riva"
  },
  {
    name: "Letterboxd",
    //icon: "fa6-brands:square-letterboxd",
    icon: "simple-icons:letterboxd",
    path: "https://letterboxd.com/martin__rv/"
  },
  /*{
    name: "Spotify",
    icon: "streamline:spotify",
    path: "https://open.spotify.com/user/bedjnwu0qyjkktda8zx2wvxmn"
  }*/
]
</script>

<template>
  <div>
    <TheTitle>Links</TheTitle>
    <div class="link-container">
      <LinkList :links="links" />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
