import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://autumnfish.cn/api/lol',
    timeout: 5000
})

export default instance

