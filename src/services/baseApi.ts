import axios from 'axios'

const baseApi = axios.create({
    baseURL:'http://localhost:8080/sanjivanitravel',
    timeout:10000,
})

export default baseApi;