<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
      imgPath: 'http://127.0.0.1:8000/storage/'
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div v-for="(project, i) in  store.projects ">
        <h1>{{ project.title }}</h1>
        <img :src="imgPath + project.cover_image" alt="">
      </div>
    </div>
  </main>
</template>

<style scoped></style>
