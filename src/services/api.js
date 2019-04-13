import axios from 'axios'

const api = axios.create({
    baseURL: 'https://oministack-b.herokuapp.com'
})

export default api