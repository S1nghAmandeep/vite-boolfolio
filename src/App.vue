<script>

import axios from 'axios'
import { store } from './store'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      store,
    }
  },

  methods: {

  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@import "./style/general.scss"
</style>
