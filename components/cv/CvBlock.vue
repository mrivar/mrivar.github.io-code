<template>
  <div class="cv-block">
    <CvTitle class="cv-block-title">{{ title }}</CvTitle>
    <p class="cv-block-description text" v-if="$slots.default" >
      <slot />
    </p>
    <div v-for="item in items" :key="item.id" class="cv-block-item text">
      <div class="years">
        {{ item.years }}<br>
        <span class="sum" v-if="item.yearSum">( {{ item.yearSum }} )</span>
      </div>
      <div class="job">
        <NuxtLink :to="item.institutionWeb" class="job-title">{{ item.position }} at {{ item.institution }}</NuxtLink>
        <div class="tags"><span v-for="tag in item.tags" class="tag">{{ tag }}</span></div>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { title, items } = defineProps({
  title: String,
  description: String,
  /**
   * Array of items
   */
  items: Array as PropType<Array<Item>>
});

class Item {
  years: String
  yearSum: String
  position: String
  institution: String
  institutionWeb: String
  description: String
  tags: Array<String>
}
</script>

<style scoped lang="scss">
.cv-block {
  display: grid;
  justify-content: stretch;
  max-width: 600px;
  margin: auto auto 20px;

  & .cv-block-title {
    margin-bottom: 20px;
  }

  & p.cv-block-description {
    text-align: left;
    margin-bottom: 20px;
  }

  & .cv-block-item {
    display: grid;
    grid-template-columns: 100px auto;
    column-gap: 30px;
    text-align: left;
    margin-bottom: 48px;

    & .years {
      color: $gray2;
      & .sum {
        color: $gray3;
      }
    }
    & .job {
      display: grid;
      & a.job-title {
        font-weight: $medium;
        margin-bottom: 4px;
        color: $dark-gray;
      }
      html.dark-mode & a.job-title {
        color: $snow;
      }
      & p {
        color: $gray2;
      }
      html.dark-mode & p {
        color: $gray3;
      }
    }
  }
}
.tags {
  margin: 3px 0;
  & .tag {
    color: $primary-color;
    background: $skull-white;
    font-weight: $medium;
    border-radius: 4px;
    padding: 2px 4px;
    margin-right: 10px;
  }
}
</style>
