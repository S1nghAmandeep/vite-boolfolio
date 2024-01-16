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
            <div class="card card-post" v-for="project in store.projects" :key="project.id">
                <div v-if="project.cover_image">
                    <img :src="imgPath + project.cover_image" alt="">
                </div>
                <h3>Title: {{ project.title }}</h3>
                <strong>Category: {{ project.category?.name ?? 'n.a.' }}</strong>
                <p><strong>Tecnologies:</strong></p>
                <ul v-for=" tech in project.technologies">
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

