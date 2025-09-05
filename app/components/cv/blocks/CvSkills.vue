<template>
  <div class="cv-block">
    <CvTitle class="cv-block-title">skills</CvTitle>
    <div class="skills" ref="skills">
      <div class="skills-grid">
        <CvSkillsBlock title="frontend" :items="frontend" />
        <CvSkillsBlock title="backend" :items="backend" />
        <CvSkillsBlock title="others" :items="others" />
      </div>
    </div>
    <div class="skills-filler" ref="skills-filler"></div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'

const frontend = ['vue', 'nuxt', 'angular', 'react', 'typescript', 'javascript']
const backend = ['kotlin', 'python', 'docker', 'k8s', 'microservices', 'ci/cd']
const others = [
  'clean code',
  'solid principles',
  'problem solving',
  'agile',
  'critical thinking',
  'communication'
]

const skills = useTemplateRef<HTMLInputElement>('skills')
const skillsFiller = useTemplateRef<HTMLInputElement>('skills-filler')
let skillsHeight: Number = -1

let observer: ResizeObserver | null = null

const handleResize = (entries: ResizeObserverEntry[]) => {
  console.debug("resize event")
  if (
    skillsFiller.value
    && skills.value
    && skillsHeight != skills.value.offsetHeight
  ) {
    skillsHeight = skills.value.offsetHeight
    console.debug("set new height:" + skillsHeight + "px")
    skillsFiller.value.style.height = skillsHeight + 'px'
  }
}

onMounted(() => {
  if (skills.value) {
    observer = new ResizeObserver(handleResize)
    observer.observe(skills.value)
  }
})

onBeforeUnmount(() => {
  if (observer && skills.value) {
    observer.unobserve(skills.value)
    observer.disconnect()
  }
})

</script>

<style scoped lang="scss">
.cv-block {
  text-align: left;
  margin: auto auto 80px;
}

.cv-block-title {
  margin-bottom: 24px;
}

.skills {
  // positioning
  position: absolute;
  left: 0;
  width: 100%;
  // others
  padding: 64px 48px;
  margin-top: 24px;
  background-color: $primary-color;
  box-shadow: inset 0 20px 25px rgba(0, 0, 0, 0.15),
    inset 0px -20px 25px rgba(0, 0, 0, 0.15),
    inset 0 10px 10px rgba(0, 0, 0, 0.06),
    inset 0px -10px 10px rgba(0, 0, 0, 0.06);
}

.skills-filler {
  margin-top: 24px;
}

.skills-grid {
  // griding
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 48px;
  // others
  max-width: 1150px;
  margin: auto;
}

@include tablet {
  .skills-grid {
    column-gap: 32px;
  }
}

@include phone {
  .skills {
    padding: 48px;
  }

  .skills-grid {
    grid-template-columns: 75vw;
    grid-template-rows: auto auto auto;
    justify-content: center;
    row-gap: 32px;
  }
}
</style>
