<template lang="pug">
div.h100
  .info-text.text-xs-center.display-3 카드를 고르세요
  .card-box
    flip-card(v-for="area, index in cleaningAreas" :key="index" :index="index + 1" :area="area")
    v-snackbar(v-model="snackbar" bottom right) 인원초기화는 0
</template>

<script>
import FlipCard from '@/components/FlipCard'
import { getCleaningArea } from '@/util'
import { shuffle } from 'lodash'

export default {
  components: {
    FlipCard
  },
  data () {
    return {
      snackbar: true
    }
  },
  computed: {
    cleaningAreas () {
      return shuffle(getCleaningArea(this.$store.state.cleanerNumber))
    }
  }
}
</script>

<style scoped>
.info-text {
  position: absolute;
  width: 100%;
  margin-top: 100px;
}
</style>
