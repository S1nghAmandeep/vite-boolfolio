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
    <div class="container grid">
      <div class="card card-post" v-for="(project, i) in   store.projects  ">
        <img v-if="project.cover_image" :src="imgPath + project.cover_image" alt="">
        <h3>{{ project.title }}</h3>
        <strong v-if="project.category">{{ project.category.name }}</strong>
        <ul v-for=" tech  in  project.technologies ">
          <li>{{ tech.name }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card.card-post {
  padding: 20px;
  border-radius: 8px;
  background-color: bisque;
}
</style>
