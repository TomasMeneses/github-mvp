import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/repos/TomasMeneses/agile-teste'
})

export default api;