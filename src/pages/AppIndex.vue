<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <div class="container grid">
            <div class="card card-post" v-for="project in  store.projects " :key="project.id">
                <div v-if="project.cover_image">
                    <img :src="store.imgPath + project.cover_image" alt="">
                </div>
                <h3>Title: {{ project.title }}</h3>
                <strong>Category: {{ project.category?.name ?? 'n.a.' }}</strong>
                <div>
                    <!-- <h1>id del progetto: {{ project.id }}</h1> -->
                </div>
                <router-link :to="{ name: 'projects.show', params: { id: project.id } }">Read more....</router-link>
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

