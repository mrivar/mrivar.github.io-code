<template>
  <div class="Logo" ref="logo" @mouseover="animating = true">
    <img class="main" src="@/static/letters/m.svg" />
    <img src="@/static/letters/a.svg" />
    <img src="@/static/letters/r.svg" />
    <img src="@/static/letters/t.svg" />
    <img src="@/static/letters/í.svg" />
    <img src="@/static/letters/n.svg" />
    <img class="main" src="@/static/letters/r.svg" />
    <img src="@/static/letters/i.svg" />
    <img src="@/static/letters/v.svg" />
    <img src="@/static/letters/a.svg" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      animating: false
    }
  },
  watch: {
    animating: function(value, oldvalue) {
      if (oldvalue) return

      const lettersToShow = Array.from(this.$refs['logo'].children).filter(
        value => !value.className
      )

      this.showElements(lettersToShow, 120)
      setTimeout(() => {
        this.hideElements(lettersToShow.reverse(), 120)
      }, 2250)

      setTimeout(() => {
        this.animating = false
      }, 5000)
    }
  },
  methods: {
    showElements: function(list, delay = 100) {
      list.forEach((value, index) =>
        setTimeout(() => (value.className = 'main'), index * delay)
      )
    },
    hideElements: function(list, delay = 100) {
      list.forEach((value, index) =>
        setTimeout(() => (value.className = ''), index * delay)
      )
    },
    sleep: function(ms) {
      console.log('sleeping...')
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>

<style scoped>
.Logo {
  animation: 1s appear;
  margin: auto;
  max-width: 90%;
}

img {
  display: none;
}

img.main {
  display: inline-block;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
