<template>
  <div class="cv-container">
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
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.cv-container {
  justify-self: center;
  margin-top: 50px;
  margin-bottom: 24px;
  max-width: 700px;
  font-size: $text-m;
}
@include phone {
  .cv-container {
    margin-top: 0;
  }
}
</style>
