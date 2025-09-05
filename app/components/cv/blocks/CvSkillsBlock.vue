<template>
  <div class="skill-block box-1">
    <span class="title text">{{ title }}</span>
    <!--CvTitle class="skill-block-title">frontend</CvTitle-->
    <div class="skill-tags">
      <span v-for="item in items" class="skill text box-1">{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, items } = defineProps({
  title: String,
  items: Array as PropType<Array<String>>
})
</script>

<style scoped lang="scss">
.skill-block {
  background-color: $purple-light-2;
  padding: 24px 32px 32px;
}

.title {
  font-size: $text-xl;
  margin-bottom: 24px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.skill {
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.1);
}

html.dark-mode {
  & .skill-block {
    background-color: $purple-light;
  }

  & .skill {
    background-color: $purple-light;
  }
}
</style>
