// store.js
import { reactive } from 'vue'

export const store = reactive({
    projects: [],
    apiProject: 'http://127.0.0.1:8000/api/projects',
})