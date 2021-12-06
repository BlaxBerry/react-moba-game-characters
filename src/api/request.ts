import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/api',
    timeout: 5000
})

// // Request Interceptors
// instance.interceptors.request.use(config => {
//     return config;
// }, err => {
//     return Promise.reject(err)
// })

// Response Interceptors
// instance.interceptors.response.use(result => {
//     return result.data;
// }, err => {
//     return Promise.reject(err)
// })


export default instance

