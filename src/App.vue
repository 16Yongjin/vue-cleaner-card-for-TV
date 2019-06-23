<template lang="pug">
v-app
  v-toolbar(app)
    v-toolbar-title.headline 청소 뽑기
  v-content
    home-page
</template>

<script>
import HomePage from '@/components/HomePage'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>
