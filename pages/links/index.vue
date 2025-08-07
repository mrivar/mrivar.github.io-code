<template>
  <div>
    <TheTitle>Links</TheTitle>
    <LinkList :links="links" />
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: "Curriculum Vitae",
    icon: "ph:read-cv-logo",
    path: "/cv/",
    target: null
  },
  {
    name: "Github",
    icon: "grommet-icons:github",
    path: "https://github.com/mrivar",
    target: "_blank"
  },
  {
    name: "LinkedIn",
    icon: "devicon-plain:linkedin",
    path: "https://www.linkedin.com/in/martin-de-la-riva/",
    target: "_blank"
  },
  {
    name: "Strava",
    icon: "simple-icons:strava",
    path: "https://www.strava.com/athletes/martin_riva",
    target: "_blank"
  },
  {
    name: "Letterboxd",
    //icon: "fa6-brands:square-letterboxd",
    icon: "simple-icons:letterboxd",
    path: "https://letterboxd.com/martin__rv/",
    target: "_blank"
  },
  /*{
    name: "Website (you're already on it!)",
    icon: "tabler:world",
    path: "/",,
    target: "_blank'
  },*/
  /*{
    name: "Spotify",
    icon: "streamline:spotify",
    path: "https://open.spotify.com/user/bedjnwu0qyjkktda8zx2wvxmn"
  }*/
]
</script>

<style scoped lang="scss">
</style>
