<template lang="pug">
v-flex.card(xs12 @click="flip = !flip" :class="{ flip }")
  v-card.card-front
    v-card-title.text-xs-center.display-4.w100
      div.w100 {{ index }}
  v-card.card-back
    v-card-title.text-xs-center.display-1.w100(:class="{ 'red--text': isPublicArea }")
      div.w100 {{ area }}
</template>

<script>
export default {
  props: {
    index: Number,
    area: String
  },
  data () {
    return {
      flip: false
    }
  },
  computed: {
    isPublicArea () {
      return this.area === '공공구역'
    }
  },
  methods: {
    onKeyup (v) {
      if (v.keyCode === this.index + 48) {
        this.flip = !this.flip
      }
    }
  },
  created () {
    document.addEventListener('keypress', this.onKeyup)
  },
  destroyed () {
    document.removeEventListener('keypress', this.onKeyup)
  }
}
</script>

<style scoped>
.h100 {
  height: 100%;
}

.w100 {
  width: 100%;
}

.card {
  position: relative;
  height: 300px;
  transform-style: preserve-3d;
  transition: .5s ease;
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 10px;
}

.card-front, .card-back {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  align-content: center;
  -webkit-backface-visibility: hidden;
}

.card-back {
  transform: rotateY(-180deg);
}

.flip {
  transform: rotateY(180deg);
}
</style>
