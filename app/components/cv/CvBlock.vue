<template>
  <div class="cv-block">
    <CvTitle class="cv-block-title">{{ title }}</CvTitle>
    <p class="cv-block-description text" v-if="$slots.default" >
      <slot />
    </p>
    <NuxtLink v-for="item in items" :key="item.id" class="cv-block-item box-1 text" :to="item.institutionWeb">
      <div class="years years-desktop">
        {{ item.years }}<br>
        <span v-if="item.yearSum">( {{ item.yearSum }} )</span>
      </div>
      <div class="job">
        <p class="job-title">{{ item.position }} @ <span class="institution">{{ item.institution }}</span></p>
        <div class="years years-phone">
          {{ item.years }}
        </div>
        <div class="job-description" v-html="item.description"></div>
      </div>
    </NuxtLink>
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
  margin: auto auto 40px;

  & .cv-block-title {
    margin-bottom: 24px;
  }

  & p.cv-block-description {
    text-align: left;
    margin-bottom: 16px;
  }

  & .cv-block-item {
    display: grid;
    grid-template-columns: 103px auto;
    column-gap: 30px;
    text-align: left;
    margin-bottom: 32px;

    padding: 24px 22px;

    & .years {
      color: $gray3;
      html.dark-mode & {
        color: $white-half;
      }
    }
    & .years-phone {
      display: none;
    }
    & .job {
      display: grid;
      & .job-title {
        font-weight: $medium;
        margin-bottom: 4px;
        color: $dark-gray;
      }
      html.dark-mode & .job-title {
        color: $snow;
      }
      & .job-description {
        color: $gray2;
      }
      html.dark-mode & .job-description {
        color: $white-half;
      }
    }
  }
}

@include phone {
  .cv-block {
    & .cv-block-item {
      grid-template-columns: auto auto;
      & .years-desktop {
        display: none;
      }
      & .years-phone {
        display: block;
        margin-bottom: 16px;
        font-size: $text-s;
      }
    }
  }
}
</style>
