// store.js
import { reactive } from 'vue'

export const store = reactive({
    projects: [],
    imgPath: 'http://127.0.0.1:8000/storage/',
    apiProject: 'http://127.0.0.1:8000/api/projects',
})