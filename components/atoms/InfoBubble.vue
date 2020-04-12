<template>
  <div class="infobubble">
    <span class="infobubble_title" v-if="title">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InfoBubble",
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.infobubble {
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  border: 0px solid #000000;
  background-color: #FFF;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .infobubble_title {
    position: absolute;
    top: 8px;
    left: 10px;
  }
}

</style>
