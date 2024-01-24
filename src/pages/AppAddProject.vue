<script>
import axios from 'axios'
export default {
    data() {
        return {
            project: {
                title: '',
                category_id: '',
                technologies: [],
                description: '',
                cover_image: '',
            },
        }
    },
    methods: {
        fetchData() {
            // console.log('mandato')
            // this.project.cover_image = new FormData();
            // const file = document.getElementById('cover_image').files[0]
            // console.log(file);

            // this.project.cover_image.append('cover_image', file)
            // console.log(this.project.cover_image);
            axios.post('http://127.0.0.1:8000/api/projects', this.project
            ).then(res => {
                console.log(res.data);
            })
            this.project = {
                title: '',
                category: '',
                tecnologies: [],
                description: '',
                cover_image: '',
            }
        },
    }
}
</script>
<template>
    <div class="container">
        <form @submit.prevent="fetchData()">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" name="title" id="title" placeholder="Titolo"
                    v-model="project.title">
            </div>
            <div class="mb-3">
                <select class="form-select" v-model="project.category_id" name="category_id" id="category_id"
                    aria-label="Default select example">
                    <option value="">Select Category</option>
                    <option value="2">Backend</option>
                    <option value="3">Design</option>
                    <option value="1">Frontend</option>
                    <option value="4">FullStack</option>
                </select>
            </div>
            <p>Select the Technologies:</p>
            <div class="mb-3 d-flex flex-wrap gap-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="1" id="">
                    <label class="form-check-label" for="">css</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="8" id="">
                    <label class="form-check-label" for="">java</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="3" id="">
                    <label class="form-check-label" for="">javascript</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="6" id="">
                    <label class="form-check-label" for="">laravel</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="7" id="">
                    <label class="form-check-label" for="">php</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="5" id="">
                    <label class="form-check-label" for="">react</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="2" id="">
                    <label class="form-check-label" for="">scss</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="project.technologies" value="1" id="4">
                    <label class="form-check-label" for="">vue</label>
                </div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descrizione</label>
                <textarea v-model="project.description" class="form-control" name="description" id="description" rows="3"
                    placeholder="Descrivi il comic"></textarea>
            </div>
            <div class="mb-3">
                <label for="cover_image" class="form-label">Default file input example</label>
                <input class="form-control" name="cover_image" type="file" id="cover_image">
            </div>

            <div class="mb-3">
                <input type="submit" class="btn btn-primary" value="Submit">
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped></style>