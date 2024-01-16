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
    getProjects() {
      axios.get(this.store.apiProject).then((res) => {
        // console.log(res)
        this.store.projects = res.data.results;
        console.log(this.store.projects);
      })
    }
  },
  created() {
    this.getProjects();
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
