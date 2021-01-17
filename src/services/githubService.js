import axios from 'axios'

var baseURL = 'https://api.github.com/repos/'

const api = axios.create({
    baseURL
});

export default api;