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
            projectDetail: null
        }
    },
    methods: {
        fetchData() {
            axios.get(`${this.store.apiProject}${this.id}`)
                .then(res => {
                    // console.log(res)
                    this.projectDetail = res.data.results
                }).catch((error) => {
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not.found' })
                    }
                })
        }
    },
    created() {
        this.fetchData()
    }
}
</script>

<template>
    <div v-if="projectDetail" class="container">
        <h1>Id of project: {{ id }}</h1>
        <h1>{{ projectDetail.title }}</h1>
        <div v-if="projectDetail.cover_image">
            <img :src="store.imgPath + projectDetail.cover_image" alt="">
        </div>
        <p>{{ projectDetail.description }}</p>
        <p><strong>Tecnologies:</strong></p>
        <ul v-for=" tech in projectDetail.technologies">
            <li>{{ tech.name }}</li>
        </ul>
    </div>
</template>

<style scoped></style>