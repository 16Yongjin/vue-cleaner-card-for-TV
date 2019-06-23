<template lang="pug">
transition.h100(name="fade" mode="out-in")
    number-select-card(v-if="!cleanerNumber")
    cleaner-select-card(v-else)
</template>

<script>
import NumberSelectCard from '@/components/NumberSelectCard'
import CleanerSelectCard from '@/components/CleanerSelectCard'

export default {
  components: {
    NumberSelectCard,
    CleanerSelectCard
  },
  data () {
    return {
    }
  },
  computed: {
    cleanerNumber: {
      get () {
        return this.$store.state.cleanerNumber
      },
      set (v) {
        this.$store.commit('updateCleanerNumber', v)
      }
    }
  },
  created () {
    document.addEventListener('keypress', e => {
      if (e.key === '0') {
        this.cleanerNumber = 0
      }
    })
  }
}
</script>

<style>
.h100 {
  height: 100%;
}

.w100 {
  width: 100%;
}

.card-box {
  display: flex;
  align-items: center;
  align-content: center;
  height: 100%;
  margin: 0 30px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
