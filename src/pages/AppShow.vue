<script>
import axios from 'axios';
import { store } from '../store';

export default {
    props: {
        id: String,
    },
    data() {
        return {
            store,
            imgPath: 'http://127.0.0.1:8000/storage/',
            projectDeatil: null
        }
    },
    methods: {
        fetchData() {
            axios.get(`${this.store.apiProject}${this.id}`)
                .then(res => {
                    console.log(res)
                    this.projectDeatil = res.data.results

                })
        }
    },
    created() {
        this.fetchData()
    }
}
</script>

<template>
    <div v-if="projectDeatil" class="container">
        <h1>Id of project: {{ id }}</h1>
        <h1>{{ projectDeatil.title }}</h1>
        <div v-if="projectDeatil.cover_image">
            <img :src="store.imgPath + projectDeatil.cover_image" alt="">
        </div>
        <p>{{ projectDeatil.description }}</p>
        <p><strong>Tecnologies:</strong></p>
        <ul v-for=" tech in projectDeatil.technologies">
            <li>{{ tech.name }}</li>
        </ul>
    </div>
</template>

<style scoped></style>