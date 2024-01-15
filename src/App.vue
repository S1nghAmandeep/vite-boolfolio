<script>

import axios from 'axios'
import { store } from './store'
import ProjectPage from './components/ProjectPage.vue'

export default {
  components: {
    ProjectPage,
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
  <ProjectPage />
</template>

<style lang="scss">
@import "./style/general.scss"
</style>
