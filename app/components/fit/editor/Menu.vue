<template>
  <div class="menu">
    <div class="submenu rounded">
      <div class="title">
        <h1>Run details</h1>
        <Icon name="grommet-icons:run"></Icon>
      </div>
      <div class="menu-input">
        <span>Start Date</span>
      </div>
      <div class="menu-input">
        <span>End Date</span>
      </div>
      <div class="menu-input">
        <span>Average Pace</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const format = "dd/MM/yyyy, HH:mm"
const startDate = ref(new Date())
const endDate = ref()

</script>


<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & h1 {
    font-size: $text-xl;
  }

  & span {
    width: 25px;
    height: 25px;
  }
}
.submenu {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  background-color: $white-half;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 40px;
}
.menu-input {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}
span {
  color: $light-text;
  font-weight: $normal;
}
</style>
