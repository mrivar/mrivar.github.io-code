<template>
  <div class="grid-columns-container">
    <div class="grid-left">
      <h1 class="title">Create or Fix<br>your routes</h1>
      <h2 class="subtitle text">
        Ctrl+Alt+Fix lets you edit routes you've done, to fix GPS errors, add heart rate data, or fix other data issues.<br>
        Alternatively, you can also create routes from scratch that you haven't been able to record.
      </h2>
      <div class="button-container">
        <button class="fit-button">Upload file</button>
        <button class="fit-button">Create new route</button>
      </div>
    </div>
    <div class="grid-right">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fit'
})
</script>

<style scoped lang="scss">
.grid-columns-container {
  column-gap: 30px;
  padding-top: 100px;
  align-content: start;
}
.grid-left {
  & h1 {
    font-size: $text-xxxl;
    text-align: left;
    margin-bottom: 30px;
  }
  & h2 {
    text-align: left;
    max-width: 500px;
  }
  & .button-container {
    display: flex;
    margin-top: 8px;
    gap: 16px;
  }
}

@include phone {
  .grid-columns-container {
    padding-top: 0;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas: "left""right";
  }
}
</style>
