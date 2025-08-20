<template>
  <CvBlock title="skills">
    <div class="skills" ref="skills">
      <div class="skills-container">
        <CvSkillsBlock title="frontend" :items="frontend"/>
        <CvSkillsBlock title="backend" :items="backend"/>
        <CvSkillsBlock title="others" :items="others"/>
      </div>
    </div>
    <div class="skills-filler" ref="skills-filler"></div>
  </CvBlock>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'

const frontend = ["vue", "nuxt", "angular", "react", "typescript", "javascript"]
const backend = ["kotlin", "python", "docker", "k8s", "microservices", "ci/cd"]
const others = ["clean code", "solid principles", "problem solving", "critical thinking", "communication"]

const skills = useTemplateRef<HTMLInputElement>('skills')
const skillsFiller = useTemplateRef<HTMLInputElement>('skills-filler')
let skillsHeight: Number = -1

watchEffect(() => {
  if (skills.value) {
    skillsHeight = skills.value?.offsetHeight
    console.debug('updated height')
  }
  if (skillsFiller.value && skillsHeight != -1) {
    skillsFiller.value.style.height = skillsHeight + 'px'
    console.debug('set height ' + skillsHeight + 'px')
  }
})
</script>

<style scoped lang="scss">
.skills {
  // positioning
  position: absolute;
  left: 0;
  width: 100%;
  // others
  padding: 48px;
  margin-top: 24px;
  background-color: $primary-color;
  box-shadow: inset 0 20px 25px rgba(0, 0, 0, 0.1), inset 0px -20px 25px rgba(0, 0, 0, 0.1),
  inset 0 10px 10px rgba(0, 0, 0, 0.04), inset 0px -10px 10px rgba(0, 0, 0, 0.04)
}

.skills-filler {
  margin-top: 24px;
}

.skills-container {
  // griding
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  // others
  max-width: 1100px;
  margin: auto
}
</style>
