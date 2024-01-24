<script>
import { store } from '../store'
import axios from 'axios'

export default {
    data() {
        return {
            store,
            page: 1,
            lastPage: 0,
        }
    },
    watch: {
        page: function () {
            this.getProjects()
        }
    },
    methods: {
        getProjects() {
            axios.get(this.store.apiProject, {
                params: {
                    page: this.page
                }
            }).then((res) => {
                // console.log(res)
                this.store.projects = res.data.results.data;
                this.lastPage = res.data.results.last_page;
                // console.log(this.store.projects);
            })
        },
        getPage() {

        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container ">
            <div class="grid">
                <div class="card card-post" v-for="project in  store.projects " :key="project.id">
                    <div v-if="project.cover_image">
                        <img :src="store.imgPath + project.cover_image" alt="">
                    </div>
                    <h3>Title: {{ project.title }}</h3>
                    <strong>Category: {{ project.category?.name ?? 'n.a.' }}</strong>
                    <div>
                        <!-- <h1>id del progetto: {{ project.id }}</h1> -->
                    </div>
                    <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }">Read more....</router-link>
                    <!-- <router-link :to="{ name: 'projects.show', params: { id: project.id } }">Read more....</router-link> -->
                </div>
            </div>
            <div>
                <ul class="page-number">
                    <li @click="page = n" :class="page === n ? 'active' : ''" v-for="n in lastPage" :key="n">{{ n }}</li>
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

.page-number {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
    cursor: pointer;
}

.active {
    color: blue;
    font-weight: 700;
}
</style>

