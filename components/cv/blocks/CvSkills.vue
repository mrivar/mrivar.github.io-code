<template>
  <CvBlock title="skills">
    <div class="skills" ref="skills">
      <div>fr</div>
      <div>bck</div>
      <div>oth</div>
    </div>
    <div ref="skills-container"></div>
  </CvBlock>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'

const skills = useTemplateRef('skills')
const skillsContainer = useTemplateRef('skills-container')
let skillsHeight: Number = -1

watchEffect(() => {
  if (skills.value) {
    skillsHeight = skills.value?.offsetHeight
    console.log('updated height')
  }
  if (skillsContainer.value && skillsHeight != -1) {
    skillsContainer.value.style.height = skillsHeight + 'px'
    console.log('set height')
  }
})
</script>

<style scoped lang="scss">
.skills {
  // positioning
  position: absolute;
  left: 0;
  width: 100%;
  // griding
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  // others
  padding: 32px;
  background-color: $primary-color;
}
</style>
