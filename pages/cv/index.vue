<template>
  <div class="content-container">
    <template v-if="!mounted" class="text">
      <Skeleton />
    </template>

    <template v-else>
      <CvBlock title="about me">
        I’m a Developer with a Master’s in Artificial Intelligence, with 9+ years of experience in building
        scalable backend systems and ML solutions. Passionate about clean code, distributed
        systems, and meaningful tech.<br><br>
        What I value in a job opportunity is <b class="b">how interesting the project/s is</b> (technologically and/or
        socially), a <b class="b">good working environment</b> (knowledge sharing, teamwork) and a <b class="b">modern company culture</b>
        (remote work, flexible hours, personal development, etc.).
      </CvBlock>
      <CvSkills />
      <CvExperience />
      <CvEducation />
      <CvPublications />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let mounted = ref<Boolean>(false)

onMounted(() => {
  mounted.value = true
})
</script>

<style scoped lang="scss"></style>
