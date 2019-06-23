<template lang="pug">
.card-box
  v-card.margin-auto
    v-card-title.display-2.ma-2 리모컨으로 청소인원을 입력해주세요.
  v-snackbar(v-model="snackbar" :timeout="3000" bottom right) 1 ~ 7 사이값 입력
</template>

<script>
export default {
  methods: {
    onKeypress (e) {
      console.log(e)
      if (e.keyCode >= 49 && e.keyCode <= 55) {
        this.$store.commit('updateCleanerNumber', e.keyCode - 48)
      }
    }
  },
  data () {
    return {
      snackbar: true
    }
  },
  created () {
    document.addEventListener('keypress', this.onKeypress)
  },
  destroyed () {
    document.removeEventListener('keypress', this.onKeypress)
  }
}
</script>

<style scoped>
.margin-auto {
  margin: auto;
}
</style>
